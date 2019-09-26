/**
 * just add your user in following format:
 * ["your name's exact copy from dashboard here", "emoji here"]
 * example:
 * ["Andrii Motsyk", "💀"],
 * ⚠️TIPS:
 * some users have redundant spaces in their names,
 * so they should copy those as-is.
 * Also pay attention to letter case,
 * those who have lowercased names should paste their names as-is.
 *  ["andrii mokhovyk", "🇺🇦"], //like this guy
 */
const users = [
  ["Andrey Listochkin", "🧔🏼"],
  ["Dmytro Naumenko", "🦄"],
  ["Yurii But", "🦐"],
  ["Nadiia Davydiuk", "🌸"], //"👩🏻‍🦰" - not supported on win
  //da
  ["Kostiantyn Ovsepian", "🤓"],
  ["Volodymyr Kaliuzhnyi", "🤘"],
  //
  ["Anna Bilyavskaya", "🌺"],
];

//da:
// "Andrii Umanskyi",
// "Volodymyr Kaliuzhnyi",
// "Kristina Lyba",
// "Kostiantyn Ovsepian",
// "Oleksandr Danylenko",
// "Natalia Gagarina",
// "Liudmyla Manziuk",
// "Anton Berezhnyi",
// "Mykhailo Khraban",
// "Viktor Paladiichuk"

//💀:
//"Volodymyr Myshko",
//"Andrii Motsyk",
//etc
//"Anna Bilyavskaya"

module.exports = {
  users: [
    ...users,
    /* system reserved */
    ["[meido] server error", "💩"]
  ]
};
