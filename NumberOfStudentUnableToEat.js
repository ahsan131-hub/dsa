var countStudents = function (students, sandwiches) {
  const stdQueue = [...students];
  const sandStack = [...sandwiches];
  let rotations = 0;

  while (stdQueue.length > 0) {
    if (rotations >= stdQueue.length) break;

    const frontStd = stdQueue.shift();
    const topSand = sandStack[0];

    if (frontStd === topSand) {
      sandStack.shift();
      rotations = 0;
    } else {
      stdQueue.push(frontStd);
      rotations++;
    }
  }
  console.log("Remaining students unable to eat:", stdQueue);
  console.log("Remaining sandwiches:", sandStack);
  return stdQueue.length;
};

// Example usage:const students = [1,1,0,0];
const sandwiches = [0, 1, 0, 1];
const students = [1, 1, 0, 0];
console.log(countStudents(students, sandwiches)); // Output: 0

const students2 = [1, 1, 1, 0, 0, 1];
const sandwiches2 = [1, 0, 0, 0, 1, 1];
console.log(countStudents(students2, sandwiches2)); // Output: 3
