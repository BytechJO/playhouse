var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/demo.mp3',
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
  "numinrow"              : [[1]],
  "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_106/GRAMMAR.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>2</span> Write.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
  "subTitleAudio"         : "../audios/new/p106write.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "number", // "alphabet" (or) "number"
  "numberstartfrom"       : 1,
  "image"                 : "",
  "options"               : [],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "What’s the weather like? <img src='../images/pages/activities/2-img-1.png' class='inner_img'> [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["It is sunny"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "[_]? <img src='../images/pages/activities/2-img-2.png' class='inner_img'> It is rainy.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["What's the weather like"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "[_]? <img src='../images/pages/activities/2-img-3.png' class='inner_img'> It is [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["What's the weather like","cloudy"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "[_]? <img src='../images/pages/activities/2-img-4.png' class='inner_img'> [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["What's the weather like","It is snowy"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
  ]
}