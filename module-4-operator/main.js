// Operator

/*

1. Operator Aritmatika
2. Operator Assignment
3. Operator Perbandingan
4. Operator Logika
5. Operator Ternary

*/

// 1. Operasi Aritmatika
/* Digunakan untuk melakukan operasi matematika*/

// Penjumlahan
let x = 10;
let y = 19;
let hasil = x + y;
// console.log(hasil, typeof hasil);
// pengurangan
let a = 10;
let b = 19;
let hasil2 = a - b;
// console.log(hasil2, typeof hasil2);
// Pembagian
let c = 10;
let d = 2;
let hasil3 = c / d;
// console.log(hasil3, typeof hasil3);
// Perkalian
let e = 10;
let f = 2;
let hasil4 = e * f;
// console.log(hasil4, typeof hasil4);
// Modulus
let g = 11;
let h = 2;
let hasil5 = g % h;
// console.log(hasil5, typeof hasil5);

// Operator Eksponen atau perpangkatan
let base = 2;
let exponent = 3;
let power = base ** exponent;
// console.log(power, typeof power);

// Operator Increment
let count = 5;
count++;
// console.log(count, typeof count);

// Operator Decrement
let countDown = 5;
countDown--;
// console.log(countDown, typeof countDown);

// 2. Operator Assignment
/* Digunakan untuk menetapkan nilai ke variabel*/

// 1. Assignment dan penjumlahan
let ass = 7;
ass += 3;
// console.log(ass, typeof ass);

// 2. Assignment dan pengurangan
let ass2 = 7;
ass2 -= 3;
// console.log(ass2, typeof ass2);

// 3. Assignment dan perkalian
let ass3 = 7;
ass3 *= 3;
// console.log(ass3, typeof ass3);

// 4. Assignment dan pembagian
let ass4 = 9;
ass4 /= 3;
// console.log(ass4, typeof ass4);

// 5. Assignment dan Modulus
let ass5 = 10;
ass5 %= 3;
// console.log(ass5, typeof ass5);

// 3. Operator Perbandingan
/* Digunakan untuk membandingkan dua nilai yang menghasilkan nilai true atau false*/

// 1. (==) mengecek atau membandingkan persamaan nilai
let compStr = "5";
let compNum = 5;
// console.log(compStr == compNum);

// 2. (===) mengecek atau membandingkan persamaan nilai dan tipe data
let compStr2 = "5";
let compNum2 = 5;
// console.log(compStr2 === compNum2); // Jika tipe data sama = true jika beda = false

// 3. (!=) mengecek atau membandingkan pertidaksamaan nilai dari variabel
let compStr3 = "5";
let compNum3 = 5;
// console.log(compStr3 != compNum3);

// 4. (!==) mengecek atau membandingkan pertidaksamaan nilai dan tipe data dari variabel
let compStr4 = "5";
let compNum4 = "5";
// console.log(compStr4 !== compNum4);

// 5. (>)/Lebih besar mengecek atau membandingkan apakah nilai compStr5 > nunStr5
let compStr5 = 7;
let compNum5 = 5;
// console.log(compStr5 > compNum5);

// 6. (<)/Lebih kecil mengecek atau membandingkan apakah nilai compStr5 > nunStr5
let compStr6 = 7;
let compNum6 = 5;
// console.log(compStr6 < compNum6);

// 7. (>=)/Lebih besar sama dengan, mengecek atau membandingkan apakah nilai compStr5 >= nunStr5
let compStr7 = 7;
let compNum7 = 7;
// console.log(compStr7 >= compNum7);

// 6. (<=)/Lebih kecil sama dengan, mengecek atau membandingkan apakah nilai compStr5 > nunStr5
let compStr8 = 1;
let compNum8 = 7;
// console.log(compStr8 <= compNum8);

// 4. Operator Logika
/* Digunakan untuk menggabungkan ekspresi logika dan menghasilkan nilai boolean*/

// 1. AND  && Operator
let and = true;
let and2 = false;
let result = and && and2;
// console.log(result); // jika salah satu bernilai false maka output nya false

// 2. OR || Operator
let or = true;
let or2 = false;
let orResult = and || and2;
// console.log(orResult); // jika salah satu bernilai true maka output nya true

// 3 NOT ! Operator
let not = true;
let notResult = !not;
// console.log(orResult); // output nya kebalikan dari nilai variabel jika true maka output nya false dan begitu jga sebalik nya

// 4. Operator Ternary
/* Digunakan untuk operator kondisional yang merupakan cara singkat dari if else */
// Kondisi ? Ekspresi jika true : ekspresi jika false
let age = 17;
let canVote = age >= 18 ? "dia sudah tua" : "dia sudah tua";
console.log(canVote);
