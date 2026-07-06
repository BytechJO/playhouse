//  ****************************************** //
//  DrawWrite - build file
//  Draw canvas + Question/Answer bubble (write blank), no checking
//  ****************************************** //
function buildDrawWriteBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/back_btn.png" /></a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/next_btn.png" /></a>'
		htmlStmt +=  '</div>'

		// ===================================================================== heading =====================
		htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '" style="width: 100%;">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				}
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm drawwrite_group qa_layout">';

			// ---- qa box (question bubble + answer bubble with inline blank) ----
			htmlStmt += '<div class="qa_box">';

				// -- question row --
				htmlStmt += '<div class="qa_row question_row">';
					htmlStmt += '<div class="avatar_char girl_avatar audioIcon off contant" data-slideNum="' + 1 + '" data-audio="' + aObj.questionAudio + '">';
						htmlStmt += '<img src="' + aObj.girlAvatarImg + '" alt="">';
					htmlStmt += '</div>';
					htmlStmt += '<div class="speech_bubble question_bubble">';
						htmlStmt += '<p>' + aObj.questionText + '</p>';
					htmlStmt += '</div>';
				htmlStmt += '</div>';

				// -- answer row --
				htmlStmt += '<div class="qa_row answer_row">';
					htmlStmt += '<div class="avatar_char boy_avatar audioIcon off contant" data-slideNum="' + 1 + '" data-audio="' + aObj.answerAudio + '">';
						htmlStmt += '<img src="' + aObj.boyAvatarImg + '" alt="">';
					htmlStmt += '</div>';
					htmlStmt += '<div class="speech_bubble answer_bubble">';
						htmlStmt += '<p class="answer_text">';
							htmlStmt += aObj.answerTextPrefix;
							htmlStmt += '<span class="write_blank">';
								htmlStmt += '<textarea class="write_line_input inline_blank" rows="1" spellcheck="false"></textarea>';
							htmlStmt += '</span>';
							htmlStmt += '.';
						htmlStmt += '</p>';
					htmlStmt += '</div>';
				htmlStmt += '</div>';

			htmlStmt += '</div>'; // - end qa_box

			// ---- draw box (canvas) ----
			htmlStmt += '<div class="draw_box">';
				htmlStmt += '<div class="draw_box_title">Draw</div>';
				htmlStmt += '<canvas class="draw_canvas"></canvas>';
				htmlStmt += '<div class="clearDrawBtn"><img src="../images/icons/reset_btn.png"></div>';
			htmlStmt += '</div>';

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> drawwrite Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}

var drawwrite_data = {
    "mainTitle"             : "../images/pages/sb-icons/word_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Write and draw',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",

    // ---- question / answer bubble content ----
    "girlAvatarImg"         : "../images/pages/activities/2-img-1.png",
    "boyAvatarImg"          : "../images/pages/activities/2-img-2.png",
    "questionAudio"         : "../audios/question.mp3",
    "answerAudio"           : "../audios/answer.mp3",
    "questionText"          : "What's your favourite animal?",
    "answerTextPrefix"      : "My favourite animal is the "
}