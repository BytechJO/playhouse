function buildWriteboxBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {

        // --- back/next ---
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        // --- header ---
        htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
             
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="activityHeading">';
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += '<div class="page_sub_title d-flex">';
                htmlStmt += '<p>' + aObj.subTitleTextLeft + '</p>';
                for (var si = 0; si < aObj.subTitleIcons.length; si++) {
                    htmlStmt += '<img src="' + aObj.subTitleIcons[si] + '"/>';
                }
                htmlStmt += '<p>' + aObj.subTitleTextRight + '</p>';
                htmlStmt += '</div></div>';
            htmlStmt += '</div>';
        htmlStmt += '</div>';

        // --- questions ---
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-center">';
        htmlStmt += '<div class="writebox_questions_wrap">';

        for (var q = 0; q < aObj.questions.length; q++) {
            var qObj = aObj.questions[q];
            var qNum = q + 1;
            var inputCounter = 0;

            htmlStmt += '<div class="wb_question" id="que_' + qNum + '" data-qno="' + qNum + '">';

                // tick/cross
                htmlStmt += '<div class="icon_wrap">';
                htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
                htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
                htmlStmt += '</div>';

                // الصورة الرئيسية كـ wrapper
                htmlStmt += '<div class="wb_image_wrap">';
                    htmlStmt += '<img class="wb_main_img" src="' + qObj.image + '">';

                    // الـ bubbles
                    for (var b = 0; b < qObj.bubbles.length; b++) {
                        var bubble = qObj.bubbles[b];
                        var pos = bubble.position;

                        // بناء الـ position style
                        var posStyle = '';
                        if (pos.top    != undefined) posStyle += 'top:'    + pos.top    + ';';
                        if (pos.bottom != undefined) posStyle += 'bottom:' + pos.bottom + ';';
                        if (pos.left   != undefined) posStyle += 'left:'   + pos.left   + ';';
                        if (pos.right  != undefined) posStyle += 'right:'  + pos.right  + ';';

                        htmlStmt += '<div class="wb_bubble_container" style="' + posStyle + '">';

                            // // الشخصية لو موجودة
                            // if (bubble.character != '') {
                            //     htmlStmt += '<img class="wb_character" src="' + bubble.character + '">';
                            // }

                            // الـ bubble مع الصورة كـ background
                            var bgStyle = bubble.bubbleImage != '' 
                                ? 'background-image:url(' + bubble.bubbleImage + ');' 
                                : '';

                            htmlStmt += '<div class="wb_bubble" style="' + bgStyle + '">';
                            htmlStmt += buildTextWithInputs(bubble.text, qNum, inputCounter);
                            htmlStmt += '</div>';

                        htmlStmt += '</div>';

                        // زيادة العداد
                        var matches = bubble.text.match(/\[_\]/g);
                        if (matches) inputCounter += matches.length;
                    }

                htmlStmt += '</div>'; // end wb_image_wrap

            htmlStmt += '</div>'; // end wb_question
        }

        htmlStmt += '</div></div></div>';
    }

    $('.activity_area').append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory('file'));
}

function buildTextWithInputs(text, qNum, startCount) {
    var counter = startCount;
    return text.replace(/\[_\]/g, function () {
        counter++;
        return '<input class="wb_input" type="text" ' +
               'data-qno="' + qNum + '" ' +
               'data-inputnum="' + counter + '" ' +
               'autocomplete="off" />';
    });
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}