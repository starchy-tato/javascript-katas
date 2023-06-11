// receive an array of instructor objects and return the object that has longest name
// if there are two instructors with the longest name, return the first one
const instructorWithLongestName = function(instructors){
//    input: an array of objects
//   output: the object in array with the longest name

  //   have a variable that stores the length of longest name
  let longestNameLength = 0
//   have a variable that stores the obj name of the longest name
  let objWithLongestName = null
//   loop thru array for name in each object
  for (const object of instructors){
    // console.log(`name in obj: ${object.name}`)
    // condition to compare each obj name length with the variable:
    // if there are two instructors with the longest name, return the first one
    // if obj.name.length > longestNameLength Var true replace var with new longest
    if(object.name.length > longestNameLength) {
      longestNameLength = object.name.length
      objWithLongestName = object
    }
    //   if false objWithLongestName stays the same
  }
  //   return the objWithLongestName
  return objWithLongestName
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: 'iOS'},
  {name: "Jeremiah", course: 'Web'},
  {name: "Ophilia", course: 'Web'},
  {name: "Donald", course: 'Web'},
])) // {name: "Jeremiah", course: 'Web'}
console.log(instructorWithLongestName([
  {name: "Mathew", course: 'Web'},
  {name: "David", course: 'iOS'},
  {name: "Damascus", course: 'Web'},
])) // {name: "Damascus", course: 'Web'}

// for in - looping over properties of an object
//  vs for of is used for an array of objects
student = {
  name: 'Bob',
  age: 88,
  gender: "male"
}