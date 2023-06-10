// receive an array of instructor objects and return the object that has longest name
// if there are two instructors with the longest name, return the first one
const instructorWithLongestName = function(instructors){
//    input: an array of objects
//   output: the object with the longest name


  //   have a variable that stores the length of longest name
  let longestNameLength = 0
//   have a variable that stores the obj name of the longest name
  let longestName = ''
//   loop thru array for name in each object
  for (const name in instructors){
    console.log(name, instructors[name])
    //   condition to compare each obj name length with the variable:
    // if obj.name.length > longestNameLength Var true replace var with new longest
    if(instructors[name].length > longestNameLength){
      longestNameLength = instructors[name].length
      longestName = instructors[name]
    }
    //   if false longestNameVar stays the same


    //   return the longestNameVar
    return longestName
  }
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: 'iOS'},
  {name: "Jeremiah", course: 'Web'},
  {name: "Ophilia", course: 'Web'},
  {name: "Donald", course: 'Web'},
]))
console.log(instructorWithLongestName([
  {name: "Mathew", course: 'Web'},
  {name: "David", course: 'iOS'},
  {name: "Damascus", course: 'Web'},
]))

