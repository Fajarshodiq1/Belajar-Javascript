/* If-Else Statement */
// If-Else Statement adalah salah satu struktur kontrol yang paling dasar di javascript. Ini digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Jika kondisi tersebut benar(true) maka blok tertentu akan dijalankan jika salah(false) maka kode lain tidak dapat di jalankan

// Sintaks Dasar

let age = 18;
if (age >= 18) {
  console.log("anda di perbolehkan memilih");
} else {
  console.log("anda tidak diperbolehkan memilih");
}

// if-else if Digunakan untuk memeriksa beberapa kondisi secara berurutan, Blok kode pertama yang kondisi nya benar(true) akan dijalankan, dan eksekusi akan berhenti setelah itu

let nilai = 35;
if (nilai >= 90) {
  console.log("Nilai : A");
} else if (nilai >= 80) {
  console.log("Nilai : B");
} else if (nilai >= 70) {
  console.log("Nilai : C");
} else {
  console.log("Nilai : D");
}

// Nested if-else(if-else Bertingkat), Dapat menempatkan if-else di dalam blok if-else lain nya. ini disebut jga sebagai nested if-else
let num = 10;
if (num > 0) {
  if (num % 2 == 0) {
    console.log("number ini positif dan bilangan genap");
  } else {
    console.log("number ini positif dan bilangan nya ganjil");
  }
} else {
  console.log("Number ini bilangan negatif");
}
