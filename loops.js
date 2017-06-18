function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}


function forLoop(array) {
  for (i=0;i<25;i++) {
    array[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
  }
  console.log("Length is " + array.length)
  console.log("First" + array[0])
  console.log("Last" + array[24])
  return array
}

function whileLoop(n) {
  while (n>=1) {
    console.log(n-1)
    n = n-1
  }
  return "done"
}

function doWhileLoop(arr) {
  do {
      console.log("Arr length" + arr.length)
      if (arr.length > 0)
      {
        arr = arr.slice(0,arr.length-1)
        console.log("New Arr length" + arr.length)
      }
  } while (arr.length > 0 && maybeTrue());
  return arr
}
