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
    // "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_81/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Read and choose.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p81read.mp3",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> Again?","<span class='red_text'>✓</span> restaurant"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],   
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "questions"             : [
        {
            "question"              : "Max wants to eat a",
            "image"                 : "",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/6-img-1.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/6-img-2.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "The restaurant is next to the",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/6-img-3.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/6-img-4.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "Max eats ___ burgers.",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/6-img-5.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/6-img-6.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        
    ]
}