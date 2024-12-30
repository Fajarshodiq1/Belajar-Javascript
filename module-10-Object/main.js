/* Object */
// Object adalah tipe data tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value(bisa disebut juga properti).

// Membuat Object

// 1. Object Literal
let mobil = {
  merek: "toyota",
  model: "avanza",
  tahun: 2014,
};
// console.log(mobil);

// 2. Menggunakan Constructor new Object()
let buku = new Object();
buku.judul = "Belajar javascript";
buku.penulis = "lorem";
console.log(buku);

// Mengakses properti Object()
let mahasiswa = {
  nama: "Fajar",
  "jurusan mahasiswa": "Sistem Informasi",
  nim: 2210221,
  umur: 22,
};

// 1. Menggunakan Notasi Titik(Dot Notation)
console.log(mahasiswa.nama);

// 2. Menggunakan Notasi Kurung(Bracket Notation)
console.log(mahasiswa["jurusan mahasiswa"]);

// Menambah dan Mengubah Properti
// 1. Mebambah Properti
mahasiswa.alamat = "jakarta";
console.log(mahasiswa);

// 2. Mengubah Properti
mahasiswa.nama = "jamal";
console.log(mahasiswa);

// Menghapus Properti
delete mahasiswa.alamat;
console.log(mahasiswa);

// Nested Object
let univ = {
  nama: "itb",
  fakultas: {
    fakultas_1: "Fakultas Teknik",
    jurusan: "Teknik Informatika",
  },
};
console.log(univ);

// Destructuring Object
let { nama, umur } = mahasiswa;
console.log(`${nama} umur ${umur}`, typeof mahasiswa);
