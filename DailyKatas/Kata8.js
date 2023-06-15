const repeatNumbers = function (dataArray) {
  // input: array of arrays - [num_to_be_repeated, num_that_is_multiplier]
//   output: string of numbers that have been multiplied
  let stringResult = ''
  let collector = []

// first loop to loop through the paired sub arrays
// need to grab the first element in each sub array and turn into string
// need to use the second element in each sub array and to repeat the first num
  for (let a = 0; a < dataArray.length; a++) {
    let firstNum = dataArray[a][0].toString()
    let secondNum = dataArray[a][1]

    let pairString = ''
    let numRepeat = []
    //   second loop to loop through each paired sub array
    for (let s = 0; s < secondNum; s++) {
      firstNum.toString()
      numRepeat.push(firstNum)
    }
    pairString = numRepeat.join('')

    collector.push(pairString)
    // if there is more than one sub array, need to join and separate by comma
    stringResult = collector.join(", ")
  }

// return string
  return stringResult
}

console.log(repeatNumbers([[1, 10]])) // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])) // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])) // 10101010, 343434343434, 9292