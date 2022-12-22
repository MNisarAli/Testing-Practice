stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  throw new Error("string length should be 1-10 char");
};

module.exports = { stringLength };