//  ****************************************** //
//  CircleAnswer - Version no: 1
//  Draws a hand-drawn style SVG circle around the
//  speech-bubble option the student taps/clicks on.
//  ****************************************** //
window.CircleAnswer = function(obj, dataObj) {
    this.settings = {
        'activity_area': obj[0],
        'data_obj'     : dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
};

CircleAnswer.prototype = {

    init: function(ob) {
        this.ob = ob;
        this.listen(ob);
    },

    // ---------- Interaction ----------
    listen: function(ob) {
        var self = this;
        var e = ob.activity_area;
        var selectTyp = (ob.data_obj).select;
        var picks = e.querySelectorAll('.pick');

        for (var i = 0; i < picks.length; i++) {
            picks[i].addEventListener("click", function(evt) {
                var target = $(evt.target);
                if (target.hasClass('audioIcon')) { return; }

                var _thisId = $(this).attr('id');
                var _parentNum = _thisId.split('_')[1];
                var thisQue = $(this).closest('#que_' + _parentNum);
                var thisQuePicks = thisQue.find('.pick');

                self.showIcons(false);

                var isSel = !($(this).hasClass('selected'));

                if (selectTyp == 'single') {
                    self.resetAllPicks(thisQue, thisQuePicks);
                } else {
                    self.resetAllPicks(thisQue, [$(this)]);
                }

                if (isSel) {
                    $(this).addClass('selected');
                    self.drawCircle(this, 'default');
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },

    // ---------- SVG hand-drawn circle ----------
    // Builds a wobbly closed ellipse-like path so it reads as "hand drawn"
    // rather than a perfect geometric ellipse.
    buildSketchyEllipsePath: function() {
        var cx = 110, cy = 55, rx = 100, ry = 46;
        var pts = [];
        var steps = 16;

        for (var i = 0; i <= steps; i++) {
            var angle = (i / steps) * Math.PI * 2;
            var jitterX = (Math.random() - 0.5) * 6;
            var jitterY = (Math.random() - 0.5) * 5;
            var x = cx + Math.cos(angle) * rx + jitterX;
            var y = cy + Math.sin(angle) * ry + jitterY;
            pts.push([x, y]);
        }

        var d = 'M ' + pts[0][0] + ' ' + pts[0][1] + ' ';
        for (var p = 1; p < pts.length; p++) {
            d += 'Q ' + ((pts[p - 1][0] + pts[p][0]) / 2) + ' ' + ((pts[p - 1][1] + pts[p][1]) / 2) +
                 ' ' + pts[p][0] + ' ' + pts[p][1] + ' ';
        }
        // slight overlap stroke at the start, mimicking a hand-drawn closure
        d += 'L ' + (pts[0][0] + 4) + ' ' + (pts[0][1] + 2);

        return d;
    },

    drawCircle: function(pickEl, state) {
        var svg = pickEl.querySelector('.circle_svg');
        var path = svg.querySelector('.circle_path');
        path.setAttribute('d', this.buildSketchyEllipsePath());

        svg.classList.remove('circle-default', 'circle-correct', 'circle-incorrect');
        svg.classList.add('circle-' + state);
        svg.style.display = 'block';
    },

    hideCircle: function(pickEl) {
        var svg = pickEl.querySelector('.circle_svg');
        svg.style.display = 'none';
        svg.querySelector('.circle_path').setAttribute('d', '');
    },

    // ---------- Reset helpers ----------
    resetAllPicks: function(qOb, aArr) {
        var picks = aArr;
        for (var i = 0; i < picks.length; i++) {
            var tPick = (picks[i].classList == undefined) ? (picks[i])[0] : picks[i];
            tPick.classList.remove("selected");
            tPick.classList.remove("isCorrect");
            tPick.classList.remove("isNotCorrect");
            this.hideCircle(tPick);
        }
    },

    // ---------- Validation ----------
    validate: function() {
        var self = this;
        var ob = this.ob;
        var e = ob.activity_area;
        var elsQue = e.querySelectorAll('.que');
        var numOfQs = elsQue.length;
        var allCorrect = false;
        var resultArr = [];

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = (ob.data_obj).questions[fIndx - 1];

            elsQue[i].querySelector('.tick').style.display = 'none';
            elsQue[i].querySelector('.cross').style.display = 'none';

            var _cAns = getIntArray(fDataObj.answer);
            var _uAns = [];

            var picks = elsQue[i].querySelectorAll('.pick');
            if (picks.length > 0) {
                for (var a = 0; a < picks.length; a++) {
                    if (picks[a].classList.contains('selected')) {
                        _uAns.push(a + 1);
                        var isAns = ($.inArray((a + 1), _cAns) >= 0);

                        if (isAns) {
                            picks[a].classList.add('isCorrect');
                            self.drawCircle(picks[a], 'correct');
                        } else {
                            picks[a].classList.add('isNotCorrect');
                            self.drawCircle(picks[a], 'incorrect');
                        }
                    }
                }
            }

            if ((_uAns.length > 0) && (_cAns.length == _uAns.length)) {
                resultArr[i] = (compareArrays(_uAns, _cAns)) ? 1 : 0;
            }
        }

        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQs);
        self.showIcons(true, resultArr);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },

    showIcons: function(aBoo, aVal) {
        var ob = this.ob;
        var e = ob.activity_area;
        var needIcon = ((typeof (ob.data_obj).showicon != undefined && (ob.data_obj).showicon != null) ? (ob.data_obj).showicon : 'true');
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            if (aBoo) {
                if (needIcon == 'true') {
                    elsQue[i].querySelector('.icon_wrap').style.display = 'block';
                    if (aVal[i] == 1) {
                        elsQue[i].querySelector('.tick').style.display = 'block';
                    } else {
                        elsQue[i].querySelector('.cross').style.display = 'block';
                    }
                }
            } else {
                elsQue[i].querySelector('.icon_wrap').style.display = 'none';
                elsQue[i].querySelector('.tick').style.display = 'none';
                elsQue[i].querySelector('.cross').style.display = 'none';
            }
        }
    },

    // ---------- Reset ----------
    reset: function() {
        var self = this;
        var ob = this.ob;
        var e = ob.activity_area;
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            self.showIcons(false);
            var pickOptions = elsQue[i].querySelectorAll('.pick');
            self.resetAllPicks(elsQue[i], pickOptions);

            for (var a = 0; a < pickOptions.length; a++) {
                pickOptions[a].style.cursor = 'pointer';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },

    initialSettings: function() {
        this.reset();
        initialSettingsDone(1);
    }
};