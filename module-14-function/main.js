/* Function */
// Function di JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan berulang kali. Function mempermudah pengorganisasian kode dengan membagi tugas besar menjadi tugas-tugas kecil yang lebih terstruktur.

// MEMBUAT FUNCTION, Untuk membuat function, gunakan kata kunci function diikuti dengan nama function, parameter (jika ada), dan blok kode yang akan dijalankan.
/*
  function namaFunction(parameter1,parameter2, ....){
    Blok kode yang akan di jalankan
  }
*/
// Contoh Penggunaan Function
function sapaPengguna(nama) {
  console.log(`hallo, ${nama} !`);
} // Dengan memberikan parameter dan mendefinisikan parameter

function sapaSemua() {
  console.log("halo semua nya");
} // Tidak memberikan parameter

// MEMANGGIL FUNCTION, Untuk menjalankan function, cukup panggil dengan menyebutkan nama function diikuti dengan tanda kurung, serta masukkan nilai untuk parameternya (jika ada).

sapaPengguna("Budi");
sapaSemua();

/*
Parameter dan Argumen
● Parameter adalah variabel yang didefinisikan dalam deklarasi function.
● Argumen adalah nilai yang diberikan saat function dipanggil.
*/

function tambah(a, b) {
  // Kode untuk memberikan parameter
  return a + b;
}
console.log(tambah(5, 3)); // Kode untuk memberikan argumen
// Di sini, a dan b adalah parameter, sedangkan 5 dan 3 adalah argumen

// Return Statement, Function dapat mengembalikan nilai menggunakan return. Setelah return dieksekusi,eksekusi function akan berhenti.

function kuadrat(num) {
  return num * num;
  console.log("hello"); // kode tidak akan di eksekusi
}
let result = kuadrat(4);
console.log(result);
