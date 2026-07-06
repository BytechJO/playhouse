function buildMarkWordsBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        // ===== heading =====
        htmlStmt += '<div class="act_head_group justify-content-center">';
        htmlStmt += '<div class="audioIcon off contant" data-slideNum="1" data-audio="' + aObj.mainTitleAudio + '">';
        htmlStmt += '<div class="q-type-img-container">';
        htmlStmt += '</div></div>';

        htmlStmt += '<div class="activityHeading">';
        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt += "<div class='page_sub_title d-flex'>";
        htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
        htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
        htmlStmt += "</div></div></div></div>";

        // ===== main content =====
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont markwords_cont justify-content-start justify-content-sm-center">';

        htmlStmt += '<div class="markmode_bar d-flex justify-content-center">';
        htmlStmt += '<div class="markmode_btn active" data-mode="adjective"><span class="mode_circle_icon"></span> Adjective</div>';
        htmlStmt += '<div class="markmode_btn" data-mode="noun"><span class="mode_underline_icon"></span> Noun</div>';
        htmlStmt += '</div>';

        htmlStmt += '<div class="markwords_grid d-flex flex-column flex-wrap">';
        jQuery.each(aObj.questions, function (qIndex, q) {
            htmlStmt += '<div class="markwords_item d-flex align-items-center" data-qno="' + q.number + '">';
            htmlStmt += '<div class="q_num_space">' + q.number + '</div>';
            htmlStmt += '<div class="sentence_words d-flex flex-wrap">';
            jQuery.each(q.words, function (wIndex, w) {
                htmlStmt += '<span class="mark_word" data-word-index="' + wIndex + '" data-correct-tag="' + w.tag + '" data-marked="none">' + w.text + '</span>';
            });
            htmlStmt += '</div>';
            if (q.image != '' && q.image != undefined) {
                htmlStmt += '<div class="q_image"><img src="' + q.image + '"></div>';
            }
            htmlStmt += '<div class="icon_wrap_holder">';
            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"></div>';
            htmlStmt += '<div class="cross"></div>';
            htmlStmt += '</div></div>';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>';

        htmlStmt += '</div></div>';
    }

    console.log('htmlStmt >> markwords Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}

// ===================== كائن النشاط =====================
function MarkWords(aContainer, aData) {
    var self = this;
    self.container = aContainer;
    self.data = aData;

    self.initialSettings = function () {
        // ربط حدث اختيار الوضع (circle / underline)
        self.container.off('click.markmode').on('click.markmode', '.markmode_btn', function () {
            $('.markmode_btn').removeClass('active');
            $(this).addClass('active');
        });

        // ربط حدث الضغط على كلمة
        self.container.off('click.markword').on('click.markword', '.mark_word', function () {
            var currentMode = $('.markmode_btn.active').data('mode');
            var $word = $(this);
            var markedAs = $word.data('marked');

            if (markedAs == currentMode) {
                $word.removeClass('circled underlined').data('marked', 'none').attr('data-marked', 'none');
            } else {
                $word.removeClass('circled underlined');
                if (currentMode == 'adjective') {
                    $word.addClass('circled');
                } else if (currentMode == 'noun') {
                    $word.addClass('underlined');
                }
                $word.data('marked', currentMode).attr('data-marked', currentMode);
            }
        });

        // تفعيل الأزرار - نفس النمط المتبع بباقي الأنشطة
        $('.checkBtn').removeClass('disabled');
        $('.resetBtn').removeClass('disabled');

        initialSettingsDone(1); // يخبر النظام إنه التحميل خلص (موجودة بـ generalfunctions.js)
    };

    self.validate = function () {
        var allCorrect = true;
        $('.markwords_item').each(function () {
            var itemCorrect = true;
            $(this).find('.mark_word').each(function () {
                var correctTag = $(this).data('correct-tag');
                var markedTag = $(this).data('marked');
                if (correctTag != markedTag) {
                    itemCorrect = false;
                }
            });
            var $iconWrap = $(this).find('.icon_wrap');
            $iconWrap.find('.tick').empty();
            $iconWrap.find('.cross').empty();
            if (itemCorrect) {
                $iconWrap.find('.tick').html('<img src="../images/icons/check_btn.png">');
            } else {
                $iconWrap.find('.cross').html('<img src="../images/icons/cross_btn.png">');
                allCorrect = false;
            }
        });
        showFeedback(true, allCorrect);
        $('.resetBtn').removeClass('disabled');
    };

    self.reset = function () {
        $('.mark_word').removeClass('circled underlined').attr('data-marked', 'none').data('marked', 'none');
        $('.icon_wrap .tick, .icon_wrap .cross').empty();
        $('.markmode_btn').removeClass('active');
        $('.markmode_btn[data-mode="adjective"]').addClass('active');
        $('.checkBtn').removeClass('disabled');
        $('.resetBtn').addClass('disabled');
    };
}