// receive a normal string of words separated with spaces as the input
// convert these string into camel cased strings
const camelCase = function (input) {
// input: a string with spaces
// output: a string with no spaces in camelCase

  let camelCaseResult = input
//   split string by spaces into an array
  let splitString = input.split(" ")
//   if the array is longer than one word, save the first word into its own var
  let firstWord = splitString.shift()

  let restOfSentence = splitString

//   loop rest of array
  if (restOfSentence.length === 0) {
    return camelCaseResult
  } else {
    for (let a = 0; a < restOfSentence.length; a++) {
      //    the first element in the strings get capitalized
      restOfSentence[a] = restOfSentence[a][0].toUpperCase() + restOfSentence[a].substring(1)
    }
  }
//   re-add first word back to array
  restOfSentence.unshift(firstWord)

//   rejoin array back into a string with no separator
  camelCaseResult = restOfSentence.join('')
  return camelCaseResult
}

console.log(camelCase("this is a string")) // "thisIsAString"
console.log(camelCase("loopy lighthouse")) // "loopyLighthouse"
console.log(camelCase("supercalifragalisticexpialidocious")) //supercaligragalisticexpialidocious