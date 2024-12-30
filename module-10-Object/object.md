# Object

`Object` adalah tipe data di JavaScript yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah `Object` terdiri dari pasangan antara **key** dan **value** (bisa disebut juga properti).

---

## Membuat Object

Ada dua cara utama untuk membuat objek di JavaScript:

### 1. **Menggunakan Object Literal**

```javascript
let mobil = {
  merek: "toyota",
  model: "avanza",
  tahun: 2014,
};
console.log(mobil);
```

### 2. **Menggunakan Constructor `new Object()`**

```javascript
let buku = new Object();
buku.judul = "Belajar JavaScript";
buku.penulis = "Lorem Ipsum";
console.log(buku);
```

| Metode                   | Contoh           | Keterangan                               |
| ------------------------ | ---------------- | ---------------------------------------- |
| Object Literal           | `{ key: value }` | Cara yang lebih singkat dan umum.        |
| Constructor `new Object` | `new Object()`   | Kurang disarankan karena kurang efisien. |

---

## Mengakses Properti Object

Ada dua cara utama untuk mengakses properti dalam object:

### 1. **Notasi Titik (Dot Notation)**

```javascript
let mahasiswa = {
  nama: "Fajar",
  umur: 22,
  nim: 2210221,
};
console.log(mahasiswa.nama); // Output: Fajar
```

### 2. **Notasi Kurung (Bracket Notation)**

```javascript
let mahasiswa = {
  nama: "Fajar",
  "jurusan mahasiswa": "Sistem Informasi",
};
console.log(mahasiswa["jurusan mahasiswa"]); // Output: Sistem Informasi
```

| Metode           | Contoh       | Keterangan                                              |
| ---------------- | ------------ | ------------------------------------------------------- |
| Dot Notation     | `obj.key`    | Mudah digunakan jika key tidak memiliki spasi.          |
| Bracket Notation | `obj["key"]` | Digunakan jika key memiliki spasi atau karakter khusus. |

---

## Menambah dan Mengubah Properti

### 1. **Menambah Properti**

```javascript
let mahasiswa = {
  nama: "Fajar",
};
mahasiswa.alamat = "Jakarta"; // Menambahkan properti baru
console.log(mahasiswa);
```

### 2. **Mengubah Properti**

```javascript
mahasiswa.nama = "Jamal"; // Mengubah properti yang ada
console.log(mahasiswa);
```

| Operasi  | Contoh               | Hasil                             |
| -------- | -------------------- | --------------------------------- |
| Menambah | `obj.newKey = value` | Menambahkan properti baru.        |
| Mengubah | `obj.key = newValue` | Mengubah nilai properti yang ada. |

---

## Menghapus Properti

Gunakan kata kunci `delete` untuk menghapus properti dalam object.

```javascript
delete mahasiswa.alamat;
console.log(mahasiswa);
```

| Operasi   | Contoh           | Hasil                        |
| --------- | ---------------- | ---------------------------- |
| Menghapus | `delete obj.key` | Menghapus properti tertentu. |

---

## Nested Object (Objek Bersarang)

Object dapat menyimpan objek lain di dalamnya, yang disebut sebagai **nested object**.

```javascript
let univ = {
  nama: "ITB",
  fakultas: {
    fakultas_1: "Fakultas Teknik",
    jurusan: "Teknik Informatika",
  },
};
console.log(univ.fakultas.jurusan); // Output: Teknik Informatika
```

| Operasi                 | Contoh              | Hasil                                             |
| ----------------------- | ------------------- | ------------------------------------------------- |
| Mengakses nested object | `obj.nestedObj.key` | Mendapatkan nilai properti dalam objek bersarang. |

---

## Destructuring Object

`Destructuring` adalah cara untuk mengambil nilai dari object dan menyimpannya ke dalam variabel secara langsung.

```javascript
let mahasiswa = {
  nama: "Fajar",
  umur: 22,
};

let { nama, umur } = mahasiswa;
console.log(`${nama} umur ${umur}`); // Output: Fajar umur 22
```

| Operasi       | Contoh              | Hasil                        |
| ------------- | ------------------- | ---------------------------- |
| Destructuring | `let { key } = obj` | Mengambil nilai dari object. |

---

## Tips dan Catatan

1. **Object vs Array:**

   - Gunakan objek jika data memiliki properti dengan nama unik.
   - Gunakan array jika data adalah daftar elemen dengan tipe serupa.

2. **Menggunakan Loop untuk Iterasi Properti:**

   - Gunakan `for...in` untuk iterasi properti object.

   ```javascript
   let mahasiswa = {
     nama: "Fajar",
     umur: 22,
   };

   for (let key in mahasiswa) {
     console.log(`${key}: ${mahasiswa[key]}`);
   }
   ```

3. **Cek Keberadaan Properti:**

   - Gunakan operator `in` untuk mengecek apakah sebuah properti ada dalam object.

   ```javascript
   console.log("nama" in mahasiswa); // true
   ```

---

## Kesimpulan

`Object` adalah salah satu tipe data dasar yang sangat penting di JavaScript. Dengan memahami cara membuat, mengakses, dan memanipulasi objek, Anda dapat mengelola data dengan lebih efisien dan terstruktur.
