var repeatString = function(string, num) {
  let repeatedString = "";

  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      repeatedString = repeatedString + string;
    }
    return repeatedString;
  }
}

module.exports = repeatString
