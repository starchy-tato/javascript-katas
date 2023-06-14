// air pollution sensors to check air quality
// first param is an array of string samples of clean or dirty
//  second param is a number the highest acceptable amount of dirty samples
// eg. 0.4 means there must be less than 40% dirty samples for air to be considered clean
const checkAir = function (samples, threshold) {
// inputs: array of string samples & a threshold number
//   output: string of "Polluted" or "Clean"

  let dirtyCount = 0
//   loop through array to determine how many dirty sample count
  for (let d = 0; d < samples.length; d++) {
    if (samples[d] === 'dirty') {
      dirtyCount++
    }
  }

//   to determine percentage of threshold: result = (dirty sample count / whole length of array)
  let pollutionRatio = (dirtyCount / samples.length)

//   compare result to threshold
  //   if equal or greater than threshold, "Polluted"
//   else "Clean"
  if(pollutionRatio >= threshold){
    return "Polluted"
  } else {
    return "Clean"
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)) // Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)) // Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) // Clean