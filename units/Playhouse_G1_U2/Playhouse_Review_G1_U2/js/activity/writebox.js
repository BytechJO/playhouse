// =========================================
// WriteBox Activity - writebox.js
// =========================================
window.WriteBox = function (obj, dataObj) {
    var ob = obj[0].getElementsByClassName('options');
    this.settings = {
        'activity_area': ob[0],
        'data_obj': dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
};

WriteBox.prototype = {
    init: function (ob) {
        this.ob = ob;
    },

    validate: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var allCorrect = true;
        var resultArr = [];

        $area.find('.wb_question').each(function () {
            var qIndx = parseInt($(this).data('qno'));
            var qData = (ob.data_obj).questions[qIndx - 1];
            var answers = qData.answers;
            var inputs = $(this).find('.wb_input');
            var qCorrect = true;

            inputs.each(function (i) {
                var userVal = $.trim($(this).val()).toLowerCase();
                var correctVal = $.trim(answers[i]).toLowerCase();

                if (userVal === correctVal) {
                    $(this).addClass('wb_correct').removeClass('wb_wrong');
                } else {
                    $(this).addClass('wb_wrong').removeClass('wb_correct');
                    qCorrect = false;
                }
            });

            resultArr.push(qCorrect ? 1 : 0);
            if (!qCorrect) allCorrect = false;

            // show tick or cross
            $(this).find('.icon_wrap').show();
            if (qCorrect) {
                $(this).find('.tick').show();
                $(this).find('.cross').hide();
            } else {
                $(this).find('.cross').show();
                $(this).find('.tick').hide();
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

        $area.find('.wb_input').val('').removeClass('wb_correct wb_wrong');
        $area.find('.icon_wrap').hide();
        $area.find('.tick').hide();
        $area.find('.cross').hide();

        document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
    },

    initialSettings: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        // hide icons
        $area.find('.icon_wrap').hide();
        $area.find('.tick').hide();
        $area.find('.cross').hide();

        // enable check when user types
        $area.on('input', '.wb_input', function () {
            var hasValue = false;
            $area.find('.wb_input').each(function () {
                if ($.trim($(this).val()) !== '') { hasValue = true; }
            });
            if (hasValue) {
                document.getElementsByClassName('checkBtn')[0].classList.remove('disabled');
                document.getElementsByClassName('resetBtn')[0].classList.remove('disabled');
            } else {
                document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
            }
        });

        initialSettingsDone(1);
    }
};