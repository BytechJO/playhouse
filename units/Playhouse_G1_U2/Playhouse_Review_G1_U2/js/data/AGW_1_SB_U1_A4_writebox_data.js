var writebox_data = {
  mainTitle: "../images/pages/sb-icons/word_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/word_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft: "<span class='blue_text'>2</span> Write the word.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  questions: [
    {
      image: "../images/pages/activities/Asset_11.png",
      bubbles: [
        {
          text: "Who is [_] ?",
          bubbleImage: "../images/pages/activities/Asset_13.png",
          // "character" : "../images/pages/activities/character1.png",
          position: { top: "5%", right: "2%" },
        },
        {
          text: "[_] is my mother.",
          character: "",
          bubbleImage: "../images/pages/activities/Asset_14.png", // Asset_14
          position: { bottom: "5%", left: "2%" },
        },
      ],
      answers: ["She", "She"],
    },
    {
      image: "../images/pages/activities/Asset_12.png",
      bubbles: [
        {
          text: "Is he [_] father?",
          bubbleImage: "../images/pages/activities/Asset_13.png",

          // "character" : "../images/pages/activities/character2.png",
          position: { top: "5%", right: "2%" },
        },
        {
          text: "Yes, he is [_] father.",
          bubbleImage: "../images/pages/activities/Asset_14.png", // Asset_14
          character: "",
          position: { bottom: "-14%", left: "2%" },
        },
      ],
      answers: ["your", "my"],
    },
  ],
};
