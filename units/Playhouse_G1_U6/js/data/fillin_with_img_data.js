var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_48/demo.mp3',
      },
      {
        'url': '',
      },
      {
        'url': '',
      },
      {
        'url': '',
      }
  ],
}
var fillin_data = {
  "layout"                : 1,
  "numinrow"              : [[1,1,1]],
  "mainTitle"             : "../images/pages/sb-icons/phonics_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_48/PHONICS.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>2</span> Say the sounds. Write the words.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/new/p48say.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options"               : [],
  "optionsAudios"         :[],
  "questions":
    [
      {
        "singleword": false,
        "text": "[_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/p20_2_1.png",
        "answer": ["whale"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "[_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/p20_2_2.png",
        "answer": ["white"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "[_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/p20_2_3.png",
        "answer": ["wheel"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      }
    ],
    "main_title_text":["S","e","n","t","e","n","c","e","&nbsp;","B","u","i","l","d","i","n","g"],
    "main_title_audio":"../audios/page_48/Sentence_Building.mp3",
    //   audioIcon off
//   data-audio='+aObj.items[i].audio+'
    "items":
        [
          "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg1'>",
          "<img src='../images/pages/page-3/Sen-2-img.png' class='text_img showImg1 audioIcon off' data-audio='../audios/page_48/A_noun_is_a_naming_word.mp3'>",
         
          "<span class='text audioIcon off' data-audio='../audios/page_48/My_name_is_Suzy.mp3'>"+
          "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>"+
          "My name is <span class='red_text'>S</span>uzy."+
          "</span>",
          // "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>",

          "<img src='../images/pages/page-3/Sen-3-img.png' class='text_img showImg2 audioIcon off' data-audio='../audios/page_48/The_name_of_a_person_or_a_place_is_a_proper_noun._A_proper_noun_begins_with_a_capital_letter.mp3'>",
          "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg2'>",
        
        ],
  }