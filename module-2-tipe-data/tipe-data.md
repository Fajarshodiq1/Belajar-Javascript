# Materi Tipe Data di JavaScript

Di JavaScript, tipe data dikelompokkan menjadi dua kelompok utama, yaitu **Tipe Data Primitif** dan **Tipe Data Referensi**.

---

## Tipe Data Primitif

| Tipe Data | Deskripsi                                                                                       | Contoh                                  |
| --------- | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| String    | Merupakan urutan karakter yang digunakan untuk menyimpan dan memanipulasi teks.                 | `const nama = "Ujang";`                 |
| Number    | Digunakan untuk menyimpan nilai numerik, termasuk bilangan bulat (integer) dan desimal (float). | `const umur = 24;`                      |
| Boolean   | Digunakan untuk mengecek kondisi yang hasilnya berupa `true` atau `false`.                      | `let isMaried = true;`                  |
| Undefined | Nilai yang secara otomatis diberikan kepada variabel yang belum diinisialisasi.                 | `let x;`                                |
| Null      | Nilai yang secara eksplisit diberikan untuk menunjukkan bahwa variabel tidak memiliki nilai.    | `const person = null;`                  |
| Symbol    | (ES6+) Tipe data unik dan immutable, digunakan sebagai identifier unik untuk properti objek.    | `const Symbol1 = Symbol("desc 1");`     |
| BigInt    | Digunakan untuk merepresentasikan angka yang sangat besar melebihi batas tipe data `Number`.    | `const bigInt1 = 1314135346347645745n;` |

### Penggabungan String dengan Template Literal

Menggunakan `${}` di dalam backtick `` untuk menggabungkan variabel dengan string secara dinamis.

```javascript
const output = `saya ${nama} berasal dari ${negara} saya tinggal di kota ${asal}`;
document.writeln(output);
```

---

## Tipe Data Referensi

| Tipe Data | Deskripsi                                                                                | Contoh                                          |
| --------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Object    | Tipe data kompleks yang digunakan untuk menyimpan koleksi data dalam pasangan key-value. | `const orang = { nama: "jamal", umur: 26 };`    |
| Array     | Jenis objek yang menyimpan koleksi data berurutan dan dapat diakses melalui indeks.      | `const hoby = ["basket", "berenang"];`          |
| Function  | Blok kode yang dapat digunakan kembali, yang juga dianggap sebagai objek di JavaScript.  | `function helloGuys() { return "Hello Guys"; }` |

### Representasi Objek di Web

Gunakan `JSON.stringify()` untuk menampilkan objek di halaman web.

```javascript
const orang = {
  nama: "jamal",
  umur: 26,
  negara: "indonesia",
};
console.log(orang);
document.writeln(JSON.stringify(orang));
```

---

## Perbedaan Tipe Data Primitif dan Referensi

| Kategori          | Tipe Data Primitif                             | Tipe Data Referensi                               |
| ----------------- | ---------------------------------------------- | ------------------------------------------------- |
| Penyimpanan Nilai | Menyimpan nilai langsung di dalam variabel.    | Menyimpan referensi ke lokasi memori.             |
| Contoh Tipe Data  | String, Number, Boolean, Undefined, Null, etc. | Object, Array, Function.                          |
| Sifat             | Immutable (tidak dapat diubah).                | Mutable (dapat diubah).                           |
| Perubahan Nilai   | Tidak memengaruhi variabel lain.               | Perubahan melalui referensi memengaruhi semuanya. |

### Contoh Primitif

```javascript
let a = 10;
let b = a; // b menyimpan salinan nilai a

a = 20; // Mengubah nilai a tidak memengaruhi b
console.log(b); // Output: 10
```

### Contoh Referensi

```javascript
let person2 = { nama: "jamal" };
let person3 = person2; // person3 menyimpan referensi yang sama dengan person2

person2.nama = "budi"; // Mengubah nilai di person2
console.log(person3); // Output: { nama: "budi" }
```

---

## Kesimpulan

1. **Tipe Data Primitif**: String, Number, Boolean, Undefined, Null, Symbol, BigInt.

   - Digunakan untuk menyimpan nilai sederhana.
   - Bersifat immutable (tidak dapat diubah).

2. **Tipe Data Referensi**: Object, Array, Function.

   - Digunakan untuk menyimpan struktur data yang kompleks.
   - Bersifat mutable (dapat diubah).

3. **Representasi di Web**:
   - Gunakan `JSON.stringify()` untuk menampilkan objek atau array di halaman web.
   - Gunakan `document.writeln()` untuk mencetak string atau hasil fungsi sederhana.

---

Untuk informasi lebih lanjut, kunjungi:
[Tricky JavaScript Problems](https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/Javascript/Tricky-JS-Problems/typeof-null-why-its-object.md)
