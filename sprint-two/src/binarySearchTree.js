var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  extend(newTree, bstMethods);
  
  return newTree;
};

bstMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

bstMethods.insert = function(value) {
  if (value <= this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else {
    if (value <= this.value) {
      return this.left !== null && this.left.contains(value);
    } else {
      return this.right !== null && this.right.contains(value);
    }
  }

};


bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
