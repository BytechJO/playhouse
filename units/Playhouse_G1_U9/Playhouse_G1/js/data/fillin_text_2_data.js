var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_46/PLAYHOUSE_1_WB_UNIT_9_TRACK_05_01.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="red_text">1</span> Write questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "none", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "Do you like pizza?",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "textEnd":"Yes, I do.",
          "textEndAudio":"../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "images": ["../images/pages/activities/5-img-01.png","../images/pages/activities/5-img-02.png"],
          "postion":"",
          "answer": [],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]you[_]chicken?",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "textEnd":"Yes, we do.",
          "textEndAudio":"../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "images": ["../images/pages/activities/5-img-03.png","../images/pages/activities/5-img-04.png"],
          "postion":"",
          "answer": ["Do","like"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no            
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]bananas?",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "textEnd":"Yes, he does.",
          "textEndAudio":"../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "images": ["../images/pages/activities/5-img-05.png","../images/pages/activities/5-img-06.png"],
          "postion":"",
          "answer": ["Does he like"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no                
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]I[_]fizzy drinks?",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "textEnd":"No, you don’t.",
          "textEndAudio":"../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "images": ["../images/pages/activities/5-img-07.png","../images/pages/activities/5-img-08.png"],
          "postion":"",
          "answer": ["Do","like"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no                
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }