function buildMcqBody(aObj) {
  var htmlStmt = '';
  if (aObj != undefined && aObj != null) {

    var numOfQuestions = (aObj.questions).length;

    var currentQue = 1;
    // console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);

    htmlStmt += '<div class="act_head_group">';
    htmlStmt += '<div class="d-flex justify-content-start">';
    htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
    htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
    htmlStmt += '</div>'; // end - d-flex
    htmlStmt += '<div class="sub_title">' + aObj.activitysubheading + '</div>';
    htmlStmt += '</div>';// end - act_head_group
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
	//  htmlStmt += '<div class="d-flex justify-content-center flex-wrap align-items-center">';
	htmlStmt += '<div class="group_elm d-flex justify-content-center">';
	htmlStmt += '<div class="ques_part_space my-2">';
    for (var x = 0; x < numOfQuestions; x++) {
      var tpOb = (aObj.questions)[x];
      htmlStmt += '<div id="que_' + (x + 1) + '" class="que align-items-baseline d-flex" data-qno="' + (x + 1) + '">';
      
      // console.log('audio here >> ',tpOb.audio );
      // if(tpOb.audio !='no' && tpOb.audio != ''){
        // htmlStmt += '<div class="audioIcon off" data-audio="'+tpOb.audio+'"></div>';
      // }
if(aObj.numbering!=''){
htmlStmt += '<div class="q_num_space ">';
				if(aObj.numbering == 'alphabet'){
					xx =(x == 0) ?aObj.numberstartfrom:nextChar(xx);					
				}else if (aObj.numbering == 'number'){
					xx =(x+parseInt(aObj.numberstartfrom));					
				}
                htmlStmt += xx+'. </div>';
}    
      htmlStmt += '<div class="picks_grp">';
      htmlStmt += '<div class="d-flex flex-wrap justify-content-start">';
      var options = (tpOb.options);
      for (var y = 0; y < options.length; y++) {
        var needspace = (options[y].needspaceafter == 'yes') ? 'right_space' : '';

        htmlStmt += '<div id="pick_' + (x + 1) + '_' + (y + 1) + '" class="mcq_1_5_q_group pick ' + needspace + '">';
        htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data - type="text" >';
        htmlStmt += '<span>' + options[y].text + '</span>';
        htmlStmt += '</div>';
        htmlStmt += '</div>';
      }


      htmlStmt += '</div></div>';// end - d-flex / picks_grp  
      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt += '<div class="icon_wrap">';
      htmlStmt += '<div class="tick">';
      htmlStmt += '<img src="../images/icons/check_btn.png">';
      htmlStmt += '</div>';// end - tick
      htmlStmt += '<div class="cross">';
      htmlStmt += '<img src="../images/icons/cross_btn.png">';
      htmlStmt += '</div>';// end - cross
      htmlStmt += '</div>';// end - icon_wrap
      htmlStmt += '</div>';// end - icon_wrap_holder      
      htmlStmt += '</div>';// end - que

    }
	  htmlStmt += '</div>';
		if(aObj.image!='')
{
			  htmlStmt += '<div class="image_space d-flex justify-content-center align-items-center">';
      htmlStmt += '<img src="' + aObj.image + '">';
       htmlStmt += '</div>';// end - image_space
}
	  htmlStmt +='</div>';
	// htmlStmt += '</div>';// 
    htmlStmt += '</div>';// end - all_cont
    htmlStmt += '</div>';// end - options


  }
  // console.log('htmlStmt buildMcqBody >> ', htmlStmt);
  $(".activity_area").append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}