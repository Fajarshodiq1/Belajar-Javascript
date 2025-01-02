/* switch-case Statement */
/* Switch-case adalah pernyataan kondisional di javascript yang digunakan untuk membandingkan
  sebuah ekspresi dengan beberapa kemungkinan nilai dan mengeksekusi blok kode tertentu berdasarkan
  kecocokan nilai tersebut. Switch-case sering digunakan sebagai alternatif dari if-else yang berturut-
  turut ketika kita ingin mengevaluasi sebuah variabel terhadap banyak kemungkinan nilai.
*/

// Sintaks Dasar
/*- ekspresi: Biasanya berupa variabel yang
nilainya akan dicek terhadap berbagai kasus.
  - case: Setiap case merepresentasikan nilai
yang akan dibandingkan dengan ekspresi.
  -break: Digunakan untuk menghentikan
eksekusi setelah satu kasus cocok. Jika tidak
ada break, kode akan terus berjalan ke kasus
berikutnya (fall-through).
  -default: Opsional, digunakan jika tidak ada
kasus yang cocok. Biasanya diletakkan di akhir
*/

const hari = 7;
let namaHari;
switch (hari) {
  case 1:
    namaHari = "senin";
    break;
  case 2:
    namaHari = "selasa";
    break;
  case 3:
    namaHari = "rabu";
    break;
  default:
    namaHari = "tidak ada nama hari yang anda tentukan";
}
console.log(namaHari);

// Eksekusi tanpa break : Jika tidak menempatkan break setelah setiap case, maka semua case di bawah nya akan di jalankan (fall-through) hingga menemukan break atau akhir dari switch case.

const hari2 = 6;
let namaHari2;
switch (hari2) {
  case 1:
    namaHari2 = "senin";
    console.log("Hari Senin");
  case 2:
    namaHari2 = "selasa";
    console.log("Hari Selasa");
  case 3:
    namaHari2 = "rabu";
    console.log("Hari Rabu");
  default:
    namaHari2 = "tidak ada nama hari yang anda tentukan";
}
console.log(namaHari2);

// Swtich-case dengan ekspresi atau operasi
let nilai = 85;
switch (true) {
  case nilai >= 90:
    console.log("Grade : A");
    break;
  case nilai >= 80:
    console.log("Grade : B");
    break;
  case nilai >= 70:
    console.log("Grade : C");
    break;
  case nilai >= 90:
    console.log("Grade : D");
    break;
  default:
    console.log("Grade : E");
}

/*
Kelebihan:
● Lebih mudah dibaca dibandingkan dengan rantai if-else panjang.
● Cocok digunakan saat ada banyak kemungkinan nilai yang harus diperiksa.
Kekurangan:
● Kurang fleksibel dibandingkan if-else saat membandingkan dengan kondisi
kompleks.
● Rentan terhadap kesalahan jika break terlewat.
*/
