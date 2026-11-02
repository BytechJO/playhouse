var circlecolour_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="blue_text">4</span> Circle the capital letters and full stops. Colour the short e words.',
  subTitleAudio: "../audios/under.mp3",

  /*
       Each sentence is split into words.
       needsCircle : true if this word carries the capital letter or the full stop (click = circle)
       needsColour : true if this word is a short "e" word (double-click = colour)
       A word can need both (e.g. the first word of a sentence that is ALSO a short-e word),
       or neither (a plain word with no interaction expected).
    */
  questions: [
    {
      words: [
        { text: "The", needsCircle: true, needsColour: false },
        { text: "bed", needsCircle: false, needsColour: true },
        { text: "is", needsCircle: false, needsColour: false },
        { text: "red.", needsCircle: true, needsColour: true },
      ],
    },
    {
      words: [
        { text: "Ken", needsCircle: true, needsColour: true },
        { text: "has", needsCircle: false, needsColour: false },
        { text: "got", needsCircle: false, needsColour: false },
        { text: "a", needsCircle: false, needsColour: false },
        { text: "pen.", needsCircle: true, needsColour: true },
      ],
    },
    {
      words: [
        { text: "Meg", needsCircle: true, needsColour: true },
        { text: "has", needsCircle: false, needsColour: false },
        { text: "got", needsCircle: false, needsColour: false },
        { text: "a", needsCircle: false, needsColour: false },
        { text: "bell.", needsCircle: true, needsColour: true },
      ],
    },
  ],
};
