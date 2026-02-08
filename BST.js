class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // insertion
  insert(node, val) {
    if (node == null) {
      return new Node(val);
    }

    // val > node.val then right
    if (val < node.val) {
      node.left = this.insert(node.left, val);
    } else if (val > node.val) {
      node.right = this.insert(node.right, val);
    }

    return node;
  }

  remove(node, val) {
    // cases:
    // 1. node doesn't exist return null
    // 2. if val is greator
    // 3. if val iss lesser
    // 4. if the val is equal.
    //      a. if the right node is null then just return left node
    //      b. if the left node is null then just return right node
    // 5. if none of the node is null:
    //    find the minimum from right side and swap with removal node.

    if (node == null) {
      return null;
    }

    if (val < node.val) {
      node.left = this.remove(node.left, val);
    } else if (val > node.val) {
      node.right = this.remove(node.right, val);
    } else {
      if (node.right == null) {
        return node.left;
      } else if (node.left == null) {
        return node.right;
      } else {
        let minNode = this.findMin(node.right);
        node.val = minNode.val;
        node.right = this.remove(minNode.right, minNode.val);
      }
    }
    return node;
  }

  findMin(node) {
    let cur = node;
    while (cur && cur.left) {
      cur = cur.left;
    }
    return cur;
  }

  print(node) {
    if (!node) {
      return;
    }
    this.print(node.left);
    console.log(node.val);
    this.print(node.right);
  }
}

function test() {
  const bst = new BST();

  // Insert values
  bst.root = bst.insert(bst.root, 5);
  bst.root = bst.insert(bst.root, 3);
  bst.root = bst.insert(bst.root, 7);
  bst.root = bst.insert(bst.root, 2);
  bst.root = bst.insert(bst.root, 4);

  console.log("After inserting 5, 3, 7, 2, 4:");
  bst.print(bst.root);

  // Remove a value
  bst.root = bst.remove(bst.root, 3);

  console.log("\nAfter removing 3:");
  bst.print(bst.root);
}

test();
