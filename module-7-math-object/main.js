/* Math Object */

// Math Object adalah object bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika

// Properti Math
// * Math.PI: Mengembalikan nilai π (3.14159... ).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log(Math.PI);
console.log(Math.E);

// Metode Math
console.log(Math.abs(-7)); // Mengembalikan nilai absolut dari -7 (hasil: 7)
console.log(Math.pow(2, 5)); // Menghitung 2 pangkat 5 (hasil: 32)
console.log(Math.sqrt(16)); // Menghitung akar kuadrat dari 16 (hasil: 4)
console.log(Math.cbrt(27)); // Menghitung akar kubik dari 27 (hasil: 3)
console.log(Math.max(1, 18, 12, 10)); // Mengembalikan nilai terbesar dari angka-angka yang diberikan (hasil: 18)

// Pembulatan Angka
console.log(Math.round(3.4)); // Membulatkan angka ke nilai terdekat. Jika desimal ≥ 0.5, dibulatkan ke atas; jika < 0.5, dibulatkan ke bawah.
console.log(Math.ceil(4.1)); // Membulatkan angka ke atas
console.log(Math.floor(3.9)); // Membulatkan angka ke bawah ke bilangan bulat terdekat.
console.log(Math.trunc(4.1)); // Menghilangkan bagian desimal, hanya menyisakan bilangan bulat.

// Random Number
console.log(Math.random()); // Digunakan untuk mengenerate angka random
