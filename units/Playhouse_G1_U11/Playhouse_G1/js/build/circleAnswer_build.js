//  ****************************************** //
//  CircleAnswer - Build
//  Generates the standard activity header (nav + heading), then
//  .que wrapper > question text + .pick speech-bubble options.
//  Each .pick contains a text span + an SVG overlay (hidden by default)
//  that draws a hand-drawn circle around the bubble on selection.
//  ****************************************** //
function buildCircleAnswerBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title d-flex'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // ===================================================================== circleanswer body =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';
    htmlStmt += '<div class="circleanswer_wrap">';

    for (var q = 0; q < numOfQuestions; q++) {
      var qObj = aObj.questions[q];
      var qNo = q + 1;

      htmlStmt +=
        '<div class="que circleanswer_que" id="que_' +
        qNo +
        '" data-qno="' +
        qNo +
        '">';
      htmlStmt += '  <div class="que_row d-flex align-items-center">';
      htmlStmt += '    <div class="que_num">' + qNo + "</div>";
      htmlStmt += '    <div class="que_text">' + qObj.que + "</div>";

      if (qObj.audio != "" && qObj.audio != undefined) {
        htmlStmt +=
          '    <div class="audioIcon queAudio" data-audio="' +
          qObj.audio +
          '"></div>';
      }
      htmlStmt += '<div class="main-container">';

      htmlStmt += '<div class="main-img" style="height: 150px; width: auto;">';
      htmlStmt +=
        "<img src='" +
        qObj.mainImg +
        "' style='height: 100%; width: 100%; object-fit: contain;'/>";
      htmlStmt += "</div>";
      htmlStmt += '    <div class="options_wrap d-flex">';

      for (var o = 0; o < qObj.options.length; o++) {
        var optObj = qObj.options[o];
        var pickId = "pick_" + qNo + "_" + (o + 1);

        htmlStmt += '      <div class="pick bubble_pick" id="' + pickId + '">';
        htmlStmt += '        <div class="bubble_inner">';
        htmlStmt +=
          '          <span class="bubble_text">' + optObj.text + "</span>";

        if (optObj.audio != "" && optObj.audio != undefined) {
          htmlStmt +=
            '          <div class="audioIcon optAudio" data-audio="' +
            optObj.audio +
            '"></div>';
        }

        htmlStmt += "        </div>";
       
        // SVG overlay for the hand-drawn circle, sized to the bubble via CSS/JS
        htmlStmt +=
          '        <svg class="circle_svg" viewBox="0 0 220 110" preserveAspectRatio="none">';
        htmlStmt += '          <path class="circle_path" d="" />';
        htmlStmt += "        </svg>";
        htmlStmt += "      </div>";
      }

      htmlStmt += "    </div>"; // options_wrap
 htmlStmt += "        </div>";
      // feedback icon wrapper (tick / cross) shown after check
      htmlStmt += '    <div class="icon_wrap_holder d-flex">';
      htmlStmt += '      <div class="icon_wrap">';
      htmlStmt += '        <div class="tick"></div>';
      htmlStmt += '        <div class="cross"></div>';
      htmlStmt += "      </div>";
      htmlStmt += "    </div>";

      htmlStmt += "  </div>"; // que_row
      htmlStmt += "</div>"; // que
    }

    htmlStmt += "</div>"; // circleanswer_wrap
    htmlStmt += "</div></div>"; // all_cont / options
  }

  console.log("htmlStmt >> circleanswer Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
