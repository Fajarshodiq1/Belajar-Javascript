# Math Object in JavaScript

`Math` adalah objek bawaan JavaScript yang menyediakan berbagai properti dan metode untuk melakukan operasi matematika.

---

## Properti Math

| Properti  | Deskripsi                                      | Contoh                                       |
| --------- | ---------------------------------------------- | -------------------------------------------- |
| `Math.PI` | Mengembalikan nilai \( \pi \) (3.14159...)     | `console.log(Math.PI); // 3.141592653589793` |
| `Math.E`  | Mengembalikan nilai konstanta Euler (2.718...) | `console.log(Math.E); // 2.718281828459045`  |

---

## Metode Math

### Operasi Matematika Umum

| Metode                | Deskripsi                                                     | Contoh                    | Hasil |
| --------------------- | ------------------------------------------------------------- | ------------------------- | ----- |
| `Math.abs(x)`         | Mengembalikan nilai absolut dari `x`.                         | `Math.abs(-7)`            | `7`   |
| `Math.pow(x, y)`      | Menghitung nilai `x` pangkat `y`.                             | `Math.pow(2, 5)`          | `32`  |
| `Math.sqrt(x)`        | Menghitung akar kuadrat dari `x`.                             | `Math.sqrt(16)`           | `4`   |
| `Math.cbrt(x)`        | Menghitung akar kubik dari `x`.                               | `Math.cbrt(27)`           | `3`   |
| `Math.max(a, b, ...)` | Mengembalikan nilai terbesar dari angka-angka yang diberikan. | `Math.max(1, 18, 12, 10)` | `18`  |
| `Math.min(a, b, ...)` | Mengembalikan nilai terkecil dari angka-angka yang diberikan. | `Math.min(1, 18, 12, 10)` | `1`   |

---

### Pembulatan Angka

| Metode          | Deskripsi                                                      | Contoh            | Hasil |
| --------------- | -------------------------------------------------------------- | ----------------- | ----- |
| `Math.round(x)` | Membulatkan angka ke nilai terdekat.                           | `Math.round(3.4)` | `3`   |
| `Math.ceil(x)`  | Membulatkan angka ke atas.                                     | `Math.ceil(4.1)`  | `5`   |
| `Math.floor(x)` | Membulatkan angka ke bawah ke bilangan bulat terdekat.         | `Math.floor(3.9)` | `3`   |
| `Math.trunc(x)` | Menghilangkan bagian desimal, hanya menyisakan bilangan bulat. | `Math.trunc(4.1)` | `4`   |

---

### Random Number

| Metode          | Deskripsi                                                      | Contoh          | Hasil                   |
| --------------- | -------------------------------------------------------------- | --------------- | ----------------------- |
| `Math.random()` | Menghasilkan angka acak antara 0 (inklusif) dan 1 (eksklusif). | `Math.random()` | 0.234567 (contoh hasil) |

---

## Contoh Kode Lengkap

```javascript
// Properti Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Operasi Matematika Umum
console.log(Math.abs(-7)); // 7
console.log(Math.pow(2, 5)); // 32
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3
console.log(Math.max(1, 18, 12, 10)); // 18

// Pembulatan Angka
console.log(Math.round(3.4)); // 3
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(3.9)); // 3
console.log(Math.trunc(4.1)); // 4

// Random Number
console.log(Math.random()); // Contoh output: 0.123456789
```

---

**Catatan:**

- `Math.random()` sering digunakan untuk membuat angka acak dalam rentang tertentu, misalnya antara 1-10:

```javascript
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Contoh output: 7
```
