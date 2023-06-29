// given a number for input data; this number is the highest value of our multiplication table
// generate a multiplication table for values from 1 to the provided number

const multiplicationTable = function (maxValue) {
//   input: a number that dictates the amount of loops
//   output: table of numbers from 1 to the number given with each line (loop) in the multiples of itself

//   loop with given maxValue as loop limit
//   in each row of table, the number should multiply by itself and stop by the loop amount
//   each row can be an array in the larger table array
  let table = []
  for (let i = 1; i <= maxValue; i++) {
    let row = []
    for (let r = 1; r <= maxValue; r++) {
      let multiple = r * i
      row.push(multiple)
    }
    table.push(row)
  }
  return table
}

console.log(multiplicationTable(1)) // 1
console.log(multiplicationTable(5))
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

console.log(multiplicationTable(10))