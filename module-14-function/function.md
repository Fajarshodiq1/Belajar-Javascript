# Function di JavaScript

Function adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan berulang kali. Function mempermudah pengorganisasian kode dengan membagi tugas besar menjadi tugas-tugas kecil yang lebih terstruktur.

## Membuat Function

Untuk membuat function, gunakan kata kunci `function` diikuti dengan nama function, parameter (jika ada), dan blok kode yang akan dijalankan.

```javascript
function namaFunction(parameter1, parameter2, ...) {
  // Blok kode yang akan dijalankan
}
```

### Contoh Penggunaan Function

1. Dengan memberikan parameter:

```javascript
function sapaPengguna(nama) {
  console.log(`Halo, ${nama} !`);
}
```

2. Tanpa parameter:

```javascript
function sapaSemua() {
  console.log("Halo semuanya");
}
```

### Memanggil Function

Untuk menjalankan function, cukup panggil dengan menyebutkan nama function diikuti dengan tanda kurung, serta masukkan nilai untuk parameternya (jika ada).

```javascript
sapaPengguna("Budi");
sapaSemua();
```

## Parameter dan Argumen

| **Terminologi** | **Penjelasan**                                        |
| --------------- | ----------------------------------------------------- |
| Parameter       | Variabel yang didefinisikan dalam deklarasi function. |
| Argumen         | Nilai yang diberikan saat function dipanggil.         |

### Contoh:

```javascript
function tambah(a, b) {
  return a + b;
}
console.log(tambah(5, 3));
```

- **Parameter**: `a` dan `b`
- **Argumen**: `5` dan `3`

## Return Statement

Function dapat mengembalikan nilai menggunakan `return`. Setelah `return` dieksekusi, eksekusi function akan berhenti.

### Contoh:

```javascript
function kuadrat(num) {
  return num * num;
  console.log("Hello"); // Kode ini tidak akan dieksekusi
}
let result = kuadrat(4);
console.log(result);
```

| **Fitur**        | **Penjelasan**                                     |
| ---------------- | -------------------------------------------------- |
| `return`         | Mengembalikan nilai dari function ke pemanggilnya. |
| Setelah `return` | Eksekusi function dihentikan.                      |

## Jenis-Jenis Function

### 1. Function Deklarasi

Function yang didefinisikan menggunakan kata kunci `function`.

```javascript
function contohDeklarasi() {
  console.log("Ini adalah function deklarasi");
}
```

### 2. Function Ekspresi

Function yang disimpan dalam variabel.

```javascript
const contohEkspresi = function () {
  console.log("Ini adalah function ekspresi");
};
contohEkspresi();
```

### 3. Arrow Function

Sintaks singkat untuk menulis function.

```javascript
const contohArrow = (param) => {
  return `Halo, ${param}`;
};
console.log(contohArrow("Dunia"));
```

## Tabel Perbandingan Jenis Function

| **Jenis Function** | **Ciri-Ciri**                                                 |
| ------------------ | ------------------------------------------------------------- |
| Function Deklarasi | Dapat dipanggil sebelum dideklarasikan.                       |
| Function Ekspresi  | Tidak dapat dipanggil sebelum dideklarasikan.                 |
| Arrow Function     | Sintaks lebih ringkas, tidak memiliki konteks `this` sendiri. |

---

Dengan memahami konsep ini, Anda dapat menulis kode JavaScript yang lebih modular dan mudah dipelihara.
