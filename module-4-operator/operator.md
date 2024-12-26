# Operator dalam JavaScript

JavaScript menyediakan berbagai macam operator yang dapat digunakan untuk melakukan operasi pada data. Berikut adalah kategori dan penjelasan tentang operator-operator tersebut:

---

## 1. Operator Aritmatika

Digunakan untuk melakukan operasi matematika dasar.

| Operator | Deskripsi           | Contoh   | Hasil |
| -------- | ------------------- | -------- | ----- |
| `+`      | Penjumlahan         | `10 + 5` | `15`  |
| `-`      | Pengurangan         | `10 - 5` | `5`   |
| `*`      | Perkalian           | `10 * 5` | `50`  |
| `/`      | Pembagian           | `10 / 2` | `5`   |
| `%`      | Modulus (Sisa bagi) | `10 % 3` | `1`   |
| `**`     | Perpangkatan        | `2 ** 3` | `8`   |

### Contoh Kode

```javascript
let x = 10;
let y = 5;
console.log("Penjumlahan:", x + y); // 15
console.log("Pengurangan:", x - y); // 5
console.log("Perkalian:", x * y); // 50
console.log("Pembagian:", x / y); // 2
console.log("Modulus:", x % 3); // 1
console.log("Perpangkatan:", x ** 2); // 100
```

---

## 2. Operator Assignment

Digunakan untuk menetapkan atau memperbarui nilai pada variabel.

| Operator | Deskripsi                 | Contoh   | Hasil    |
| -------- | ------------------------- | -------- | -------- |
| `=`      | Penetapan nilai           | `x = 5`  | `x = 5`  |
| `+=`     | Penjumlahan dan penetapan | `x += 3` | `x = 8`  |
| `-=`     | Pengurangan dan penetapan | `x -= 2` | `x = 6`  |
| `*=`     | Perkalian dan penetapan   | `x *= 2` | `x = 12` |
| `/=`     | Pembagian dan penetapan   | `x /= 3` | `x = 4`  |
| `%=`     | Modulus dan penetapan     | `x %= 2` | `x = 0`  |

### Contoh Kode

```javascript
let x = 10;
x += 5;
console.log("Setelah +=:", x); // 15
x *= 2;
console.log("Setelah *=:", x); // 30
x -= 10;
console.log("Setelah -=:", x); // 20
```

---

## 3. Operator Perbandingan

Digunakan untuk membandingkan dua nilai dan menghasilkan nilai boolean (`true` atau `false`).

| Operator | Deskripsi                          | Contoh      | Hasil   |
| -------- | ---------------------------------- | ----------- | ------- |
| `==`     | Persamaan nilai                    | `5 == "5"`  | `true`  |
| `===`    | Persamaan nilai dan tipe data      | `5 === "5"` | `false` |
| `!=`     | Pertidaksamaan nilai               | `5 != "5"`  | `false` |
| `!==`    | Pertidaksamaan nilai dan tipe data | `5 !== "5"` | `true`  |
| `>`      | Lebih besar                        | `7 > 5`     | `true`  |
| `<`      | Lebih kecil                        | `3 < 5`     | `true`  |
| `>=`     | Lebih besar atau sama dengan       | `5 >= 5`    | `true`  |
| `<=`     | Lebih kecil atau sama dengan       | `3 <= 5`    | `true`  |

### Contoh Kode

```javascript
let a = 5;
let b = "5";
console.log("Apakah sama (==):", a == b); // true
console.log("Apakah sama tipe dan nilai (===):", a === b); // false
console.log("Lebih besar:", a > 3); // true
console.log("Lebih kecil sama dengan:", a <= 5); // true
```

---

## 4. Operator Logika

Digunakan untuk menggabungkan ekspresi logika.

| Operator | Deskripsi                | Contoh            | Hasil    |
|----------|--------------------------|-------------------|----------|
| `&&`     | AND (keduanya harus true)| `true && false`   | `false`  |
| ```||```     | OR (salah satu true)     | `true || false`   | `true`   |
| `!`      | NOT (kebalikan nilai)    | `!true`           | `false`  |

### Contoh Kode

```javascript
let a = true;
let b = false;
console.log("AND:", a && b); // false
console.log("OR:", a || b); // true
console.log("NOT:", !a); // false
```

---

## 5. Operator Ternary

Cara singkat untuk menuliskan kondisi `if-else`.

**Sintaks:**

```javascript
kondisi ? ekspresi_jika_true : ekspresi_jika_false;
```

### Contoh Kode

```javascript
let age = 17;
let canVote = age >= 18 ? "Boleh memilih" : "Belum boleh memilih";
console.log(canVote); // Belum boleh memilih
```

---
