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
    "mainTitleIconPos"      : {"right": "100px"},
    "mainTitleAudio"        : "../audios/page_43/Playhouse_Adventures.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Read and choose.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         :  ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p43read.mp3",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> I don’t know.","<span class='red_text'>✓</span> Their hair is short.","<span class='red_text'>✓</span> We’re back!"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],   
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "questions"             : [
        {
            "question"              : "Who is lost?",
            "image"                 : "",
            "answer"                : [2],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/43-img-1.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/43-img-2.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
        {
            "question"              : "What have the sisters got?",
            "image"                 : "",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/43-img-3.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "",
                    "image"         : "../images/pages/activities/43-img-4.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
            ]
        },
     
        
    ]
}