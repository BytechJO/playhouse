/*$(function () {
    var myData = {};  */
function buildFillInBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {
        var layOut = parseInt(aObj.layout);
        var numOfQuestions = (aObj.questions).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
        var currentQue = 1;
        console.log("NUm of Question: ", numOfQuestions, numInRowArray, numOfRows);
        if (layOut == 1) {
            htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
            htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
            htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="options">';
            for (x = 0; x < numOfRows; x++) {
                htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';
                for (y = 0; y < numInRowArray[x].length; y++) {
                    htmlStmt += '<div class="p-0">';
                    htmlStmt += '<div class="que que_' + currentQue + ' d-flex justify-content-around pt-3 m-1" data-qno="' + (currentQue) + '">';

                    htmlStmt += '<div class="image_wrap"><img src="' + ((aObj.questions)[currentQue - 1]).image + '"></div>';
                    htmlStmt += '<div class="txt_wrap">';
                    htmlStmt += '<div class="txtBox mx-2" data-type="text"><input type="text"  onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" maxlength="1"/>  <span>' + ((aObj.questions)[currentQue - 1]).question + '</span></div>';
                    htmlStmt += '<div class="theIcons d-flex">';
                    htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '"></div>';

                    htmlStmt += '<div class="icon_wrap mx-1">';
                    htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                    htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                    htmlStmt += '</div>';
                    htmlStmt += '</div>';
                    htmlStmt += '</div></div></div>';
                    currentQue++;

                }
                htmlStmt += '</div>';
            }
            htmlStmt += '</div>';
        } else if (layOut == 2) {
            htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
            htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
            htmlStmt += '<div class="activityHeading">' + aObj.activityheading + ' ---- </div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="options cont_ht_sf mx-auto"><div class="cont_group">';
            var rowCount = 1;
            for (x = 0; x < numOfRows; x++) {
                htmlStmt += '<div class="row_' + rowCount + ' d-flex flex-wrap justify-content-center">';
                for (y = 0; y < numInRowArray[x].length; y++) {
                    htmlStmt += '<div class="que f_i_t_2_q_group f_i_t_2_g_' + (y + 1) + '" data-qno="1">';
                    htmlStmt += '<div class="img_box1"><img src="' + ((aObj.questions)[currentQue - 1]).image + '"></div>';
                    htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
                    htmlStmt += '<span>' + ((aObj.questions)[currentQue - 1]).question + '</span>';
                    htmlStmt += '<input class="mx-2" type="text" maxlength="1">'
                    htmlStmt += '<div class="icon_wrap">';
                    htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                    htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                    htmlStmt += '</div>';
                    htmlStmt += '<div class="audioIcon off disabled" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '"></div>';
                    htmlStmt += '</div>';
                    htmlStmt += '</div>';
                    currentQue++;
                }
                htmlStmt += '</div>';
            }

            htmlStmt += '</div></div>';
            console.log('htmlStmt >> ', htmlStmt);
        }
        if (layOut == 3) {
            htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
            htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
            htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="options cont_ht_sf mx-auto Box">';
            htmlStmt += '<div class="all_cont justify-content-center">';
            htmlStmt += '<div class="d-flex left-content">' + aObj.leftList + '</div>';

            // htmlStmt += '</div>';
            for (x = 0; x < numOfRows; x++) {
                htmlStmt += '<div class="d-flex right-content">';
                for (y = 0; y < numInRowArray[x].length; y++) {
                    htmlStmt += '<div class="p-0">';
                    htmlStmt += '<div class="que que_' + currentQue + ' d-flex m-1 align-items-center" data-qno="' + (currentQue) + '">';

                    // htmlStmt += '<div class="image_wrap"><img src="'+((aObj.questions)[currentQue-1]).image+'"></div>';
                    htmlStmt += '<div class="txt_wrap d-flex justify-content-between">';
                    var inputboxstmt = '<input type="text" maxlength="1"/>';
                    console.log("aObj.defaultAnswer", aObj.defaultAnswer, currentQue);
                    if (aObj.defaultAnswer == currentQue) {
                        inputboxstmt = '<input type="text" maxlength="1" readonly value="' + ((aObj.questions)[currentQue - 1]).answer[0] + '"/>'
                    }
                    htmlStmt += '<div class="txtBox mx-2" data-type="text"> <span>' + ((aObj.questions)[currentQue - 1]).textfront + '</span>' + inputboxstmt + '<span>' + ((aObj.questions)[currentQue - 1]).textback + '</span></div>';
                    htmlStmt += '<div class="theIcons">';
                    // htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>';
                    htmlStmt += '<div class="icon_wrap mx-1">';
                    htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                    htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                    htmlStmt += '</div>';
                    htmlStmt += '</div>';
                    htmlStmt += '</div></div></div>';
                    currentQue++;

                }
                htmlStmt += '</div>';
            }
            htmlStmt += '</div></div>'; // end - all_cont / options  
        }
    }
    console.log('htmlStmt >> fillin Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}
/*if (fillin_data != undefined && fillin_data != null) {	
		myData = fillin_data;			
        buildFillInBody(myData);
     }
});*/