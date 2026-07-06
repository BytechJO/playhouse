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
  "layout"               : 1,
  "numinrow"              : [[1], [1], [1], [1], [1]],
  "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "100px"},
  "mainTitleAudio"        : "../audios/page_89/CONVERSATION.mp3",
  "subTitleTextLeft"      : "<span class='blue_text'>3</span> Write.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/new/p89write.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options"               : [],
  "optionsAudios"         : [""],
  "images"                : ["../images/pages/activities/3-img-1.png","../images/pages/activities/3-img-2.png"],
  "numOfGroups"           : 2,
  "titles"                : [],
  "questions"             : 
   [
      {
        "singleword": false,
        "groupNo":"1",
        "text": "She is a [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["chef"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"1",
        "text": "She [_] food in a restaurant.",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["cooks"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      // 
      {
        "singleword": false,
        "groupNo":"2",
        "text": "They are [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["doctors"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "They [_] people",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["help sick"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "groupNo":"2",
        "text": "in [_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["a hospital"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      
    ]
  }