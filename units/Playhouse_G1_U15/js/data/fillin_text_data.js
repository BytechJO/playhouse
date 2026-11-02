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
  "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "80px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>1</span> Look, read and complete.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
  "subTitleAudio"         : "../audios/under.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "number", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "image"                 : "",
  "options"               : [],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "They [_] standing.",
      "textaudios": [],
      "image": "../images/pages/activities/3-img-1.png",
      "imagePostion":"front",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["are"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 100,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "She [_]",
      "textaudios": [],
      "image": "../images/pages/activities/3-img-2.png",
      "imagePostion":"back",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["is sitting"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 100,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "I [_]",
      "textaudios": [],
      "image": "../images/pages/activities/3-img-3.png",
      "imagePostion":"front",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["am walking"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 100,
      "type": "text", // text (or) number
    },
  ]
}