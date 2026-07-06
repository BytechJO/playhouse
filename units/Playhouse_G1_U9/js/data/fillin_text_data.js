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
  "mainTitleAudio"        : "../audios/page_67/CONVERSATION.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>2</span> Look and complete.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/new/p67look.mp3",
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
      "text": "I like [_] and [_]",
      "textaudios": [],
      "image":"../images/pages/activities/1-img-1.png",
      "images": ["../images/pages/activities/1-img-2.png","../images/pages/activities/1-img-3.png"],
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["cake","crisps"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "I don’t like [_] and [_].",
      "textaudios": [],
      "image":"../images/pages/activities/2-img-1.png",
      "images": ["../images/pages/activities/2-img-2.png","../images/pages/activities/2-img-3.png"],
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["pizza","bananas"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no     
      "strictorder": "yes", // yes (or) no             
      "maxlength": 300,
      "type": "text", // text (or) number
    },
   
  ]
}