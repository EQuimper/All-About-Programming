var testArray = ['item 1', 'item 2', 'item 3'];

// We can use the for loop for get all the item

for (var i = 0; i < testArray.length; i++) { // The length property make your code dynamic
	console.log(testArray[i]);
}

/* Result
 item 1
 item 2
 item 3
 */

testArray.push('item 4');

for (var x = 0; x < testArray.length; x++) {
	console.log(testArray[x]);
}

/* Result
 item 1
 item 2
 item 3
 item 4
 */