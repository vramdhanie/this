/* Welcome, this tutorial walks through the meaning of the "this" keyword
 * in JavaScript
 *
 * **** TOP LEVEL
 * At the top level in the browser this refers to the *window* object.
 */

console.log(this === window); //window is not defined in Node


/*
 And in the Node REPL it is *global*
 */

console.log(this === global);

/*
 And it is *module.exports* in a Node module
 */

console.log(this === module.exports);


/*
 ====== PLAIN FUNCTIONS


In a plain function at the top level *this* is set to the global object.

*/

function