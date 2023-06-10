const numberOfVowels = function(word) {
  // function recieves a string and return the # of vowels in that string

// const for vowels
  const vowels = ["a", "e", "i", "o", "u"]
//   variable for counting vowels
  let vowelCounter = 0
//   is there an array to array comparison? -> includes()
//   use a loop to loop over string input and compare to vowel array
  for (let i= 0; i < word.length; i++) {
    //   if there is a match increment a counter
    if(vowels.includes(word[i])){
      vowelCounter++
    }
  }
  //   return the counter
  return vowelCounter
}

console.log(numberOfVowels("orange")) // 3
console.log(numberOfVowels("lighthouse labs")) // 5
console.log(numberOfVowels("aeiou")) // 5