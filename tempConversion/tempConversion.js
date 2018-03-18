var ftoc = function(temp) {
  return roundToDecimal((temp - 32) * .5556);
}

var ctof = function(temp) {
  return roundToDecimal((temp * 1.8) + 32);
}

function roundToDecimal(number) {
  var factor = Math.pow(10, 1);
  return Math.round(number * factor) / factor;
}

module.exports = {
  ftoc,
  ctof
}
