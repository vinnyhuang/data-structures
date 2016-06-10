var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  extend(newTree, treeMethods);
  
  return newTree;
};

treeMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

treeMethods.insert = function(value) {
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

treeMethods.contains = function(value) {

  

};

treeMethods.depthFirstLog = function(value) {

  

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
