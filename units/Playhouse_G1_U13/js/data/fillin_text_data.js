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
  "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>1</span> Complete the conversation.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/new/p101complete.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "number", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "image"                 : "",
  "options"               : ["let’s","visit","go","not","give"],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "<b>A</b> &nbsp; I like to learn about fish. Tomorrow, [_][_] to the aquarium.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["Let's","go"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 30,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<b>B</b> &nbsp; That’s a good idea. [_] go after we [_] Beth in the hospital.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["Let's","visit"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 30,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<b>A</b> &nbsp; Yes. She likes it when we [_]. Let’s [_] give her flowers.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["visit","not"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 30,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "&nbsp; [_] [_] her balloons.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["Let's","give"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 30,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<b>B</b> &nbsp; Great! See you tomorrow.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": [],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 30,
      "type": "text", // text (or) number
    },
  ]
}