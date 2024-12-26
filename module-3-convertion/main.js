/* Convertion */

// Implicit Convertion

let result = 10 + "5";
//type data number akan menjadi string ketika menjalankan operasi penjumlahan selama melakukan implicit convertion di atas
console.log(result, typeof result);

let result2 = 10 - "5";
//type data string akan menjadi number ketika menjalankan operasi pengurangan selama melakukan implicit convertion di atas
console.log(result2, typeof result2);

// Falsy Value 0, null, undifined, ""
let bool = !0;
console.log(bool, typeof bool);
// falsy value adalah nilai yang secara default itu adalah false

// Explicit Convertion

// Integer ke String
let num = 100;
// let string = String(num);
let string = num.toString();
console.log(num, typeof num);
// String ke Integer menggunakan parseInt()
let string2 = "100";
let integer = parseInt(string2);
console.log(integer, typeof integer);
// String yang menggunakan float ke float menggunakan parseFLoat()
let string3 = "100.134";
let integer2 = parseFloat(string3);
console.log(integer2, typeof integer2);
