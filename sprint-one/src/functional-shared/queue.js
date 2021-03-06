var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.storage = {};
  newQueue.lowest = 0;
  newQueue.highest = 0;

  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function() {
  return this.highest - this.lowest;
};

queueMethods.enqueue = function(value) {
  this.storage[this.highest] = value;
  this.highest++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var temp = this.storage[this.lowest];
    delete this.storage[this.lowest];
    this.lowest++;
    return temp;
  }
};