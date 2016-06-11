

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, {});
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)[k] === undefined) {
    this._size++;
  }
  this._storage.get(index)[k] = v;

  if (this._size / this._limit >= 0.75) {

    this._limit *= 2;
    var myLimit = this._limit;

    var newStorage = LimitedArray(this._limit);
    for (var i = 0; i < this._limit; i++) {
      newStorage.set(i, {});
    }

    this._storage.each(function(item) {
      for (var key in item) {
        var newindex = getIndexBelowMaxForKey(key, myLimit);
        newStorage.get(newindex)[key] = item[key];
      }
    });

    this._storage = newStorage;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index)[k];
  if (temp !== undefined) {
    this._size--;
  }
  this._storage.get(index)[k] = undefined;

  if (this._size / this._limit <= 0.25 && this._limit > 8) {
    this._limit *= 0.5;
    var myLimit = this._limit;

    var newStorage = LimitedArray(this._limit);
    for (var i = 0; i < this._limit; i++) {
      newStorage.set(i, {});
    }

    this._storage.each(function(item) {
      for (var key in item) {
        var newindex = getIndexBelowMaxForKey(key, myLimit);
        newStorage.get(newindex)[key] = item[key];
      }
    });
    
    this._storage = newStorage;
  }

  return temp;
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */


