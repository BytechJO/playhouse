function buildLineDrawBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null && aObj != {}) {
        htmlStmt += '<div class="act_head_group">';
        htmlStmt += '<div class="d-flex justify-content-start">';
        htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
        htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
        htmlStmt += '</div>'; // end - d-flex justify-content-start
        if (aObj.activitysubheading != "") {
            htmlStmt += '<div class="sub_title">' + aObj.activitysubheading + '</div>';
        }
        htmlStmt += '</div>'; // end - act_head_group
        htmlStmt += '<div class="cont_ht_sf">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-lg-center">';
       
        var currentQue = 1;
        htmlStmt += '<div class="que options d-flex m-auto">'; 
        htmlStmt += '<div class="lines"></div>';
        htmlStmt += '<div class="drag_wrap d-flex align-items-center">';
        htmlStmt += '<div class="drags">';
        var onTextAudioPlay = (typeof aObj.ontextaudioplay != undefined && aObj.ontextaudioplay != null) ? aObj.ontextaudioplay:'color:green';
        var onImgAudioPlay = (typeof aObj.onimgaudioplay != undefined && aObj.onimgaudioplay != null) ? aObj.onimgaudioplay:'filter:brightness(1.2)';
        
        var dragsArr = (aObj.questions).drags;
        if (dragsArr.length > 0) {
            for (var dg = 0; dg < dragsArr.length; dg++) {
                console.log('drags : ', dg, dragsArr[dg].text);
                
                htmlStmt += '<div class="opt drag d-flex align-items-center" id="drag_' + (currentQue) + '_' + (dg + 1) + '">';

                if (dragsArr[dg].text != "" && dragsArr[dg].text != "no" && dragsArr[dg].image == "no") {
                    htmlStmt += '<div class="txtHolder">' + dragsArr[dg].text + '</div>';
                } else {
                    if (dragsArr[dg].image != "no" && (dragsArr[dg].text == "no" || dragsArr[dg].text == "")) {
                        htmlStmt += '<div class="imgHolder"><img src="' + dragsArr[dg].image + '"></div>';
                    }else{
                        if (dragsArr[dg].image != "no" && dragsArr[dg].text != "no" ){
                            htmlStmt += '<div class="dragcont d-flex flex-column align-items-center">';
                            htmlStmt += '<div class="imgHolder"><img class="audioTile" data-audio="' + dragsArr[dg].audio + '" data-onaudioplay="filter:brightness(0.5)" src="'+dragsArr[dg].image+'"></div>';
                            htmlStmt += '<div class="txtHolder audioTile" data-audio="' + dragsArr[dg].audio + '" data-onaudioplay="color:'+onTextAudioPlay+' ">' + dragsArr[dg].text + '</div>';
                            htmlStmt += '</div>';
                        }
                    }
                }
                htmlStmt += '<div class="node dragPoint" ></div>';
                htmlStmt += '</div>';
               
            }
        }
        htmlStmt += '</div>';
        htmlStmt += '</div>';// end - drag_wrap
        htmlStmt += ' <div class="drop_wrap d-flex align-items-center">';
        htmlStmt += ' <div class="droppers">';
        var dropsArr = (aObj.questions).drops;
        if (dropsArr.length > 0) {
            for (var dp = 0; dp < dropsArr.length; dp++) {
                htmlStmt += '<div class="opt drop d-flex align-items-center" id="drop_' + (currentQue) + '_' + (dp + 1) + '">';
                htmlStmt += '<div class="node dropPoint" ></div>';
                htmlStmt += '<div class="drop_grp">';
                if (dropsArr[dp].text != "" && dropsArr[dp].text != "no" && dropsArr[dp].image == "no") {
                    if(dropsArr[dp].audio == "" || dropsArr[dp].audio == "no"){
                        htmlStmt += '<div class="txtHolder">';
                    }else{
                        htmlStmt += '<div class="txtHolder audioTile" data-audio="' + dropsArr[dp].audio + '" data-onaudioplay="color:'+onTextAudioPlay+'">';
                    }
                    htmlStmt += dropsArr[dp].text + '</div>';
                } else {
                    if (dropsArr[dp].image != "no") {
                        if (dropsArr[dp].audio == "no" || dropsArr[dp].audio == "") {
                            htmlStmt += '<div class="imgHolder">';
                        } else {
                            htmlStmt += '<div class="imgHolder audioTile" data-audio="' + dropsArr[dp].audio + '" data-onaudioplay="'+onImgAudioPlay+'">';                            
                        }
                        htmlStmt += '<div class="img_space"><img src="' + dropsArr[dp].image + '"></div>'; // end - img_space 
                        htmlStmt += '</div>'; // end - imgHolder 
                    }
                }

                htmlStmt += '<div class="icon_wrap_holder">';
                htmlStmt += '<div class="icon_wrap" ><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
                htmlStmt += '</div>';// end - icon_wrap_holder  
                htmlStmt += '</div>';// end - drop_grp        
                htmlStmt += '</div>';// end - opt drag
            }
        }
        htmlStmt += '</div>';// end - div
        htmlStmt += '</div>';// end - drop_wrap
        
        htmlStmt += '</div> <!-- //que ends -->';// end - que
       
        htmlStmt += '</div> <!-- //all_cont -->';// end - all_cont
        htmlStmt += '</div> <!-- //cont_ht_sf -->';// end - cont_ht_sf
        $(".activity_area").append(htmlStmt);
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
}