var sumAll = function() {
  let args = Array.prototype.slice.call(arguments);
  let sum = 0;

  if(args.every(isNumber) && args.every(isPositive)) {
    for(let i = 0; i < args.length; i++) {
      for(let j = 1; j <= args[i]; j++) {
        sum = sum + j;
      }
    }
    return sum - 1;
  } else {
    return "ERROR";
  }
}

function isNumber(arg) {
  return (typeof arg === "number");
}

function isPositive(arg) {
  return (arg >= 0 );
}

module.exports = sumAll
