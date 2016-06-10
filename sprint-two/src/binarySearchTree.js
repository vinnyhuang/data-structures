var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

<<<<<<< HEAD
  extend(newTree, bstMethods);
=======
  extend(newTree, treeMethods);
>>>>>>> 69cd2b955f476341c11ac9acc743cf71c96090c2
  
  return newTree;
};

<<<<<<< HEAD
bstMethods = {};
=======
treeMethods = {};
>>>>>>> 69cd2b955f476341c11ac9acc743cf71c96090c2

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

<<<<<<< HEAD
bstMethods.insert = function(value) {
=======
treeMethods.insert = function(value) {
>>>>>>> 69cd2b955f476341c11ac9acc743cf71c96090c2
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

<<<<<<< HEAD
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
=======
treeMethods.contains = function(value) {

  

};

treeMethods.depthFirstLog = function(value) {

  

>>>>>>> 69cd2b955f476341c11ac9acc743cf71c96090c2
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
