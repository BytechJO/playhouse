var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>3</span> Read and choose.",
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
            "question"              : "Is he your father?<br>[_].",
            "options"               : [["Yes, she is.","Yes, he is."]],
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/2-img-1.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "Is he your brother?[_].",
            "options"               : [["No, he isn't.","No, she isn't."]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '../images/pages/activities/2-img-4.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "Is she my sister?[_]",
            "options"               : [["Yes, she is.","No, he isn't."]],
            "answer"                : [2],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/2-img-2.png',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        }
    ]
}