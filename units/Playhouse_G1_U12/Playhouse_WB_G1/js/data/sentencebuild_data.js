var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '',
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

var sentencebuild_data = {
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/sentbuild_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">1</span> Tick the correct sentences. Correct the wrong sentences.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "numbering"             : "number",   // "number" (or) "none"
    "numberstartfrom"       : 1,
    "questions"             :
     [
        {
          "text": "Works in an office my father.",
          "textaudio": "../audios/under.mp3",
          "isCorrect": false,                              // false = the sentence as written is wrong
          "correctSentence": "My father works in an office.", // required if isCorrect = false
          "strictcase": "no",   // yes (or) no
          "maxlength": 200
        },
        {
          "text": "My name is Tim.",
          "textaudio": "../audios/under.mp3",
          "isCorrect": true,                               // true = sentence already correct, no correction needed
          "correctSentence": "",
          "strictcase": "no",
          "maxlength": 200
        },
        {
          "text": "A police officer people protects.",
          "textaudio": "../audios/under.mp3",
          "isCorrect": false,
          "correctSentence": "A police officer protects people.",
          "strictcase": "no",
          "maxlength": 200
        }
      ]
    }