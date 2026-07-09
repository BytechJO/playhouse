var crossword_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft: '<span class="blue_text">1</span> Look, read and choose.',
  subTitleAudio: "../audios/under.mp3",
  gridCols: 10,
  gridRows: 9,
  strictcase: "no",

  /*
       cells: every filled square in the grid (input OR highlighted answer-reveal square).
       row / col are 0-indexed grid coordinates.
       clueNumber: shown as a small number in the top-left corner of the cell (optional).
       answer: the single correct letter for that cell (only needed for "input" cells).
       type: "input" (letter box) or "highlight" (shaded reveal box, not required to match strictly
             but still counted in validation using its own answer letter).
    */
  cells: [
    { row: 0, col: 3, type: "input", answer: "F", clueNumber: 1 },
    { row: 1, col: 2, type: "input", answer: "D", clueNumber: 2 },
    { row: 1, col: 3, type: "highlight", answer: "L" },
    { row: 1, col: 4, type: "input", answer: "Y" },
    { row: 2, col: 1, type: "input", answer: "S", clueNumber: 3 },
    { row: 2, col: 2, type: "input", answer: "W" },
    { row: 2, col: 3, type: "input", answer: "I" },
    { row: 2, col: 4, type: "input", answer: "M" },
    { row: 3, col: 2, type: "input", answer: "A" },
    { row: 3, col: 4, type: "input", answer: "P" },
    { row: 3, col: 6, type: "input", answer: "B", clueNumber: 5 },
    { row: 3, col: 7, type: "input", answer: "I" },
    { row: 3, col: 8, type: "input", answer: "K", clueNumber: 6 },
    { row: 4, col: 2, type: "input", answer: "N", clueNumber: 4 },
    { row: 4, col: 4, type: "input", answer: "L" },
    { row: 4, col: 6, type: "input", answer: "R" },
    { row: 4, col: 8, type: "input", answer: "K" },
    { row: 5, col: 0, type: "input", answer: "S", clueNumber: 7 },
    { row: 5, col: 1, type: "input", answer: "K" },
    { row: 5, col: 2, type: "input", answer: "A" },
    { row: 5, col: 3, type: "input", answer: "T" },
    { row: 5, col: 4, type: "input", answer: "E" },
    { row: 5, col: 5, type: "input", answer: "B" },
    { row: 5, col: 6, type: "input", answer: "O" },
    { row: 5, col: 7, type: "input", answer: "A" },
    { row: 5, col: 8, type: "input", answer: "R" },
    { row: 6, col: 0, type: "input", answer: "K" },
    { row: 7, col: 0, type: "input", answer: "A" },
    { row: 8, col: 0, type: "input", answer: "T" },
    { row: 8, col: 1, type: "input", answer: "E" },
  ],

  /* clue pictures shown next to (or on top of) a word's first cell */
  clueImages: [
    { img: "../images/pages/activities/7-img-1.png", top: "0%", left: "42%" },
    { img: "../images/pages/activities/7-img-2.png", top: "3%", left: "18%" },
    { img: "../images/pages/activities/7-img-3.png", top: "24%", left: "0%" },
    { img: "../images/pages/activities/7-img-4.png", top: "36%", left: "18%" },
    {
      img: "../images/pages/activities/7-img-5.png",
      top: "24%",
      left: "60%",
    },
    { img: "../images/pages/activities/7-img-6.png", top: "24%", left: "80%" },
    { img: "../images/pages/activities/7-img-7.png", top: "48%", left: "10%" },
    {
      img: "../images/pages/activities/7-img-8.png",
      top: "60%",
      left: "0%",
    },
    { img: "../images/pages/activities/7-img-9.png", top: "58%", left: "62%" },
    { img: "../images/pages/activities/7-img-10.png", top: "68%", left: "62%" },
  ],
};
