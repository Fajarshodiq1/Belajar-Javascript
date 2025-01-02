# Switch-Case Statement

`Switch-case` adalah pernyataan kondisional di JavaScript yang digunakan untuk membandingkan sebuah ekspresi dengan beberapa kemungkinan nilai dan mengeksekusi blok kode tertentu berdasarkan kecocokan nilai tersebut. Switch-case sering digunakan sebagai alternatif dari if-else berturut-turut ketika kita ingin mengevaluasi sebuah variabel terhadap banyak kemungkinan nilai.

---

## Sintaks Dasar

```javascript
switch (ekspresi) {
  case nilai1:
    // blok kode
    break;
  case nilai2:
    // blok kode
    break;
  default:
  // blok kode jika tidak ada yang cocok
}
```

| Komponen   | Penjelasan                                                                  |
| ---------- | --------------------------------------------------------------------------- |
| `ekspresi` | Biasanya berupa variabel yang nilainya akan dicek terhadap berbagai kasus.  |
| `case`     | Setiap case merepresentasikan nilai yang akan dibandingkan dengan ekspresi. |
| `break`    | Digunakan untuk menghentikan eksekusi setelah satu kasus cocok.             |
| `default`  | Opsional, digunakan jika tidak ada kasus yang cocok.                        |

---

## Contoh Penggunaan

### Contoh 1: Switch dengan Hari

```javascript
const hari = 7;
let namaHari;
switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  default:
    namaHari = "Tidak ada nama hari yang Anda tentukan";
}
console.log(namaHari);
```

| Input | Output                                   |
| ----- | ---------------------------------------- |
| `1`   | "Senin"                                  |
| `7`   | "Tidak ada nama hari yang Anda tentukan" |

---

### Contoh 2: Eksekusi Tanpa `break` (Fall-Through)

```javascript
const hari2 = 6;
let namaHari2;
switch (hari2) {
  case 1:
    namaHari2 = "Senin";
    console.log("Hari Senin");
  case 2:
    namaHari2 = "Selasa";
    console.log("Hari Selasa");
  case 3:
    namaHari2 = "Rabu";
    console.log("Hari Rabu");
  default:
    namaHari2 = "Tidak ada nama hari yang Anda tentukan";
}
console.log(namaHari2);
```

| Input | Output                                               |
| ----- | ---------------------------------------------------- |
| `6`   | Semua case akan dijalankan karena tidak ada `break`. |

---

### Contoh 3: Switch dengan Ekspresi atau Operasi

```javascript
let nilai = 85;
switch (true) {
  case nilai >= 90:
    console.log("Grade: A");
    break;
  case nilai >= 80:
    console.log("Grade: B");
    break;
  case nilai >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: E");
}
```

| Kondisi       | Output     |
| ------------- | ---------- |
| `nilai >= 90` | "Grade: A" |
| `nilai >= 80` | "Grade: B" |
| `nilai < 70`  | "Grade: E" |

---

## Kelebihan dan Kekurangan

### Kelebihan:

- Lebih mudah dibaca dibandingkan dengan rantai if-else panjang.
- Cocok digunakan saat ada banyak kemungkinan nilai yang harus diperiksa.

### Kekurangan:

- Kurang fleksibel dibandingkan if-else saat membandingkan dengan kondisi kompleks.
- Rentan terhadap kesalahan jika `break` terlewat.

---

## Kesimpulan

`Switch-case` adalah struktur kontrol yang berguna untuk mengevaluasi banyak kemungkinan nilai. Namun, berhati-hatilah dalam menggunakan `break` untuk menghindari eksekusi yang tidak diinginkan.
