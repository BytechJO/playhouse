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
  "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "80px"},
  "mainTitleAudio"        : "../audios/page_55/CONVERSATION.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>2</span> Look at your calendar. Write.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
  "subTitleAudio"         : "../audios/new/p55look.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "image"                 : "",
  "options"               : [],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "[_]",
      "textBack":"What is today’s date?",
      "textaudios": [],
      "image": "../images/pages/activities/1-img-1.png",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": [],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 10,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "[_]",
      "textBack":"What day is it?",
      "textaudios": [],
      "image": "../images/pages/activities/1-img-2.png",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": [],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 10,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "[_]",
      "textBack":"What year is it?",
      "textaudios": [],
      "image": "../images/pages/activities/1-img-3.png",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": [],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 10,
      "type": "text", // text (or) number
    },
  ]
}