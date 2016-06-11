var LinearHash = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

LinearHash.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = LimitedArray(2);
  tuple.set(0, k);
  tuple.set(1, v);

  while (this._storage.get(index) !== undefined) {
    if (this._storage.get(index).get(0) === k) {
      this._storage.set(index, tuple);
      return;
    }
    index++;
    if (index >= this._limit) {
      index = 0;
    }
  }
  this._storage.set(index, tuple);
  this._size++;

};

LinearHash.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var entry = this._getIndex(this._storage, this._limit, index, k);

  if (entry[0] === 'val') {
    return this._storage.get(entry[1]).get(1);
  } else {
    return undefined;
  }
  
  /*while (this._storage.get(index) !== undefined) {
    if (this._storage.get(index).get(0) === k) {
      return this._storage.get(index).get(1);
    }
    index++;
    if (index >= this._limit) {
      index = 0;
    }
  }*/
};

LinearHash.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var out = this.retrieve(k);
  if (out === undefined) {
    return;
  } else {
    this._size--;
  }

  var entry = this._getIndex(this.storage, this._limit, index, k);
  while (entry[0] !== 'blank') {
    this._storage.set(index) = this._storage.get(entry[1]);
    entry = this._getIndex(this.storage, this._limit, index, k)
  }
  var removed = entry[1];
  var temp = this._storage.get(index).get(1);

  var next = this._getIndex(this.storage, this._limit, index, k);
  if (entry[0] === 'blank') {
    return;
  }
  this._storage.set(removed, this._storage.remove()


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

LinearHash.prototype._getIndex = function(arr, limit, start, k) {
  while (arr.get(start) !== undefined) {
    if (arr.get(start).get(0) === k) {
      return ['val', start];
    }
    start++;
    if (start >= limit) {
      start = 0;
    }
    return ['blank', start];
  }
};