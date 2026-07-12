function buildFillInBody(aObj) {
  var htmlStmt = "";
  if (aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;
    console.log("NUm of Question: ", numOfQuestions, numInRowArray, numOfRows);

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
        '">';
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
    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    if (layOut == 1) {
      htmlStmt += '<div class="options">';
      for (x = 0; x < numOfRows; x++) {
        htmlStmt +=
          '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';
        for (y = 0; y < numInRowArray[x].length; y++) {
          htmlStmt += '<div class="p-0">';
          htmlStmt +=
            '<div class="que que_' +
            currentQue +
            ' d-flex justify-content-around pt-3 m-1" data-qno="' +
            currentQue +
            '">';

          htmlStmt +=
            '<div class="image_wrap"><img src="' +
            aObj.questions[currentQue - 1].image +
            '"></div>';
          htmlStmt += '<div class="txt_wrap">';
          htmlStmt +=
            '<div class="txtBox mx-2" data-type="text"><input type="text" maxlength="1"/>  <span>' +
            aObj.questions[currentQue - 1].question +
            "</span></div>";
          htmlStmt += '<div class="theIcons d-flex">';
          htmlStmt +=
            '<div class="audioIcon ml-5 off disabled" data-audio="' +
            aObj.questions[currentQue - 1].audio +
            '"></div>';

          htmlStmt += '<div class="icon_wrap mx-1">';
          htmlStmt +=
            '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
          htmlStmt +=
            '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
          htmlStmt += "</div>";
          htmlStmt += "</div>";
          htmlStmt += "</div></div></div>";
          currentQue++;
        }
        htmlStmt += "</div>";
      }
      htmlStmt += "</div>";
    } else if (layOut == 2) {
      htmlStmt +=
        '<div class="options cont_ht_sf mx-auto"><div class="all_cont justify-content-center"><div class="cont_group">';
      var rowCount = 1;
      for (x = 0; x < numOfRows; x++) {
        htmlStmt +=
          '<div class="row_' +
          rowCount +
          ' d-flex flex-wrap justify-content-center que-container">';
        for (y = 0; y < numInRowArray[x].length; y++) {
          htmlStmt +=
            '<div class="que f_i_t_2_q_group f_i_t_2_g_' +
            (y + 1) +
            ' question" data-qno="' +
            currentQue +
            '">';
          htmlStmt += '<div class="img_box1">';
          htmlStmt +=
            '<img src="' + aObj.questions[currentQue - 1].image + '">';
          htmlStmt +=
            '<img src="' + aObj.questions[currentQue - 1].imageRight + '">';
          htmlStmt += "</div>";
          htmlStmt +=
            '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
          // htmlStmt += '<span>'+((aObj.questions)[currentQue-1]).question+'</span>';
          htmlStmt +=
            '<div class="audioIcon off disabled" data-audio="' +
            aObj.questions[currentQue - 1].audio +
            '"></div>';
          htmlStmt +=
            '<input class="mx-2" type="text" maxlength="10" style="color: rgb(0, 0, 0); border-width: medium medium 1px; border-style: none none solid; border-color: currentcolor currentcolor black; border-image: none;">';
          htmlStmt += '<div class="icon_wrap">';
          htmlStmt +=
            '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
          htmlStmt +=
            '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
          htmlStmt += "</div>";
          htmlStmt += "</div>";
          htmlStmt += "</div>";
          currentQue++;
        }
        htmlStmt += "</div>";
      }

      // ================================================================ [ SentenceBuilding ]
      htmlStmt += '<div class="SentenceBuilding_container">';
      htmlStmt += '<div class="cont_items d-flex flex-wrap">';
      htmlStmt += '<div class="main_title_container">';
      htmlStmt += '<div class="main_title_text">';
      if (aObj.main_title_text.length > 1) {
        for (let x = 0; x < aObj.main_title_text.length; x++) {
          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" data-audio="' +
            aObj.main_title_audio +
            '">';
          htmlStmt +=
            "<div class='letter letter-" +
            x +
            " pulse'>" +
            aObj.main_title_text[x] +
            "</div>";
          htmlStmt += "</div>";
        }
      } else {
        htmlStmt += "<div class=''>" + aObj.main_title_text + "</div>";
      }
      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += '<div class="d-flex flex-wrap" style="width:100%">';
      for (let i = 0; i < aObj.items.length; i++) {
        if (i == 0) {
          htmlStmt += '<div class="d-flex imgs_sides" style="width:40%">';
          htmlStmt +=
            "<img src='" +
            aObj.items[i].text_img +
            "' class='readHighlightsBtn imgToggle' data-img='showImg1'>";
          htmlStmt +=
            "<img src='" +
            aObj.items[i].img +
            "' class='text_img showImg1 audioIcon off' data-audio='" +
            aObj.items[i].audio +
            "'>";
          htmlStmt += "</div>";
        } else if (i == 1) {
          htmlStmt += '<div class="middle-text audioIcon off" style="width:21%" data-audio="' + aObj.items[i].audio + '">';
          htmlStmt +=
            "<img src='" +
            aObj.items[i].img +
            "' class='text_img showImg0'  />";

          htmlStmt += "</div>";
        } else if (i == 2) {
          htmlStmt += '<div class="d-flex imgs_sides" style="width:39%;">';
          htmlStmt +=
            "<img src='" +
            aObj.items[i].img +
            "' class='text_img showImg2 audioIcon off' data-audio='" +
            aObj.items[i].audio +
            "'>";
          htmlStmt +=
            "<img src='" +
            aObj.items[i].text_img +
            "' class='readHighlightsBtn imgToggle' data-img='showImg2' style='margin-left: auto;'>";
          htmlStmt += "</div>";
        }
      }
      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";
      // ================================================================ [ / SentenceBuilding ]

      htmlStmt += "</div>";
      htmlStmt += "</div></div>";
      console.log("htmlStmt >> ", htmlStmt);
    }
    if (layOut == 3) {
      htmlStmt += '<div class="options Box">';
      for (x = 0; x < numOfRows; x++) {
        htmlStmt +=
          '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';
        for (y = 0; y < numInRowArray[x].length; y++) {
          htmlStmt += '<div class="p-0">';
          htmlStmt +=
            '<div class="que que_' +
            currentQue +
            ' d-flex justify-content-around pt-3 m-1" data-qno="' +
            currentQue +
            '">';

          htmlStmt +=
            '<div class="image_wrap"><img src="' +
            aObj.questions[currentQue - 1].image +
            '"></div>';
          htmlStmt += '<div class="txt_wrap">';
          htmlStmt +=
            '<div class="txtBox mx-2" data-type="text"> <span>' +
            aObj.questions[currentQue - 1].textfront +
            '</span><input type="text" maxlength="1"/>  <span>' +
            aObj.questions[currentQue - 1].textback +
            "</span></div>";
          htmlStmt += '<div class="theIcons d-flex">';
          htmlStmt +=
            '<div class="audioIcon ml-5 off disabled" data-audio="' +
            aObj.questions[currentQue - 1].audio +
            '"></div>';

          htmlStmt += '<div class="icon_wrap mx-1">';
          htmlStmt +=
            '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
          htmlStmt +=
            '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
          htmlStmt += "</div>";
          htmlStmt += "</div>";
          htmlStmt += "</div></div></div>";
          currentQue++;
        }
        htmlStmt += "</div>";
      }
      htmlStmt += "</div>";
    }
  }
  console.log("htmlStmt >> fillin Built");
  $(".activity_area").append(htmlStmt);
  showSentenceImg();
  setLoadedStatus(getCurrFileOrDirectory("file"));
}
function showSentenceImg() {
  $(document).ready(function () {
    $(".imgToggle").click(function () {
      var imgName = $(this).data("img");
      $("." + imgName).fadeToggle(1000);
    });
  });
}
