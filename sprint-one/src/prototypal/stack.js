var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.items = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.items;
};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
  this.items++;
};

stackMethods.pop = function() {
  if (this.size() > 0) {
    this.items--;
    var temp = this.storage[this.size()];
    delete this.storage[this.size()];
    return temp;
  }
};

