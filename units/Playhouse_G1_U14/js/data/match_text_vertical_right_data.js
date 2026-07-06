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
    "mainTitle"             : "../images/pages/sb-icons/adv_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_109/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>1</span> Read and match.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p109read.mp3",
    "image"                 : "",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> weatherman","<span class='red_text'>✓</span> Are you sure?","<span class='red_text'>✓</span> Look out, Max!","<span class='red_text'>✓</span> Oops!"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "red",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "rgb(0, 190, 255)",
    "nodeselectioncolor"    : 'rgb(0, 128, 255)', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "What is the weather today?",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "What season is it?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "What do the kids do?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default  
            },
        ],
        "drops"                 : [
            {
                "text"          : "",
                "image"         : "../images/pages/activities/6-img-1.png",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "",
                "image"         : "../images/pages/activities/6-img-2.png",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "",
                "image"         : "../images/pages/activities/6-img-3.png",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               