# Materi: Data Conversion di JavaScript

JavaScript memungkinkan kita untuk mengubah tipe data secara otomatis (implicit conversion) atau secara eksplisit (explicit conversion). Proses ini sering digunakan dalam pengembangan aplikasi untuk memastikan operasi dapat dilakukan meskipun tipe data berbeda.

---

## 1. Implicit Conversion

Implicit conversion, atau yang dikenal juga sebagai **type coercion**, adalah proses di mana JavaScript secara otomatis mengubah tipe data.

### Contoh Implicit Conversion

```javascript
// Operasi penjumlahan antara number dan string
let result = 10 + "5";
// Number akan diubah menjadi string
console.log(result, typeof result); // Output: "105" string

// Operasi pengurangan antara string dan number
let result2 = 10 - "5";
// String akan diubah menjadi number
console.log(result2, typeof result2); // Output: 5 number

// Menggunakan Falsy Value
// 0, null, undefined, dan "" dianggap sebagai falsy value
let bool = !0;
console.log(bool, typeof bool); // Output: true boolean
```

### Penjelasan Falsy Value

| Falsy Value          | Deskripsi                             |
| -------------------- | ------------------------------------- |
| `0`                  | Angka nol dianggap false.             |
| `null`               | Menunjukkan tidak ada nilai.          |
| `undefined`          | Variabel yang belum diinisialisasi.   |
| `""` (string kosong) | String tanpa karakter dianggap false. |

---

## 2. Explicit Conversion

Explicit conversion, atau yang dikenal sebagai **type casting**, adalah proses manual untuk mengubah tipe data menggunakan fungsi bawaan JavaScript.

### Contoh Explicit Conversion

```javascript
// Mengubah Number menjadi String
let num = 100;
let string = num.toString();
console.log(string, typeof string); // Output: "100" string

// Mengubah String menjadi Number menggunakan parseInt()
let string2 = "100";
let integer = parseInt(string2);
console.log(integer, typeof integer); // Output: 100 number

// Mengubah String menjadi Float menggunakan parseFloat()
let string3 = "100.134";
let floatNum = parseFloat(string3);
console.log(floatNum, typeof floatNum); // Output: 100.134 number
```

---

## Tabel Perbandingan Implicit dan Explicit Conversion

| Aspek            | Implicit Conversion                         | Explicit Conversion                                                   |
| ---------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| Definisi         | Konversi tipe data secara otomatis oleh JS. | Konversi tipe data secara manual oleh programmer.                     |
| Contoh           | `10 + "5"` menghasilkan "105" (string).     | `String(100)` menghasilkan "100" (string).                            |
| Kontrol          | Tidak sepenuhnya di bawah kontrol kita.     | Sepenuhnya di bawah kontrol programmer.                               |
| Fungsi Pendukung | Tidak ada fungsi khusus.                    | Menggunakan fungsi seperti `String()`, `Number()`, `parseInt()`, dll. |

---

## Tabel Fungsi Explicit Conversion

| Fungsi         | Input                 | Output  | Kegunaan                                                               |
| -------------- | --------------------- | ------- | ---------------------------------------------------------------------- |
| `String()`     | Number, Boolean, etc. | String  | Mengonversi tipe data lain menjadi string.                             |
| `Number()`     | String, Boolean, etc. | Number  | Mengonversi tipe data lain menjadi number (jika memungkinkan).         |
| `parseInt()`   | String                | Integer | Mengubah string menjadi integer (hanya bagian awal yang berupa angka). |
| `parseFloat()` | String                | Float   | Mengubah string menjadi angka desimal.                                 |
| `toString()`   | Number, Boolean, etc. | String  | Mengubah number atau boolean menjadi string.                           |

---

## Kesimpulan

1. **Implicit Conversion**:

   - Terjadi secara otomatis oleh JavaScript.
   - Cocok untuk kasus sederhana, tetapi bisa menimbulkan bug jika tidak dipahami.

2. **Explicit Conversion**:

   - Dilakukan secara manual menggunakan fungsi bawaan.
   - Memberikan kontrol penuh pada programmer.

3. **Falsy Value**:

   - Nilai seperti `0`, `null`, `undefined`, dan `""` dianggap false dalam konteks boolean.

4. **Gunakan Konversi dengan Bijak**:
   - Memahami kapan dan bagaimana menggunakan implicit atau explicit conversion akan membantu menghindari bug.

---
