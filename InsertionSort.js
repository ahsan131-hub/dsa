// Insert Sort
// 1,7,4,2
function insertionSort(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let j = i;
    while (j >= 0 && arr1[j - 1] > arr1[j]) {
      // swap
      const temp = arr1[j];
      arr1[j] = arr1[j - 1];
      arr1[j - 1] = temp;
      j--;
    }
  }
}

const arr1 = [1, 7, 4, 2];
insertionSort(arr1);
console.log(arr1);
