var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    lowest: 0,
    highest: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.highest] = value;
    storage.highest++;
  };

  someInstance.dequeue = function() {
    if (storage.highest > storage.lowest) {
      var temp = storage[storage.lowest];
      delete storage[storage.lowest];
      storage.lowest++;
      return temp;
    }
  };

  someInstance.size = function() {
    return storage.highest - storage.lowest;
  };

  return someInstance;
};
