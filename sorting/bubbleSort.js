function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let myArray = [4, 2, 6, 5, 1, 3];
console.log("Before bubble sorting");
console.log(myArray);
console.log("After bubble soring");
bubbleSort(myArray);
console.log(myArray);
