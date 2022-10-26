const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arr = []
  for (let i = increment; i <= 10 * increment; i += increment) {
    let newNum = addNums(i)
    arr.push(newNum)
  }
  return arr
}

// console.log(addNums10(1))

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let res = []
  for (let i = increment; i = 10 * increment; i += increment) {
    res.push(addNums10(i))
  }
  return res
}
// npm test test/phase-2-spec.js
module.exports = [addNums10, addManyNums10];
