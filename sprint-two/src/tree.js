var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null;
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, src) {
  for (var key in src) {
    to[key] = src[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    result = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    result = result || this.children[i].contains(target);
  }
  return result;
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;

  if (parent !== null) {
    var i = parent.children.indexOf(this);

    parent.children.splice(i, 1);
  }

  this.parent = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant time
 contains: O(n)
 */
