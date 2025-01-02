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
let kali = function (a, b) {
  return a * b;
};
console.log(kali(3, 5));
```

### 3. Arrow Function

Sintaks singkat untuk menulis function expression, diperkenalkan di ES6.

```javascript
let tambah = (a, b) => {
  return a + b;
};
console.log(tambah(3, 5));

let bagi = (a, b) => a / b; // Menghilangkan scope atau {} untuk meringkas kode namun hanya boleh dilakukan jika memiliki satu pernyataan saja
console.log(bagi(6, 2));
```

### 4. IIFE (Immediately Invoked Function Expressions)

IIFE adalah function yang dipanggil langsung setelah dibuat. Ini berguna untuk mengisolasi variabel dan mencegahnya mengganggu kode lain.

```javascript
(function () {
  console.log("IFFE dipanggil");
})();

const appConfig = (function () {
  const apiKey = "1234";
  const apiUrl = "https://api.example.com";

  return {
    getApiKey: function () {
      return apiKey;
    },
    getApiUrl: function () {
      return apiUrl;
    },
  };
})();
console.log(appConfig.getApiKey());
```

## High-Order Function dan Callback Function

### High-Order Function

Higher-order functions adalah function yang menerima function lain sebagai argumen atau mengembalikan function lain sebagai hasil.

### Callback Function

Callback function adalah function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut.

### Contoh:

```javascript
function selesaikanTugas(tugas, callback) {
  // High-Order Function
  console.log(`menyelesaikan tugas: ${tugas}`);
  callback();
}

function tugasSelesai() {
  // Callback Function
  console.log("tugas selesai");
}

selesaikanTugas("Belajar JavaScript", tugasSelesai);
```

## Tabel Perbandingan Jenis Function

| **Jenis Function** | **Ciri-Ciri**                                                 |
| ------------------ | ------------------------------------------------------------- |
| Function Deklarasi | Dapat dipanggil sebelum dideklarasikan.                       |
| Function Ekspresi  | Tidak dapat dipanggil sebelum dideklarasikan.                 |
| Arrow Function     | Sintaks lebih ringkas, tidak memiliki konteks `this` sendiri. |

---

Dengan memahami konsep ini, Anda dapat menulis kode JavaScript yang lebih modular dan mudah dipelihara.
