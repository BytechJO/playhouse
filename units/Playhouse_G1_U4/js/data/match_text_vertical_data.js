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
var linedraw_data = {    
    "layout"                : 1,
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_35/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>3</span> Match.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/gramprac_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p35match.mp3",
    "image"                 : "../images/pages/activities/35-match.png",
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "red",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "rgb(0, 190, 255);",
    "nodeselectioncolor"    : '#ccc',
    "questions"             : {
        "drags"             : [
            {
                "text"          : "Have you got two ears?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "Have you got five eyes?",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "Have you got a head?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "Have you got a nose?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ],
        "drops"                 : [
            {
                "text"          : "<span class='green_text'>✓</span> Yes, I have",
                "image"         : "no",
                "answer"        : [4,3,1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "<span class='red_text'>X</span> No, I haven’t.",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               