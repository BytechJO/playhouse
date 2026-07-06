//  ****************************************** //
//  SentenceBuild - build file
//  Tick the correct sentence / write the correction if wrong
//  ****************************************** //
function buildSentenceBuildBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		var numOfQuestions = (aObj.questions).length;
		var currentQue = 1;

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

		// ===================================================================== heading =====================
		htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
				}
				htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm sentencebuild_group flex-column">';

			for (x = 0; x < numOfQuestions; x++) {
				var tmpObj = aObj.questions[x];

				htmlStmt += '<div class="que sentence_gr" data-qno="' + (x + 1) + '" data-correct="' + (tmpObj.isCorrect ? 'true' : 'false') + '">';

				htmlStmt += '<div class="sentence_row d-flex align-items-center">';

					if(aObj.numbering != 'none'){
						htmlStmt += '<div class="q_num_space">' + (x + parseInt(aObj.numberstartfrom)) + '</div>';
					}

					htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex contant" data-audio="' + tmpObj.textaudio + '">';
						htmlStmt += '<div class="sentence_text">' + tmpObj.text + '</div>';
					htmlStmt += '</div>';

					htmlStmt += '<div class="markBtns d-flex ms-auto">';
						htmlStmt += '<div class="tickBtn" data-mark="correct"><img src="../images/icons/check_btn.png"></div>';
						htmlStmt += '<div class="crossBtn" data-mark="wrong"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div>';

					htmlStmt += '<div class="icon_wrap_holder">';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div></div>';

				htmlStmt += '</div>'; // - end sentence_row

				htmlStmt += '<div class="correction_row d-none">';
					htmlStmt += '<input class="text_input_area correction_input" type="text" maxlength="' + tmpObj.maxlength + '" placeholder="">';
				htmlStmt += '</div>';

				htmlStmt += '</div>'; // - end que / sentence_gr
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> sentencebuild Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}