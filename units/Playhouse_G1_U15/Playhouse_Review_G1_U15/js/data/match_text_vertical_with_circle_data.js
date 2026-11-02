var linedraw_data = {    
    "layout"                : 1,
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>1</span> Match.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "#6d6d6d",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#09aae7",
    "nodeselectioncolor"    : '#6d6d6d', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "The girl",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "The boy",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "The man",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ],
        "drops"                 : [
            {
                "text"          : "is wearing a hat.",
                "image"         : "no",
                "answer"        : [2],
                "circleanswer"  : "wearing",
                "circleOptions": ["is", "wearing", "a hat"],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "is eating ice cream.",
                "image"         : "no",
                "answer"        : [1],
                "circleanswer"  : "eating",
                "circleOptions": ["is", "eating", "ice cream"],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "is holding a yo-yo.",
                "image"         : "no",
                "answer"        : [3],
                "circleanswer"  : "holding",
                "circleOptions": ["is", "holding", "a yo-yo"],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            }
        ]
    }
}               