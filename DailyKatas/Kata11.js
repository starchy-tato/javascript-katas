// create functions for volume of various inflatable animals
// sphereVolume() calc volume of sphere given a radius
// coneVolume() calc volume of cone given radius and a height
// prismVolume() calc volume of prism given height, width, and depth
// totalVolume() receive array of different shapes that make up an attraction; should use prev functions to calculate total volume

const PI = 3.14159

const sphereVolume = function (radius) {
  return Math.round((4/3) * PI * (radius * radius * radius))
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189)

const coneVolume = function (radius, height) {
  return Math.round((1/3) * height * PI * (radius * radius))
}

console.log(45 < coneVolume(3,5) && coneVolume(3,5) < 49)

const prismVolume = function (height, width, depth) {
  return Math.round((width * depth) * height)
}

console.log(prismVolume(3,4,5) === 60)

const totalVolume = function (solids) {
// input: array of objects that specifies type and radius
//   output: integer of volume calc

  // initialize an array to hold all values
  let resultsCollection = []
  // loop over array into each object
  // check what type each object is
  // if solids[s].type is a sphere, use sphere vol calc with radius
  //  if solids[s].type is cone use cone vol calc with radius and height
  //  push all of the calc results into s
  for(let s = 0; s < solids.length; s++){
    console.log('loop of solids: ', solids[s])

    if(solids[s].type === 'sphere'){

      resultsCollection.push(sphereVolume(solids[s].radius))
    }
    if(solids[s].type === 'cone'){
      resultsCollection.push(coneVolume(solids[s].radius, solids[s].height))

    }
  }
  console.log("results collection: ", resultsCollection)

//   loop through results collection and add all the numbers in array together
//   round to nearest two decimals?
  let volumeResult = 0
  for(let r = 0; r < resultsCollection.length; r++){
    console.log("results collection loop: ", resultsCollection)
    volumeResult += resultsCollection[r]
  }
  Math.round(volumeResult)
  console.log("volumeResult: ", volumeResult)


}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000)

// troubleshoot why the first console log is false when rounded but true when not - is it the formula?
// why does the last console log show false