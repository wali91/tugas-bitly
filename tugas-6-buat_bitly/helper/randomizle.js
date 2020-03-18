function randomizle() {
  let randomString = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let stringLength = 6;

  function mushRandom() {
    return possible[Math.floor(Math.random() * possible.length)];
  }

  return (randomString = Array.apply(null, Array(stringLength))
    .map(mushRandom)
    .join(""));
}

module.exports = randomizle;
