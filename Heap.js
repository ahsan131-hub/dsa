// implement the heap data structure
// what is the heap data?
//  heap is binary tree that have follwing properties
//  - complete tree
//  - structure property
//  - order property
// Reading min or max val is 0(1)
// pushing and pop is O(log n)
/**
 *                                3
 *                          10          17
 *                      11     17     18   20
 *                   19
 */
class Heap {
  constructor() {
    this.arr = [0];
  }

  read() {
    for (let idx = 1; idx < this.arr.length; ) {
      const parent = this.arr[idx];
      const firstChild = this.arr[2 * idx] || "";
      const secondChild = this.arr[2 * idx + 1] || "";

      console.log(`${parent} , ${firstChild} , ${secondChild}`);
      idx = idx + 1;
    }
  }

  push(element) {
    // first append the new node to end of the array
    // then proclat the node if it does't satisfy structure property of tree

    this.arr.push(element);
    let idx = this.arr.length - 1;
    while (idx > 0) {
      // keep procalating
      const parentIdx = Math.floor(idx / 2);

      if (this.arr[parentIdx] <= this.arr[idx]) break;
      [this.arr[parentIdx], this.arr[idx]] = [
        this.arr[idx],
        this.arr[parentIdx],
      ];

      idx = parentIdx;
    }
  }

  pop(element) {}
}

const main = () => {
  const heap = new Heap();
  heap.arr = [0, 10, 11, 17, 19, 17, 18, 20];
  heap.read();
  heap.push("3");
  heap.read();
  heap.pop("3");
};

main();
