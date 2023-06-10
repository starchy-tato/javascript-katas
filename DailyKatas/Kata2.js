const conditionalSum = function (values, condition) {
// condition is either odd or even
//   given condition add only values that match
//   if no matches, return 0
//     don't use filter

//     return 0 value
  if (values.length === 0) return 0

  let sum = 0
  //   compare the given values to condition
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) { // index is even
        sum += values[i]
      }
    }
    return sum
  } else {
//       else odd
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 != 0) { // index is even
        sum += values[i]
      }
    }
    return sum
  }
}

console.log(conditionalSum([1,2,3,4,5], "even")) // 6
console.log(conditionalSum([1,2,3,4,5], "odd")) // 9
console.log(conditionalSum([13,88,12,44,99], "even")) // 114
console.log(conditionalSum([], "odd")) // 0