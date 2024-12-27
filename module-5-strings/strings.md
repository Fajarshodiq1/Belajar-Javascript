# Strings di JavaScript

Strings adalah tipe data yang digunakan untuk merepresentasikan teks. Strings dapat digunakan untuk menyimpan dan memanipulasi teks di JavaScript.

---

## Mengakses Karakter dalam String

Karakter dalam string dapat diakses menggunakan indeks. Indeks dimulai dari 0.

### Contoh Kode

```javascript
let str = "javascript";
console.log(str[1]); // Output: "a"
```

---

## Properti dan Method pada String

### Properti

| Properti  | Deskripsi                 | Contoh                | Hasil |
| --------- | ------------------------- | --------------------- | ----- |
| `.length` | Menghitung panjang string | `"javascript".length` | `10`  |

### Contoh Kode

```javascript
let str = "javascript";
console.log(str.length); // Output: 10
```

### Method

| Method                          | Deskripsi                                       | Contoh                                    | Hasil           |
| ------------------------------- | ----------------------------------------------- | ----------------------------------------- | --------------- |
| `.toUpperCase()`                | Mengubah string menjadi huruf kapital           | `"javascript".toUpperCase()`              | `"JAVASCRIPT"`  |
| `.trim()`                       | Menghapus spasi di awal dan akhir string        | `"   javascript   ".trim()`               | `"javascript"`  |
| `.slice(start, end)`            | Mengambil bagian tertentu dari string           | `"javascript".slice(0, 4)`                | `"java"`        |
| `.substring(start, end)`        | Mirip dengan slice, tetapi tanpa indeks negatif | `"javascript".substring(4, 7)`            | `"scr"`         |
| `.replace(search, replacement)` | Mengganti bagian string                         | `"hello, world".replace("world", "guys")` | `"hello, guys"` |
| `.split(separator, limit)`      | Memecah string menjadi array                    | `"a b c".split(" ", 2)`                   | `["a", "b"]`    |
| `.includes(substring)`          | Mengecek apakah substring ada dalam string      | `"hello".includes("ll")`                  | `true`          |
| `.indexOf(substring)`           | Mengembalikan indeks pertama substring          | `"hello".indexOf("l")`                    | `2`             |
| `.lastIndexOf(substring)`       | Mengembalikan indeks terakhir substring         | `"hello".lastIndexOf("l")`                | `3`             |

---

## Manipulasi String

### Concatenation (Penggabungan String)

String dapat digabungkan menggunakan operator `+` atau template literals.

#### Contoh Kode

```javascript
let fname = "alpha";
let lname = "beta";

// Menggunakan +
let result = fname + " " + lname;
console.log(result); // Output: "alpha beta"

// Menggunakan template literals
let result2 = `${fname} ${lname}`;
console.log(result2); // Output: "alpha beta"
```

### Menggabungkan Data Array menjadi String

Array dapat digabungkan menjadi string menggunakan method `.join()`.

#### Contoh Kode

```javascript
const arr = ["halo", "saya", "dari", "array"];
console.log(arr.join(" ")); // Output: "halo saya dari array"
```

### Mengubah String menjadi Array

String dapat dipecah menjadi array menggunakan method `.split()`.

#### Contoh Kode

```javascript
const str = "hallo saya dari string";
console.log(str.split(" ", 2)); // Output: ["hallo", "saya"]
```

---

## Pencarian dalam String

JavaScript menyediakan beberapa metode untuk mencari teks dalam string.

| Method                    | Deskripsi                                  | Contoh                     | Hasil  |
| ------------------------- | ------------------------------------------ | -------------------------- | ------ |
| `.indexOf(substring)`     | Mengembalikan indeks pertama substring     | `"hello".indexOf("l")`     | `2`    |
| `.lastIndexOf(substring)` | Mengembalikan indeks terakhir substring    | `"hello".lastIndexOf("l")` | `3`    |
| `.includes(substring)`    | Mengecek apakah substring ada dalam string | `"hello".includes("ll")`   | `true` |

#### Contoh Kode

```javascript
let sentece = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

let index = sentece.indexOf("ipsum");
console.log(index); // Output: 6

let lastIndex = sentece.lastIndexOf("elit");
console.log(lastIndex); // Output: 52

let exists = sentece.includes("sit");
console.log(exists); // Output: true
```

---

## Kesimpulan

Strings di JavaScript memiliki berbagai metode dan properti yang memudahkan manipulasi teks. Dengan memahami properti dan metode yang tersedia, Anda dapat bekerja lebih efisien dengan data berbasis teks.
