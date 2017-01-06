function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Adding node to the head
// Contant time - 0 (1);
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) { this.head.prev = newNode; }
  else { this.tail = newNode; }
  this.head = newNode;
};

// Adding node to tail
// Contant time - 0 (1);
LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) { this.tail.next = newNode; }
  else { this.head = newNode; }
  this.tail = newNode;
}

// Remove the head and return the value
// Contant time - 0 (1);
LinkedList.prototype.removeHead = function() {
  if (!this.head) { return null; }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) { this.head.prev = null; }
  else { this.tail = null; }
  return val;
}

// Remove the tail and return the value
// Contant time - 0 (1);
LinkedList.prototype.removeTail = function() {
  if (!this.tail) { return null; }
  var val = this.tail.value;
  this.tail = this.head.prev;
  if (this.tail) { this.tail.next = null; }
  else { this.head = null; }
  return val;
}

// Search a node in the LinkedList
LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === searchValue) { return currentNode.value; }
    currentNode = currentNode.next;
  }
  return null;
};

// Find the index of a value
LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value) { indexes.push(currentIndex); }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

