var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var temp = this.head;
      if (this.head.next === null) {
        this.tail = null;
        this.head = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return temp.value;
    }
  };

  list.removeTail = function() {
    if (this.tail !== null) {
      var temp = this.tail;
      if (this.tail.prev === null) {
        this.tail = null;
        this.head = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      
      return temp.value;
    }
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant time
 removeHead: constant time
 contains: n or linear time, n/2 on average.
 */
