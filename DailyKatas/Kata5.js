// URL eg. https://www.google.com/search?q=lighthouse%20labs
// if we want to add a parameter to a url, there are certain characters that must be encoded to make the url valid (this includes !, double appostrophe, and #)
// this kata will focus on replacing the space within a string with a %20
const urlEncode = function(text) {
// input: a string with spaces
// output: a string with %20 where the space within a string used to be

//   take string and remove any trailing or ending spaces with trim
//   take string and replace spaces in string with a %20 (replace or split)
  // return the result
  return text.trim().split(" ").join("%20")
}

console.log(urlEncode("Lighthouse Labs")) // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")) // Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure"))
// blue%20is%20greener%20than%20purple%20for%20sure

