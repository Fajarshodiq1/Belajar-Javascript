/* Tipe Data Primitif */

// String
const asal = "dari bandung";
const nama = "Ujang";
const negara = "indonesia";

// Number
const umur = 24;

// boolean
let isMaried = true;
let status = isMaried ? "sudah menikah" : "belum menikah";

// Undifined
let x;

// Null
const person = null;

// Symbol
const Symbol1 = Symbol("desc 1");

// BigInt
const bigInt1 = 1314135346347645745n;

const output = `saya ${nama} berasal dari ${negara} saya tinggal dikota ${asal} umur saya ${umur} tahun saya ${status}`;

// Via document write
document.writeln(output);
// via console
console.log(bigInt1, typeof bigInt1);

/*
review materi tipe data primitif

1. Penggunaan ${} bisa digunakan untuk menggabungkan variabel dengan string dan penggunaan ini cukup dinamis karena tidak perlu menggunakan plus atau cara lain untuk penggabungan string, wajib menggunakan backtik `` untuk implementasi nya.
2. Pengguaan symbol hanya bisa di lakukan di console karena symbol tidak di representasikan sebagai string
3. BigInt di JavaScript ditandai dengan sufiks n, yang dapat terlihat di konsol menggunakan console.log(). Namun, saat menggunakan document.writeln(), sufiks n tidak ditampilkan karena document.writeln() menampilkan nilai sebagai string. Untuk menampilkan nilai BigInt di halaman web

https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/Javascript/Tricky-JS-Problems/typeof-null-why-its-object.md
*/

/* Tipe Data Reference */

// Object
const orang = {
  nama: "jamal",
  umur: 26,
  negara: "indonesia",
};
console.log(orang);
document.writeln(JSON.stringify(orang));

// Array
const hoby = ["basket", "berenang"];

// function
function helloGuys() {
  return "Hello Guys";
}
document.writeln(helloGuys());

/*
review materi tipe data reference

1. tipe data object seperti object dan array hanya bisa digunakan dan tidak bisa di representasikan menggunakan document.writeln() tetapi ada cara lain supaya biosa di representasikan menggunakan konversi JSON.stringify(orang) maka dari itu data object akan menjadi format json yang mudah di baca dan ada banyak cara lagi.

*/

/* perbedaan tipe data primitive dan reference */

// Tipe Data Primitive
let a = 10;
let b = a; // b hanya menyimpan nilai salinan dari a, artinya dia hanya menyimpan nilai salinan nya saja, jadi b akan tetap jadi 10

a = 20;
console.log(b);

// Tipe Data Reference

let person2 = {
  nama: "jamal",
};
let person3 = person2; // person3 akan menyimpan referensi yang sama dari person2, jadi tidak menyimpan salinan dari person2
person2.nama = "budi"; // gunakan .key untuk mengakses key di dalam objek
console.log(person3);
