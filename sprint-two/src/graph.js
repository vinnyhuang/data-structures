

// Instantiate a new graph
var Graph = function() {

//1 --> 2
//{1: {2: true,
//         3: true}};

  this.adjacencyList = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.adjacencyList[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.adjacencyList[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.adjacencyList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.adjacencyList[fromNode][toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.adjacencyList[fromNode][toNode] = true;
  this.adjacencyList[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.adjacencyList[fromNode][toNode];
  delete this.adjacencyList[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.adjacencyList) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode and addEdge complexity is equivalent to adding key-value pair to an object.
 contains and hasEdge complexity is equivalent to looking up key in object.
 removeNode and removeEdge complexity is equivalent to deleting key-value pair in object.
 If we assume javascript objects to look like an ideal hash table, then each of the above methods
 should have complexity O(1).

 forEachNode: O(n)
 */


