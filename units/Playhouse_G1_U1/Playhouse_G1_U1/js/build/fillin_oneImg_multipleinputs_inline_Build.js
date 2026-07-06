function buildFillInBody(aObj) {
  var htmlStmt = '';
  if (aObj != undefined && aObj != null) {
    var numOfQuestions = (aObj.questions).length;
    htmlStmt += '<div class="act_head_group">';
    htmlStmt += '<div class="d-flex justify-content-start">';
    htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
    htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
    htmlStmt += '</div>'; // - end - d-flex justify-content-start				
    htmlStmt += '</div>'; // - end - act_head_group

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
    htmlStmt += '<div class="screen_elements">';
    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';
        htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
        jQuery.each(aObj.options, function (key, value) {
          htmlStmt += '<div class="clue_word">' + value + '</div>';
        });
        htmlStmt += '</div>';
        htmlStmt += '</div>';
      }
    }

    htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center">';
    for (x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];
      htmlStmt += '<div class="que img_fillin_gr d-flex flex-wrap flex-sm-nowrap" data-qno="' + (x + 1) + '">';
      if (tmpObj.image != '' && tmpObj.image != "no") {

        htmlStmt += '<div class="image_gap d-flex align-items-center"><div class="image_space"><img src="' + tmpObj.image + '"></div></div>';
      }
      var str = tmpObj.text;
      // var count = (str.match(/[_]/g) || []).length;                
      var qStr = str.replace(/\[_]/g, '<input class="text_input_area" type="text" maxlength="' + tmpObj.maxlength + '" data-type="' + tmpObj.type + '">');
      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';
      htmlStmt += '<div class="q_space">';
      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt += '<div class="icon_wrap">';
      htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
      htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
      htmlStmt += '</div></div>';// - end icon_wrap_holder / icon_wrap
      htmlStmt += '<div class="fillin_set">';
      htmlStmt += qStr;
      htmlStmt += '</div>';// - end fillin_1
      htmlStmt += '</div>';
      htmlStmt += '</div></div>';// - end  - fillin_gr / img_fillin_gr
    }
    htmlStmt += '</div></div></div>';// - end - all_cont			
    htmlStmt += '</div>';// - end - options			
  }
  console.log('htmlStmt >> fillin Built');
  $(".activity_area").append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
