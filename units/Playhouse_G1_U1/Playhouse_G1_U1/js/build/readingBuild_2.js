function buildFillInBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {
        var layOut = parseInt(aObj.layout);
        if (layOut == 1) {
            htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
            htmlStmt +=  '<a href="">'
            htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
            htmlStmt +=  '</a>'
            htmlStmt +=  '</div>'
            htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
            htmlStmt +=  '<a href="">'
            htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
            htmlStmt +=  '</a>'
            htmlStmt +=  '</div>'

            htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
            htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
            htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="options cont_ht_sf mx-auto"><div class="all_cont justify-content-start justify-content-sm-center">';
            htmlStmt += "<img src='" + aObj.mainImage + "' style='height: 500px;'/>";
            htmlStmt += '<div class="cont_group">'
            var curIndex = 0;
            for (var snapIndex = 0; snapIndex < aObj.imagePlacePos.length; snapIndex++) {
                htmlStmt += "<div class='snap_group_" + Number(snapIndex + 1) + " row mx-0'>";
                for (var imgIndex = 0; imgIndex < aObj.imagePlacePos[snapIndex].colData.length; imgIndex++) {
                    htmlStmt += "<div class='col-12 col-md-" + aObj.imagePlacePos[snapIndex].colWidth[imgIndex] + "'>";
                    
                    console.log("__", aObj.imagePlacePos[snapIndex])
                    if (aObj.imagePlacePos[snapIndex].colData[imgIndex] != 0) {
                        wordStyle = curIndex + 1;
                        htmlStmt += "<div class='audioIcon' data-audio='" + aObj.audio[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                            htmlStmt += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text'>" + aObj.word[curIndex] + "</div></div>";
                        htmlStmt += "</div>";
                        curIndex++;
                    }
                    htmlStmt += "</div>"
                }
                htmlStmt += "</div>";
            }

            htmlStmt += '</div></div></div>';
            console.log('htmlStmt >> ', htmlStmt);
        }

    }
    console.log('htmlStmt >> fillin Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}