# If-Else Statement

`If-Else Statement` adalah salah satu struktur kontrol yang paling dasar di JavaScript. Pernyataan ini digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Jika kondisi tersebut bernilai **true**, maka blok tertentu akan dijalankan. Sebaliknya, jika bernilai **false**, maka kode lain akan dijalankan.

---

## Sintaks Dasar

Berikut adalah sintaks dasar `if-else`:

```javascript
let age = 18;
if (age >= 18) {
  console.log("Anda diperbolehkan memilih");
} else {
  console.log("Anda tidak diperbolehkan memilih");
}
```

| Kondisi     | Output                             |
| ----------- | ---------------------------------- |
| `age >= 18` | "Anda diperbolehkan memilih"       |
| `age < 18`  | "Anda tidak diperbolehkan memilih" |

---

## If-Else If Statement

Digunakan untuk memeriksa beberapa kondisi secara berurutan. Blok kode pertama yang kondisinya **true** akan dijalankan, dan eksekusi akan berhenti setelah itu.

### Contoh:

```javascript
let nilai = 35;
if (nilai >= 90) {
  console.log("Nilai: A");
} else if (nilai >= 80) {
  console.log("Nilai: B");
} else if (nilai >= 70) {
  console.log("Nilai: C");
} else {
  console.log("Nilai: D");
}
```

| Kondisi       | Output     |
| ------------- | ---------- |
| `nilai >= 90` | "Nilai: A" |
| `nilai >= 80` | "Nilai: B" |
| `nilai >= 70` | "Nilai: C" |
| `nilai < 70`  | "Nilai: D" |

---

## Nested If-Else (If-Else Bertingkat)

`Nested If-Else` adalah struktur di mana pernyataan `if-else` ditempatkan di dalam blok `if-else` lainnya. Ini digunakan untuk memeriksa kondisi yang lebih kompleks.

### Contoh:

```javascript
let num = 10;
if (num > 0) {
  if (num % 2 == 0) {
    console.log("Angka ini positif dan bilangan genap");
  } else {
    console.log("Angka ini positif dan bilangan ganjil");
  }
} else {
  console.log("Angka ini negatif");
}
```

| Kondisi                   | Output                                  |
| ------------------------- | --------------------------------------- |
| `num > 0 && num % 2 == 0` | "Angka ini positif dan bilangan genap"  |
| `num > 0 && num % 2 != 0` | "Angka ini positif dan bilangan ganjil" |
| `num <= 0`                | "Angka ini negatif"                     |

---

## Tips dan Catatan

1. **Pentingnya Urutan Kondisi**:

   - Pastikan kondisi yang lebih spesifik ditempatkan sebelum kondisi yang lebih umum.

2. **Menghindari Nested If-Else yang Berlebihan**:

   - Gunakan pendekatan lain seperti `switch` jika logika terlalu kompleks.

3. **Ternary Operator untuk Kondisi Sederhana**:

   - Gunakan operator ternary untuk kondisi sederhana:

   ```javascript
   let age = 18;
   let status = age >= 18 ? "Dewasa" : "Anak-anak";
   console.log(status);
   ```

---

## Kesimpulan

`If-Else Statement` adalah salah satu cara utama untuk mengontrol alur program berdasarkan kondisi. Dengan memahami dan menggunakan struktur ini, Anda dapat membuat logika program yang lebih fleksibel dan dinamis.
