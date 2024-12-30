# Array

`Array` adalah struktur data di JavaScript yang digunakan untuk menyimpan koleksi elemen, seperti angka, string, atau objek, dalam satu variabel. Array dapat menyimpan berbagai tipe data sekaligus dan memiliki indeks yang dimulai dari **0**.

---

## Membuat Array

Ada dua cara utama untuk membuat array di JavaScript:

### 1. **Menggunakan Notasi Array Literal**

```javascript
let fruits = ["apel", "mangga", "pisang"];
console.log(fruits);
```

### 2. **Menggunakan Syntax `new Array()`**

```javascript
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
```

| Metode                  | Contoh               | Keterangan                               |
| ----------------------- | -------------------- | ---------------------------------------- |
| Array Literal           | `["apel", "mangga"]` | Cara yang lebih singkat dan umum.        |
| Constructor `new Array` | `new Array(1, 2, 3)` | Kurang disarankan karena kurang efisien. |

---

## Mengakses Elemen Array

Elemen array diakses menggunakan indeks (dimulai dari **0**).

```javascript
let fruits = ["apel", "mangga", "pisang"];
console.log(fruits[0]); // Output: "apel"
console.log(fruits[2]); // Output: "pisang"
```

| Operasi               | Contoh                      | Hasil    |
| --------------------- | --------------------------- | -------- |
| Akses elemen          | `fruits[0]`                 | "apel"   |
| Akses elemen terakhir | `fruits[fruits.length - 1]` | "pisang" |

---

## Menambah dan Mengubah Elemen Array

Anda dapat menambah atau mengubah elemen array dengan langsung menetapkan nilai pada indeks tertentu:

```javascript
let fruits = ["apel", "mangga", "pisang"];

// Menambah elemen
fruits[3] = "strawberry";

// Mengubah elemen
fruits[0] = "durian";

console.log(fruits);
```

| Operasi  | Contoh                     | Hasil                             |
| -------- | -------------------------- | --------------------------------- |
| Menambah | `fruits[3] = "strawberry"` | Menambah elemen ke indeks ke-3.   |
| Mengubah | `fruits[0] = "durian"`     | Mengubah elemen pada indeks ke-0. |

---

## Manipulasi Array

JavaScript menyediakan berbagai metode untuk memanipulasi array:

| Metode       | Contoh                      | Keterangan                                       |
| ------------ | --------------------------- | ------------------------------------------------ |
| `push()`     | `numbers.push(4)`           | Menambahkan elemen di akhir array.               |
| `pop()`      | `numbers.pop()`             | Menghapus elemen terakhir array.                 |
| `shift()`    | `numbers.shift()`           | Menghapus elemen pertama array.                  |
| `unshift()`  | `numbers.unshift(5)`        | Menambahkan elemen di awal array.                |
| `concat()`   | `numbers.concat(numbers2)`  | Menggabungkan dua array menjadi satu.            |
| `splice()`   | `newArray.splice(0, 2, 10)` | Menghapus/menambah elemen di indeks tertentu.    |
| `indexOf()`  | `newArray.indexOf(10)`      | Mendapatkan indeks elemen tertentu.              |
| `includes()` | `newArray.includes(7)`      | Mengecek apakah elemen tertentu ada dalam array. |
| `slice()`    | `newArray.slice(2, 4)`      | Mengambil elemen dari indeks tertentu.           |

### Contoh Penggunaan:

```javascript
let numbers = [1, 2, 3];

// Menambah elemen di akhir
numbers.push(4);

// Menghapus elemen terakhir
numbers.pop();

// Menghapus elemen pertama
numbers.shift();

// Menambah elemen di awal
numbers.unshift(5);

let numbers2 = [4, 5];
let newNumbers = numbers.concat(numbers2);
console.log(newNumbers);

newNumbers.splice(0, 2, 10); // Mengubah elemen pertama dan kedua menjadi 10
console.log(newNumbers);
```

---

## Multidimensional Array (Array of Arrays)

Array dapat menyimpan array lain di dalamnya, dikenal sebagai **Multidimensional Array**.

### Contoh:

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Mengakses elemen di baris kedua, kolom ketiga
console.log(matrix[1][2]); // Output: 6
```

| Operasi               | Contoh         | Hasil |
| --------------------- | -------------- | ----- |
| Akses elemen spesifik | `matrix[1][2]` | `6`   |

---

## Tips dan Catatan

1. **Array di JavaScript Bersifat Dinamis:**

   - Anda tidak perlu menentukan ukuran array saat membuatnya.
   - Elemen dapat ditambahkan atau dihapus kapan saja.

2. **Menggunakan Loop untuk Iterasi:**

   - Gunakan loop seperti `for` atau metode seperti `forEach` untuk iterasi elemen.

   ```javascript
   let fruits = ["apel", "mangga", "pisang"];
   fruits.forEach((fruit) => console.log(fruit));
   ```

3. **Perbedaan `Array` dan Objek Lainnya:**

   - Array memiliki properti `length` dan elemen yang diakses dengan indeks numerik.
   - Gunakan `Array.isArray()` untuk mengecek apakah suatu variabel adalah array.

   ```javascript
   console.log(Array.isArray(fruits)); // true
   ```

---

## Kesimpulan

`Array` adalah salah satu struktur data paling penting di JavaScript. Dengan memahami operasi dasar seperti menambah, menghapus, dan memanipulasi elemen, Anda dapat membuat kode yang lebih efisien dan fleksibel. Pelajari metode bawaan JavaScript untuk memaksimalkan penggunaan array dalam aplikasi Anda.
