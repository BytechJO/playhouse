// =========================================
// ColourImg Activity - colourimg.js
// الطالب يختار لون من palette بعدين يضغط على الصورة
// =========================================
window.ColourImg = function (obj, dataObj) {
    var ob = obj[0].getElementsByClassName('options');
    this.settings = {
        'activity_area': ob[0],
        'data_obj'     : dataObj,
        'parent_holder': obj[0]
    };
    this.selectedColour = null;
    this.selectedHex    = null;
    this.init(this.settings);
};

ColourImg.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },

    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);
        var $parent = $(ob.parent_holder);

        // اختيار لون من الـ palette
        $parent.on('click', '.ci_colour_swatch', function () {
            $parent.find('.ci_colour_swatch').removeClass('ci_swatch_selected');
            $(this).addClass('ci_swatch_selected');
            self.selectedColour = $(this).data('colour');
            self.selectedHex    = $(this).css('background-color');
        });

        // تلوين الصورة
        $area.on('click', '.ci_item', function () {
            if (!self.selectedColour) {
                // لو ما اختار لون بعد، اهتز الـ palette
                $parent.find('.ci_palette').addClass('ci_shake');
                setTimeout(function () {
                    $parent.find('.ci_palette').removeClass('ci_shake');
                }, 500);
                return;
            }

            var currentColour = $(this).data('colour');

            if (currentColour === self.selectedColour) {
                // نفس اللون: إزالة التلوين
                $(this).data('colour', 'none');
                $(this).find('.ci_colour_overlay').css({
                    'background-color': 'transparent',
                    'opacity': 0
                });
            } else {
                // تلوين بالـ selected colour
                $(this).data('colour', self.selectedColour);
                $(this).find('.ci_colour_overlay').css({
                    'background-color': self.selectedHex,
                    'opacity': 0.5
                });
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

        $area.find('.ci_item').each(function () {
            var answer      = $(this).data('answer');
            var userColour  = $(this).data('colour');
            var correct     = (answer === 'none')
                ? (userColour === 'none')
                : (userColour === answer);

            // إظهار tick/cross
            $(this).find('.ci_icon_wrap').show();
            if (correct) {
                $(this).find('.ci_tick').show();
                $(this).find('.ci_cross').hide();
                $(this).addClass('ci_correct').removeClass('ci_wrong');
            } else {
                $(this).find('.ci_cross').show();
                $(this).find('.ci_tick').hide();
                $(this).addClass('ci_wrong').removeClass('ci_correct');
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

        this.selectedColour = null;
        this.selectedHex    = null;
        $(ob.parent_holder).find('.ci_colour_swatch').removeClass('ci_swatch_selected');

        $area.find('.ci_item')
            .data('colour', 'none')
            .removeClass('ci_correct ci_wrong');
        $area.find('.ci_colour_overlay').css({ 'background-color': 'transparent', 'opacity': 0 });
        $area.find('.ci_icon_wrap').hide();
        $area.find('.ci_tick, .ci_cross').hide();

        document.getElementsByClassName('checkBtn')[0].classList.add('disabled');
    },

    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
};