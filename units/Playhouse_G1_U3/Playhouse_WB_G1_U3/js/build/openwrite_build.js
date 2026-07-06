function buildOpenWriteBody(aObj) {
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
                htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
                if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                    htmlStmt += '<img class="mainTitleIcon" src="' + aObj.mainTitleIcon + '" style="right:' + aObj.mainTitleIconPos.right + '">';
                }
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="activityHeading">';
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += '<div class="page_sub_title d-flex align-items-center">';
                htmlStmt += '<p>' + aObj.subTitleTextLeft + '</p>';
                for (var si = 0; si < aObj.subTitleIcons.length; si++) {
                    htmlStmt += '<img class="subtitle_icon" src="' + aObj.subTitleIcons[si] + '"/>';
                }
                htmlStmt += '<p>' + aObj.subTitleTextRight + '</p>';
                htmlStmt += '</div></div>';
            htmlStmt += '</div>';
        htmlStmt += '</div>';

        // --- lines ---
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-center">';
        htmlStmt += '<div class="ow_lines_wrap">';

        for (var i = 0; i < aObj.lines.length; i++) {
            htmlStmt += '<div class="ow_line">';
            htmlStmt += '<span class="ow_prefix">' + aObj.lines[i].prefix + '</span>';
            htmlStmt += '<input class="ow_input" type="text" autocomplete="off" />';
            htmlStmt += '</div>';
        }

        htmlStmt += '</div></div></div>';
    }

    $('.activity_area').append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory('file'));
}