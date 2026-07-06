function buildColourWordBody(aObj) {
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

        // --- sentences ---
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-center">';
        htmlStmt += '<div class="cw_sentences_wrap">';

        for (var s = 0; s < aObj.sentences.length; s++) {
            var sentence = aObj.sentences[s];
            htmlStmt += '<div class="cw_sentence">';

            for (var w = 0; w < sentence.words.length; w++) {
                var word = sentence.words[w];
                htmlStmt += '<span class="cw_word" ';
                htmlStmt += 'data-answer="' + word.answer + '" ';
                htmlStmt += 'data-state="none">';
                htmlStmt += word.text;
                htmlStmt += '</span> ';
            }

            htmlStmt += '</div>'; // end cw_sentence
        }

        htmlStmt += '</div></div></div>';
    }

    $('.activity_area').append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory('file'));
}