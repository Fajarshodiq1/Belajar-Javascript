/*Javascript Numbers*/
/*Di javascript tipe data number digunakan untuk merepresentasikan angka. angka ini bisa berupa bilangan bulat(integer), pecahan(floating point), atau bilangan khusus seperti Infinity dan NaN(Not a Number). */

// Contoh penggunaan numbers
let bilBulat = 26;
let bilPecahan = 26.5;
let bilNegatif = -26;
let infinityValue = Infinity;
let notANumber = NaN;
console.log(notANumber);

// Javascript menyediakan beberapa properti pada object number yang berguna:

// 1. number.MAX_VALUE
console.log(Number.MAX_VALUE);

// 2. number.MIN_VALUE
console.log(Number.MIN_VALUE);

// 3. number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);

// 4. number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);

// 5. number.NaN
console.log(Number.NaN);

// Metode bawaan number
// 1. toString(), Mengubah angka menjadi string
let num = 433.4;
let str = num.toString();
console.log(str, typeof str);

// 2. toFixed(digits), Mengubah angka menjadi string dengan jumlah digit desimal yang di tentukan.
let floating = 3.1352532;
console.log(floating.toFixed(5), typeof floating.toFixed(5));

// 3. toPrecision(digits), Mengubah angka menjadi string dengan panjang total yang di tentukan
let float = 3.13456;
console.log(float.toPrecision(2));

// 4. parseInt() dan parseFloat(), Mengubah string menjadi angka integer atau floating point
let str2 = "123.12";
let int = parseInt(str2);
let float2 = parseFloat(str2);
console.log(float2);
