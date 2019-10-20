import { sample } from "lodash";

const halloweenEmoji = [
  "🧙‍♂️",
  "💀",
  "😈",
  "👹",
  "🤡",
  "👻",
  "👽",
  "🤖",
  "🎃",
  "🧛🏻‍♂️",
  "🧛🏻‍♀️",
  "🧟‍♂️",
  "🧟‍♀️",
  "🧚‍♀️",
  "🧚‍♂️",
  "👣",
  "👰🏿",
  "🐸",
  "🕷",
  "🦇",
  "🐍",
  "🍄",
  "🌚",
  "⚰️",
  "🎈",
  "🔪",
  "🧹",
  "🕯",
  "🖤",
  "🕸",
  "🧜‍♀️",
  "🧜‍♂️",
  "👼🏽"
];

export const getHalloweenEmoji = () => sample(halloweenEmoji);
