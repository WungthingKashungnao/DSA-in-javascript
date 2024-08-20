function insertionSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

let myArray = [4, 2, 6, 5, 1, 3];
console.log("Before insertion sorting");
console.log(myArray);
console.log("After insertion soring");
insertionSort(myArray);
console.log(myArray);
