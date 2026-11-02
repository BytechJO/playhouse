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
			htmlStmt += '<div class="options cont_ht_sf mx-auto"><div class="all_cont justify-content-start justify-content-sm-center"><div class="cont_group">';
			var rowCount = 1;
			for (x = 0; x < numOfRows; x++) {
				htmlStmt += '<div class="row_' + rowCount + ' d-flex flex-wrap justify-content-center">';
				for (y = 0; y < numInRowArray[x].length; y++) {
					htmlStmt += '<div class="que f_i_t_2_q_group f_i_t_2_g_' + (y + 1) + '" data-qno="1">';
					htmlStmt += '<div class="img_box1"><img src="' + ((aObj.questions)[currentQue - 1]).image + '"></div>';
					htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
					htmlStmt += '<div class="audioIcon off disabled" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '"></div>';
					htmlStmt += '<div class="text">' + ((aObj.questions)[currentQue - 1]).question + '</div>';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
					htmlStmt += '</div>';

					htmlStmt += '</div>';
					htmlStmt += '</div>';
					currentQue++;
				}
				htmlStmt += '</div>';
			}

			htmlStmt += '</div></div></div>';
			console.log('htmlStmt >> ', htmlStmt);
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