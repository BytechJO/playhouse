var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Look, read and choose.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "activityicon"          : "../images/icons/hand_icon.png",    
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "no",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "What's the weather like<br>in the summer? [_]",
            "options"               : [["A It's hot.","B It's cold."]],
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/Asset_18.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "What's the weather like<br>in the winter? [_]",
            "options"               : [["A It's sunny.","B It's snowy."]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '../images/pages/activities/Asset_19.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "What's the weather like<br>in the autumn? [_]",
            "options"               : [["A It's windy.","B It's snowy."]],
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/Asset_20.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        }
    ]
}