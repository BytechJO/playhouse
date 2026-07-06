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
    "numinrow"              : [[1,1,1,1,1]],
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">3</span> Write.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "text": "[_]",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/Asset_7.png",
            "answer": ["dog"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
            "maxlength": 200,
        },
        {
            "text": "[_]",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/Asset_8.png",
            "answer": ["box"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "maxlength": 200,
        },
        {
            "text": "[_]",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/Asset_9.png",
            "answer": ["frog"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "maxlength": 200,
        },
        {
            "text": "[_]",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/Asset_10.png",
            "answer": ["log"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "maxlength": 200,
        },
        {
            "text": "There is a [_] in a [_]",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/Asset_11.png",
            "answer": ["frog","box"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
            "maxlength": 200,
        }
    ]
}