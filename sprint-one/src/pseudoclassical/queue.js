var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lowest = 0;
  this.highest = 0;
};

Queue.prototype.size = function() {
  return this.highest - this.lowest;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.highest] = value;
  this.highest++;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var temp = this.storage[this.lowest];
    delete this.storage[this.lowest];
    this.lowest++;
    return temp;
  }
};