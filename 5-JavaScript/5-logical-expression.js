//Logical expressions
let sunny =  true;
let warm = false;

console.log("Is it sunny and warm?", sunny && warm);
/*
&& = and
true && true = true
false && true = false
true && false = false
false && false = false
*/

console.log("Is it sunny or warm?", sunny || warm);
/*
|| = OR
true | | true = true
false | | true = true
true | | false = true
false | | false = false
*/