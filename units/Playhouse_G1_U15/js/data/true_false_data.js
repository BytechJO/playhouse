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
var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/adv_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_115/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Read and choose.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p115read.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> It’s perfect!","<span class='red_text'>✓</span> Umm.","<span class='red_text'>✓</span> You can say that again!"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "image"                 : "",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<b>1</b> &nbsp; Lilly is wearing swimming clothes.",
            "options"               : ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
            
        },
        {
            "question"              : "<b>2</b> &nbsp; The kids think Lilly is not ready.",
            "options"               : ["True","False"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>3</b> &nbsp; Lilly is wearing mittens.",
            "options"               :  ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>4</b> &nbsp; The kids are going swimming.",
            "options"               :  ["True","False"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
        },
    ]
}