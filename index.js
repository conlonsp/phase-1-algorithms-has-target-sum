function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false
}

/* 
  Quadratic time
*/

/* 
  for currentInt index = 0; is less than array length; and increments;
    for comparedInt = currentInt + 1; is less than array length; and ++;
      if currentInt + comparedInt = target
        returns true
*/

/*
  Compare each number against the others to see if the sum of those two 
  numbers equals the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
