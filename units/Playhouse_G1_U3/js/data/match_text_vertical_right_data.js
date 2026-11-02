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
    "mainTitle"             : "../images/pages/sb-icons/adv_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_27/PLAYHOUSE_1_SB_UNIT_3_TRACK_07_01.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Read and choose.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p27read.mp3",
    "image"                 : "",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> Yummy!","<span class='red_text'>✓</span> Stay for lunch"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "red",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "rgb(0, 190, 255)",
    "nodeselectioncolor"    : 'rgb(0, 128, 255)', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "Is there a computer in the playhouse?",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "Is there a kitchen in the playhouse?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "Is there a living room in the playhouse?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default  
            },
            {
            
                "text"          : "Is there a lamp in the playhouse?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default 
            }
        ],
        "drops"                 : [
            {
                "text"          : "Yes, there is",
                "image"         : "no",
                "answer"        : [1,3,4],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "No, there isn’t",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               