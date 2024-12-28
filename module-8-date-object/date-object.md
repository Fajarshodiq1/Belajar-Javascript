# Date Object

`Date` adalah objek bawaan JavaScript yang digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal serta waktu.

## Membuat Date Object

Berikut adalah beberapa cara untuk membuat objek `Date`:

### 1. **Tanggal dan Waktu Saat Ini**

```javascript
let now = new Date();
console.log(now);
```

Contoh output:

```
2024-12-28T10:30:00.000Z
```

### 2. **Menggunakan String**

```javascript
let specificDate = new Date("August 20, 2024 10:30:00");
console.log(specificDate);
```

### 3. **Menggunakan Parameter**

```javascript
let customDate = new Date(2024, 11, 28, 10, 30); // Bulan dimulai dari 0
console.log(customDate);
```

| Parameter   | Deskripsi                                 |
| ----------- | ----------------------------------------- |
| `tahun`     | Tahun (wajib).                            |
| `bulan`     | Bulan (0 = Januari, 11 = Desember).       |
| `tanggal`   | Hari dalam bulan (opsional, default = 1). |
| `jam`       | Jam (opsional, default = 0).              |
| `menit`     | Menit (opsional, default = 0).            |
| `detik`     | Detik (opsional, default = 0).            |
| `milidetik` | Milidetik (opsional, default = 0).        |

---

## Mengambil Informasi Tanggal dan Waktu

Berikut adalah metode yang digunakan untuk mendapatkan informasi dari `Date`:

```javascript
let today = new Date();

console.log(today.getFullYear()); // Tahun (misal: 2024)
console.log(today.getMonth()); // Bulan (0 = Januari)
console.log(today.getDate()); // Tanggal dalam bulan
console.log(today.getDay()); // Hari dalam minggu (0 = Minggu, 6 = Sabtu)
console.log(today.getHours()); // Jam (format 24 jam)
console.log(today.getMinutes()); // Menit
console.log(today.getSeconds()); // Detik
console.log(today.getMilliseconds()); // Milidetik
console.log(today.getTime()); // Milidetik sejak 1 Januari 1970
```

| Metode              | Keterangan                                  |
| ------------------- | ------------------------------------------- |
| `getFullYear()`     | Mendapatkan tahun (4 digit).                |
| `getMonth()`        | Mendapatkan bulan (0 = Januari).            |
| `getDate()`         | Mendapatkan tanggal dalam bulan.            |
| `getDay()`          | Mendapatkan hari dalam minggu (0 = Minggu). |
| `getHours()`        | Mendapatkan jam (format 24 jam).            |
| `getMinutes()`      | Mendapatkan menit.                          |
| `getSeconds()`      | Mendapatkan detik.                          |
| `getMilliseconds()` | Mendapatkan milidetik.                      |
| `getTime()`         | Mendapatkan waktu dalam milidetik.          |

---

## Mengatur Tanggal dan Waktu

Anda dapat mengubah nilai tanggal dan waktu dengan metode berikut:

```javascript
let date = new Date();

// Mengatur tahun menjadi 2025
date.setFullYear(2025);

// Mengatur bulan menjadi Februari
date.setMonth(1);

// Mengatur tanggal menjadi 29
date.setDate(29);

console.log(date);
```

| Metode              | Keterangan                                           |
| ------------------- | ---------------------------------------------------- |
| `setFullYear()`     | Mengatur tahun.                                      |
| `setMonth()`        | Mengatur bulan (0 = Januari).                        |
| `setDate()`         | Mengatur tanggal dalam bulan.                        |
| `setHours()`        | Mengatur jam (format 24 jam).                        |
| `setMinutes()`      | Mengatur menit.                                      |
| `setSeconds()`      | Mengatur detik.                                      |
| `setMilliseconds()` | Mengatur milidetik.                                  |
| `setTime()`         | Mengatur waktu dalam milidetik sejak 1 Januari 1970. |

---

## Perhitungan Waktu dengan `Date`

Anda dapat melakukan perhitungan antara dua tanggal.

### Contoh:

```javascript
let startDate = new Date(2024, 11, 28, 10, 30);
let endDate = new Date(2025, 11, 28, 10, 30);

let diff = endDate - startDate; // Selisih dalam milidetik
console.log(diff);

let diffInDays = diff / (1000 * 3600 * 24); // Konversi ke hari
console.log(diffInDays);
```

| Perhitungan            | Keterangan                         |
| ---------------------- | ---------------------------------- |
| Milidetik per detik    | `1000`                             |
| Detik per menit        | `60`                               |
| Menit per jam          | `60`                               |
| Jam per hari           | `24`                               |
| Rumus konversi ke hari | `(milidetik) / (1000 * 3600 * 24)` |

---

## Tips Tambahan

- **Format Manual:** Jika ingin format tanggal khusus (misalnya `dd-mm-yyyy`), Anda bisa menggunakan metode manual:

```javascript
let today = new Date();
let day = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth() + 1).padStart(2, "0");
let year = today.getFullYear();
let formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate); // Contoh: 28-12-2024
```

- **Menggunakan Library:** Untuk kebutuhan format yang kompleks, gunakan library seperti [Day.js](https://day.js.org/) atau [date-fns](https://date-fns.org/).

---

## Kesimpulan

`Date` object sangat berguna untuk bekerja dengan tanggal dan waktu di JavaScript. Dengan memahami metode bawaan dan penggunaannya, Anda dapat dengan mudah mengatur dan memanipulasi waktu sesuai kebutuhan aplikasi Anda.
