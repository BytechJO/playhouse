// =========================================
// ColourWord Activity - colourword.js
// =========================================
window.ColourWord = function (obj, dataObj) {
    var ob = obj[0].getElementsByClassName('options');
    this.settings = {
        'activity_area': ob[0],
        'data_obj'     : dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
};

ColourWord.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        $area.on('click', '.cw_word', function () {
            var state = $(this).data('state');

            // toggle: none -> colour -> circle -> none
            if (state === 'none') {
                $(this).data('state', 'colour');
                $(this).removeClass('cw_circle').addClass('cw_colour');
            } else if (state === 'colour') {
                $(this).data('state', 'circle');
                $(this).removeClass('cw_colour').addClass('cw_circle');
            } else {
                $(this).data('state', 'none');
                $(this).removeClass('cw_colour cw_circle');
            }

            // enable check/reset
            document.getElementsByClassName('checkBtn')[0].classList.remove('disabled');
            document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
        });
    },

    validate: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var allCorrect = true;

        $area.find('.cw_word').each(function () {
            var answer = $(this).data('answer');
            var state  = $(this).data('state');
            var correct = false;

            if (answer === 'none'   && state === 'none')   correct = true;
            if (answer === 'colour' && state === 'colour') correct = true;
            if (answer === 'circle' && state === 'circle') correct = true;
            if (answer === 'both'   && state === 'colour') correct = true; // لوّن بس
            // لو بدك تقبل التلوين والدائرة كلاهم صح لـ both:
            // if (answer === 'both' && (state === 'colour' || state === 'circle')) correct = true;

            if (correct) {
                $(this).addClass('cw_correct').removeClass('cw_wrong');
            } else {
                $(this).addClass('cw_wrong').removeClass('cw_correct');
                allCorrect = false;
            }
        });

        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add('disabled');
        }
    },

    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        $area.find('.cw_word')
            .data('state', 'none')
            .removeClass('cw_colour cw_circle cw_correct cw_wrong');

        document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};