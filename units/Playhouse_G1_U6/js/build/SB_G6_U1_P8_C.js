
function buildFillInBody(aObj) {		
	var htmlStmt = '';
	if(aObj !=undefined && aObj !=null){
		var layOut = parseInt(aObj.layout);
		var numOfQuestions = (aObj.questions).length;
		var numInRowArray = aObj.numinrow;
		var numOfRows = numInRowArray.length;
		var currentQue = 1;
		console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);
		
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
	
		htmlStmt += '<div class="act_head_group d-flex justify-content-center">';
			// htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.main_activityheading_audio + '">';
			// 	htmlStmt += '<div class="q-type-img-container">';
			// 	htmlStmt += '</div>';
			// htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
            htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.activityheading_audio + '">';
            htmlStmt += '<div class="activityHeading q_title">' + aObj.activityheading + '</div>';
            htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		var classTable = aObj.image ? 'custom-table-image' : '';
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="screen_elements">';

		htmlStmt += '<div class="group_elm ' + classTable + '">';
		var rowCount = 1;
            htmlStmt += '<span class="q_order">'+aObj.order+'</span>';
			htmlStmt += '<table class="custom-table">';
			htmlStmt += '<tr style="text-align:center">'
			for(let i = 0 ; i < aObj.tableHead.length ; i++){
				htmlStmt += '<th>' + aObj.tableHead[i] + '</th>';

			}
			htmlStmt += '</tr>'

			var questionNumber = 0;
			for (x = 0; x < aObj.tableRows; x++) {
				// Alternate row classes for styling
				// var rowClass = x % 2 === 0 ? 'even-row' : 'odd-row';
				htmlStmt += '<tr class="">';
				// htmlStmt += '<td class="td-word">' + aObj.questions[x].word + '</td>';
				for (y = 0; y < aObj.tableColumns; y++) {
					htmlStmt += '<td>';
						tmpObj = aObj.questions[questionNumber]
						htmlStmt += '<div class=" d-flex flex-wrap justify-content-center flex-column">';
						htmlStmt += '<div class="que img_fillin_gr d-flex flex-wrap flex-sm-nowrap" data-qno="' + (questionNumber + 1) + '">';
						htmlStmt += '<div class="fillin_gr d-flex align-items-center w-100">';
						htmlStmt += '<div class="q_space d-flex w-100">';
						htmlStmt += '<div class="fillin_set w-100">';
						if (tmpObj.defaultAnswer) {
							htmlStmt += '<input maxlength="1" type="text" readonly value="' + tmpObj.answer[0] + '">';
						} else {
							htmlStmt += '<input class="text_input_area w-100" type="text" maxlength="' + tmpObj.maxlength + '" data-type="' + tmpObj.type + '">';
						}
						htmlStmt += '</div>';// - end fillin_1
						htmlStmt += '<div class="icon_wrap">';
						htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
						htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
						htmlStmt += '</div>';// - end  icon_wrap
						htmlStmt += '</div>';
						htmlStmt += '</div>';
						htmlStmt += '</div></div>';// - end  - fillin_gr / img_fillin_gr
					htmlStmt += '</td>';
					questionNumber++;
				}
				htmlStmt += '</tr>';
			}

			htmlStmt += '</table>';
		// htmlStmt +=aObj.image? '<img src="' + aObj.image + ' alt="table-image/>' : '';
		htmlStmt +=aObj.bottomSentence? '<div class="bottom-sentence" >' + aObj.bottomSentence + '</div>' : '';
        htmlStmt += '</div>';// - end - all_cont	
	}

    // 	htmlStmt += '<div class="image_container">';
    //     htmlStmt += '<img src="../images/pages/activities/WB_U5_Q8.png"/>';
    //   htmlStmt += '</div>';

	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
