/* Date Object */
// Date object digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu

// Membuat Date Object

// Tanggal dan waktu saat ini
let now = new Date();
console.log(now);

// Menggunakan String
let specificDate = new Date("August 20, 2024 10:30:00");
console.log(specificDate);

// Menggunakan Parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 12, 28, 10, 30);
console.log(customDate);

// Mengambil informasi tanggal dan waktu
let today = new Date();
console.log(today); // Mengambil semua informasi waktu saat ini
console.log(today.getFullYear()); // Mengambil informasi hanya waktu hanya berupa tahun
console.log(today.getMonth()); // Mengambil informasi hanya waktu hanya berupa bulan
console.log(today.getDate()); // Mengambil informasi hanya waktu hanya berupa tanggal
console.log(today.getDay()); // Mengambil informasi hanya waktu hanya berupa hari
console.log(today.getHours()); // Mengambil informasi hanya waktu hanya berupa jam
console.log(today.getMinutes()); // Mengambil informasi hanya waktu hanya berupa menit
console.log(today.getSeconds()); // Mengambil informasi hanya waktu hanya berupa detik
console.log(today.getMilliseconds()); // Mengambil informasi hanya waktu hanya berupa milidetik
console.log(today.getTime()); // Mengambil informasi hanya waktu hanya berupa milidetik sejak 1970

// Mengatur Tanggal dan Waktu
let date = new Date();

// Mengatur Waktu menjadi 2025
date.setFullYear(2025);

// Mengatur bulan menjadi Februari
date.setMonth(1);

// Mengatur hari menjadi 29
date.setDate(29);
console.log(date);

// Perhitungan waktu dengan Date object
let startDate = new Date(2024, 12, 28, 10, 30);
let endDate = new Date(2025, 12, 28, 10, 30);

let diff = endDate - startDate;
console.log(diff); // Milidetik

let diffIndays = diff / (1000 * 3600 * 24);
console.log(diffIndays);
