// whereCanIPark returns the coordinates of an availabe parking spot for the vehicle, or returns false if there is no available spot
// function receives an array of arrays representing parking spots and a string with type of the vehicle that is looking for a parking spot

// 3 kinds of vehicles: regular cars, small cars, and motorcycles
// regular cars can only park in R spots
// small cars can park in R or S spots
// motorcycles can park in R, S, M spots

// in the array of parking spots, the letters are case sensitive - upper case is available, lower case is unavailable
const whereCanIPark = function(spots, vehicle) {
  // input an array of arrays
  // output: coordinates of spot in [x-column, y-row]

  // determine what the vehicle is to determine which spots are available

  // loop through the array of array
  // get the index of the for of loop with
  // get the letter spot index position in array with a counter?
  let result = []

  for (let y=0; y < spots.length; y++){
    let currentArray = spots[y]
    for(let x=0; x < currentArray.length; x++){
      if (vehicle === 'regular' && currentArray[x] === 'R'){
        result.push(x)
        result.push(y)
        break
      } else if (vehicle === 'small' && (currentArray[x] === 'R' || currentArray[x] === 'S')) {
        result.push(x)
        result.push(y)
        break
      } else if (vehicle === 'motorcycle' && (currentArray[x] === 'R' || currentArray[x] === 'S' || currentArray[x] === 'M')) {
        result.push(x)
        result.push(y)
        break
      }
    }
    if (result.length === 2){
      break
    }
  }

  if(result.length === 0){
    return false
  }
  return result
}



console.log(whereCanIPark(
  [
    // columns are x
    // 0,  1,   2,   3,   4,   5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 rows are y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular' // only 'R'
))
// [4, 0]

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M'],
  ],
  'small'
))
// false

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S'],
  ],
  'motorcycle'
))
// [3, 1]