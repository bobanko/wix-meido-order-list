const floors = new Map([
  [4, "wjdj1412sdasf"],
  [5, "wjdj1410sdadd"],
  [6, "12evsadba2f"],
  [8, "bas45143568e"] //da
]);

module.exports = {
  serverUrl: "https://analytics.getmeido.com/media/json?hash=",
  defaultHash: floors.get(4),
  floors
};
