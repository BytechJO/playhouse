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
  "mainTitleIconPos"      : {"right": "100px"},
  "mainTitleAudio"        : "../audios/page_83/CONVERSATION.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>2</span> Write.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
  "subTitleAudio"         : "../audios/under.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "number", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "image"                 : "../images/pages/activities/7-img-1.png",
  "imagePosition"         :"back",
  "options"               : [],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "How does Ms. Lopez go to school? <br> Ms. Lopez goes to school by [_]",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["taxi"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 5,
      "type": "text", // text (or) number
    },
  
   
  ]
}