// 2, 3, 1, 899, 68, 42, 5

function quickSort(arr1, start, end) {
  if (end - start < 1) {
    return arr1;
  }

  //do partition
  let pivot = arr1[end];
  let j = start;

  for (let i = start; i < end; i++) {
    if (arr1[i] < pivot) {
      // swap ith element to jth
      const temp = arr1[j];
      arr1[j] = arr1[i];
      arr1[i] = temp;

      j++;
    }
  }

  arr1[end] = arr1[j];
  arr1[j] = pivot;

  quickSort(arr1, start, j - 1);
  quickSort(arr1, j + 1, end);
  return arr1;
}

const arr1 = [2, 3, 1, 899, 68, 42, 1];
console.log(quickSort(arr1, 0, arr1.length - 1));
