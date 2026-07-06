var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_77/PLAYHOUSE_1_WB_UNIT_15_TRACK_09_01.mp3',
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
  "layout"               : 1,
  "numinrow"              : [[1], [1], [1], [1], [1]],
  "mainTitle"             : "../images/pages/sb-icons/readwrite_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/readwrite_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "-38px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>1</span> Read and write. Say.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/under.mp3",
  "subTitleAudio"         : "../audios/under.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options"               : [],
  "optionsAudios"         : [],
  "images"                : [],
  "numOfGroups"           : 3,
  "titles"                : ["coat / hat / sandals","hats / dresses /shoes","trousers / sandals / T-shirt"],
  "groups_img"            : ["../images/pages/activities/6-img-1.png","../images/pages/activities/6-img-2.png","../images/pages/activities/6-img-3.png"],
  "questions"             :
   [
      {
        "singleword": false,
        "groupNo":"1",
        "textFront": "Is it cold outside? Yes, it is. <br>Is it snowy? Yes, it is. <br> What is he wearing? <br> He is not wearing a T-shirt. <br> He is wearing a coat. <br> He is not wearing shorts. <br> He is wearing shoes.",
        "text":"He’s not wearing [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["sandals"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "textFront":"",
        "text": "He is wearing a[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["hat"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "textFront":"Is there a party? Yes, there is. What are they wearing? <br>  They are not wearing trousers.",
        "text": "They are wearing [_].",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["dresses"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "textFront":"They are not wearing sandals.",
        "text": "They are wearing [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["shoes"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "textFront":"",
        "text": "They are wearing [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["hats"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"3",
        "textFront":"Is it summer? Yes, it is. <br>Is it sunny? Yes, it is.<br> What is he wearing? <br>He is not wearing a jumper.",
        "text": "He is wearing a [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["T-shirt"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"3",
        "textFront":"He is wearing shorts.",
        "text": "He is not wearing [_].",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["trousers"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"3",
        "textFront":"He is wearing shoes.",
        "text": "He’s not wearing [_].",
        "textEnd":"He is not wearing a hat.",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["sandals"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
    ]
  }