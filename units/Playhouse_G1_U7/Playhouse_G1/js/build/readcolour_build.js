//  ****************************************** //
//  ReadColour - build file
//  Reading lines + free colouring canvas over a background image, with colour palette and brush size
//  ****************************************** //
function buildReadColourBody(aObj) {
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
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
		
				// htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
	htmlStmt += '</div>';
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm readcolour_group">';

			// ---- reading sentences list ----
			htmlStmt += '<div class="rc_sentences">';
			for (var x = 0; x < aObj.sentences.length; x++) {
				var sObj = aObj.sentences[x];
				htmlStmt += '<div class="rc_sentence_row d-flex align-items-start">';
					htmlStmt += '<div class="q_num_space">' + (x + 1) + '</div>';
					htmlStmt += '<div class="audioIcon off contant" data-audio="' + sObj.audio + '">';
						htmlStmt += '<div class="rc_sentence_text">' + sObj.text + '</div>';
					htmlStmt += '</div>';
				htmlStmt += '</div>';
			}
			htmlStmt += '</div>'; // - end rc_sentences

			// ---- colouring area: canvas over background image ----
			htmlStmt += '<div class="rc_colour_area d-flex">';

				htmlStmt += '<div class="colour_box" style="background-image:url(' + aObj.bgImage + ');">';
					htmlStmt += '<canvas class="colour_canvas"></canvas>';
				htmlStmt += '</div>';

				htmlStmt += '<div class="colour_controls d-flex flex-column">';

					htmlStmt += '<div class="palette d-flex flex-wrap">';
					for (var p = 0; p < aObj.palette.length; p++) {
						var colObj = aObj.palette[p];
						htmlStmt += '<div class="paletteSwatch" data-hex="' + colObj.hex + '" style="background-color:' + colObj.hex + ';" title="' + colObj.name + '"></div>';
					}
					htmlStmt += '</div>'; // - end palette

					htmlStmt += '<div class="brushSizes d-flex">';
					for (var b = 0; b < aObj.brushSizes.length; b++) {
						var brObj = aObj.brushSizes[b];
						htmlStmt += '<div class="brushSizeBtn" data-width="' + brObj.width + '" data-label="' + brObj.label + '">';
							htmlStmt += '<div class="brushDot brush_' + brObj.label + '"></div>';
						htmlStmt += '</div>';
					}
					htmlStmt += '</div>'; // - end brushSizes

					htmlStmt += '<div class="clearColourBtn"><img src="../images/icons/reset_btn.png"></div>';

				htmlStmt += '</div>'; // - end colour_controls

			htmlStmt += '</div>'; // - end rc_colour_area

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> readcolour Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}