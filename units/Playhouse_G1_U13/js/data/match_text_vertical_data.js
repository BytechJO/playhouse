var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"toggle_slide",
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
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>3</span> Match. Then say.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p101match.mp3",
    "image"                 : "",
    "rightImage"            : "",
    "rightText"             : [],
    "rightTextAudio"        : [],
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "red",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "red",
    "nodeselectioncolor"    : 'rgb(0, 128, 255)', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "<b>1</b> &nbsp; I like zebras.",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "<b>2</b> &nbsp; I’m hungry.",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "<b>3</b> &nbsp; We have a test tomorrow.",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default  
            },
            {
            
                "text"          : "<b>4</b> &nbsp; Sandy is sick.",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
         
        ],
        "drops"                 : [
            {
                "text"          : "Let’s eat.",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Let’s go to the zoo.",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Let’s visit her.",
                "image"         : "no",
                "answer"        : [4],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Let’s study today.",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
          
        ]
    }
}               