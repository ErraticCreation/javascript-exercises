var removeFromArray = function(array) {
  let toBeRemoved =  Array.prototype.slice.call(arguments, 1);
  let toBeReturned = [];

  toBeReturned = array.filter((checkForRemoval) => { return !toBeRemoved.includes(checkForRemoval) });

  return toBeReturned;
}

module.exports = removeFromArray
