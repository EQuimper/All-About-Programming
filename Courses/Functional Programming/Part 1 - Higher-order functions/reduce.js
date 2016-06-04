var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

// // We want the sum
// // Whit the for loop
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
console.log(totalAmount);
// /* Result
// 1075
// */
/*>>>>>>=============================================<<<<<<*/

// With reduce function
var totalAmount = orders.reduce(function(sum, order) {
    console.log("hello", sum, order);
    return sum + order.amount;
}, 0);

console.log(totalAmount);
/* Result
hello 0 { amount: 250 }
hello 250 { amount: 400 }
hello 650 { amount: 100 }
hello 750 { amount: 325 }

1075
*/
/*>>>>>>=============================================<<<<<<*/

// With reduce function ES6
let totalAmount = orders.reduce((sum, o) => sum + o.amount, 0);
console.log(totalAmount);
/* Result
1075
*/
