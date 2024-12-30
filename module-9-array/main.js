/* Array */
// Array adalah struktur data yang digunakan untuk menyimpan koleksi elemen, seperti angka atau string dalam satu variabel. Array dapat menyimpan berbagai tipe data sekaligus dan memiliki index yang di mulai dari index ke-0

// Membuat array

// 1. Menggunakan notasi array literal
let fruits = ["apel", "mangga", "pisang"];
console.log(fruits);

// 2. Menggunakan Syntax new Array()
let num = new Array(1, 2, 3, 4, 5);
console.log(num);

// Memgakses Element Array
console.log(fruits[0]);
console.log(num[1]);

// Menambah dan mengubah element dalam array
fruits[3] = "strawberry"; // Menambah array
fruits[0] = "durian"; // Mengubah array
console.log(fruits);

// Manipulasi Array
let numbers = [1, 2, 3];
// numbers.push(4); // Menambahkan array terakhir
// numbers.pop(); // Menghapus array terakhir
// numbers.shift(); // Menghapus array pertama
// numbers.unshift(5); // Menambahkan array pertama
// console.log(numbers);
let numbers2 = [4, 5];
let newNumber = numbers.concat(numbers2); // Menggabungkan 2 array dari variabel numbers dan numbers2
newNumber.splice(0, 2, 10);
console.log(newNumber);
console.log(newNumber.indexOf(10)); // Mengecek di index ke kah array dari yang di tentukan
console.log(newNumber.includes(7)); // Mengecek apakah array yang di tentukan ada di dalam data array? jika iya true jika tidak false
// console.log(newNumber.slice(2, 4)); // Menampilkan semua data array dimulai dari index yang di tentukan dan bisa di tentukan juga sampai akhir indexnya

// Multidimensional Array (Array of Arrays)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [4, 8, 9],
];
console.log(matrix[1][2]);
