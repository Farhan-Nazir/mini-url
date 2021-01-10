const randomAlphaNumeric = () => {
  let alphaNumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  alphaNumeric = [...Array(6)].reduce(
    (a) => a + alphaNumeric[~~(Math.random() * alphaNumeric.length)],
    ""
  );

  return alphaNumeric;
};

module.exports = randomAlphaNumeric;
