function buildColourImgBody(aObj) {
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
                htmlStmt += '<div class="page_sub_title d-flex">';
                htmlStmt += '<p>' + aObj.subTitleTextLeft + '</p>';
                for (var si = 0; si < aObj.subTitleIcons.length; si++) {
                    htmlStmt += '<img src="' + aObj.subTitleIcons[si] + '"/>';
                }
                htmlStmt += '<p>' + aObj.subTitleTextRight + '</p>';
                htmlStmt += '</div></div>';
            htmlStmt += '</div>';
        htmlStmt += '</div>';

        // --- colour palette ---
        htmlStmt += '<div class="ci_palette_wrap">';
        htmlStmt += '<div class="ci_palette">';
        for (var c = 0; c < aObj.colours.length; c++) {
            var col = aObj.colours[c];
            htmlStmt += '<div class="ci_colour_swatch" ';
            htmlStmt += 'data-colour="' + col.name + '" ';
            htmlStmt += 'style="background-color:' + col.hex + ';" ';
            htmlStmt += 'title="' + col.name + '">';
            htmlStmt += '</div>';
        }
        htmlStmt += '</div></div>';

        // --- images grid ---
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-center">';
        htmlStmt += '<div class="ci_images_wrap">';

        for (var i = 0; i < aObj.images.length; i++) {
            var imgObj = aObj.images[i];
            htmlStmt += '<div class="ci_item" id="ci_item_' + (i+1) + '" ';
            htmlStmt += 'data-answer="' + imgObj.answer + '" ';
            htmlStmt += 'data-colour="none" ';
            htmlStmt += 'data-index="' + (i+1) + '">';

                // tick/cross
                htmlStmt += '<div class="ci_icon_wrap">';
                htmlStmt += '<div class="ci_tick"><img src="../images/icons/check_btn.png"></div>';
                htmlStmt += '<div class="ci_cross"><img src="../images/icons/cross_btn.png"></div>';
                htmlStmt += '</div>';

                // الصورة مع overlay للون
                htmlStmt += '<div class="ci_img_container">';
                    htmlStmt += '<img class="ci_img" src="' + imgObj.image + '">';
                    htmlStmt += '<div class="ci_colour_overlay"></div>';
                htmlStmt += '</div>';

                // الليبل
                if (imgObj.label != '') {
                    htmlStmt += '<div class="ci_label">' + imgObj.label + '</div>';
                }

                // audio
                if (imgObj.audio != '') {
                    htmlStmt += '<div class="audioIcon off ci_audio" data-audio="' + imgObj.audio + '"></div>';
                }

            htmlStmt += '</div>';
        }

        htmlStmt += '</div></div></div>';
    }

    $('.activity_area').append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory('file'));
}