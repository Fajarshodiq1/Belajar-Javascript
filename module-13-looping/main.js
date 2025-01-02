/* Looping */
/* 
● Loop digunakan untuk menjalankan blok kode berulang kali selama kondisi tertentu
terpenuhi.
● JavaScript mendukung beberapa jenis loop: for, while, dan do-while. Setiap jenis
loop memiliki kegunaannya sendiri, tergantung pada kebutuhan.
*/

// For Loop
// for loop digunakan ketika jumlah iterasi sudah di ketahui
// Sintaks Dasar :
/*
  for(inisialisasi; kondisi; perubahan){
    kode yang dijalankan selama kondisi benar
  }
*/
/*
  ●Inisialisasi: Nilai awal variabel loop:
  ●Kondisi: kondisi yang harus benar supaya loop terus berjalan
  ●Perubahan: Perubahan yang terjadi pada variabel loop setiap iterasi
*/

// contoh penggunakan loop dasar
// for (let i = 1; i <= 5; i++) {
//   console.log(`iterasi ke-${i}`);
// }

// While Loop
// while loop menjalankan kode selama kondisi tetap benar. Loop ini berguna ketika jumlah iterasi tidak pasti dan bergantung pada kondisi tertentu.
// Sintaks Dasar :

/*
  while(kondisi){
    kode yang akan dijalankan selama kondisi benar
  }
*/

// Contoh penggunaan while loop dasar
// let i = 1;
// while (i <= 5) {
//   console.log(`Iterasi ke-${i}`);
//   i++;
// }

// Do While Loop
// do-while loop selalu menjalankan kode setidak nya satu kali, karena kondisi di periksa setelah blok kode di eksekusi
// sintaks dasar
/* 
  do{
    kondisi yang di jalankan
  }while(kondisi)
*/

// contoh penggunaan do while loop dasar

// let i = 1;
// do {
//   console.log(`iterasi ke-${i}`);
//   i++;
// } while (i <= 5);

// For-in Loop
// digunakan untuk mengiterasi properti objek atau index array
// const objek = { nama: "john", umur: 31 };
// for (let properti in objek) {
//   console.log(`${properti}:${objek[properti]}`);
// }

// For-of loop
// digunakan untuk mengiterasi elemen dalam itrable seperti array atau string
// const arr = [1, 2, 3, 4, 5];
// for (let nilai of arr) {
//   console.log(nilai);
// }
