var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {size: 0};
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  return this.storage.size;
};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
  this.storage.size++;
};

stackMethods.pop = function() {
  if (this.size() > 0) {
    this.storage.size--;
    var temp = this.storage[this.size()];
    delete this.storage[this.size()];
    return temp;
  }
};