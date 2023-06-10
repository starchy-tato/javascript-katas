const sumLargestNumbers = function(data) {
  // solution here
  //   sort given array to desc order
  const descArr = data
  descArr.sort(function(a, b){return b - a})
  console.log('descArr: ', descArr)

// destructure out the first and second largest numbers
  const [largest, second_lg] = descArr

//   add them together
  const sumNum =  largest+second_lg

  console.log('sumNum: ', sumNum)
}

console.log(sumLargestNumbers([1,10]))
console.log(sumLargestNumbers([1,2,3]))
console.log(sumLargestNumbers([10, 4, 34, 6,92,2]))
