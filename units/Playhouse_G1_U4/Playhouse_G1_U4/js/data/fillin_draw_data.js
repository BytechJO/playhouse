var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    { audiourl: "../audios/page_22/PLAYHOUSE_1_WB_UNIT_4_TRACK_06_03.mp3" },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var fillin_draw_data = {
  mainTitle: "../images/pages/sb-icons/word_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/word_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="red_text">2</span> Draw a picture of you. Then write sentences. Use <b>have got</b> and <b>haven\'t got</b>.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  remember: {
    enable: true,
    title: "Remember!",
    text: 'Sentences begin with a <span class="blue_text">capital</span> letter and end with a full stop.',
    image: "../images/pages/activities/remember_mouse.png",
  },

  drawBoxLabel: "Draw",

  questions: [
    {
      prefix: "I have got",
      prefixAudio: "../audios/under.mp3",
      maxlength: 200,
    },
    {
      prefix: "I haven't got",
      prefixAudio: "../audios/under.mp3",
      maxlength: 200,
    },
    { prefix: "I", prefixAudio: "../audios/under.mp3", maxlength: 200 },
    { prefix: "I", prefixAudio: "../audios/under.mp3", maxlength: 200 },
  ],
};
