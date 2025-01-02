# Looping dalam JavaScript

Loop digunakan untuk menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi. JavaScript mendukung beberapa jenis loop: `for`, `while`, dan `do-while`. Setiap jenis loop memiliki kegunaannya sendiri, tergantung pada kebutuhan.

## Jenis-Jenis Looping

### 1. For Loop

`for` loop digunakan ketika jumlah iterasi sudah diketahui.

#### Sintaks Dasar

```javascript
for (inisialisasi; kondisi; perubahan) {
  // kode yang dijalankan selama kondisi benar
}
```

- **Inisialisasi**: Nilai awal variabel loop.
- **Kondisi**: Kondisi yang harus benar supaya loop terus berjalan.
- **Perubahan**: Perubahan yang terjadi pada variabel loop setiap iterasi.

#### Contoh Penggunaan

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}
```

### 2. While Loop

`while` loop menjalankan kode selama kondisi tetap benar. Loop ini berguna ketika jumlah iterasi tidak pasti dan bergantung pada kondisi tertentu.

#### Sintaks Dasar

```javascript
while (kondisi) {
  // kode yang akan dijalankan selama kondisi benar
}
```

#### Contoh Penggunaan

```javascript
let i = 1;
while (i <= 5) {
  console.log(`Iterasi ke-${i}`);
  i++;
}
```

### 3. Do-While Loop

`do-while` loop selalu menjalankan kode setidaknya satu kali, karena kondisi diperiksa setelah blok kode dieksekusi.

#### Sintaks Dasar

```javascript
do {
  // kode yang dijalankan
} while (kondisi);
```

#### Contoh Penggunaan

```javascript
let i = 1;
do {
  console.log(`Iterasi ke-${i}`);
  i++;
} while (i <= 5);
```

### 4. For-in Loop

Digunakan untuk mengiterasi properti objek atau indeks array.

#### Contoh Penggunaan

```javascript
const objek = { nama: "John", umur: 31 };
for (let properti in objek) {
  console.log(`${properti}: ${objek[properti]}`);
}
```

### 5. For-of Loop

Digunakan untuk mengiterasi elemen dalam iterable seperti array atau string.

#### Contoh Penggunaan

```javascript
const arr = [1, 2, 3, 4, 5];
for (let nilai of arr) {
  console.log(nilai);
}
```

## Tabel Perbandingan Looping

| Jenis Loop | Kegunaan                         | Kondisi Diperiksa | Contoh Use Case                  |
| ---------- | -------------------------------- | ----------------- | -------------------------------- |
| For        | Iterasi dengan jumlah pasti      | Sebelum iterasi   | Menghitung bilangan 1-100        |
| While      | Iterasi dengan kondisi fleksibel | Sebelum iterasi   | Menunggu input user              |
| Do-While   | Eksekusi minimal satu kali       | Setelah iterasi   | Validasi input minimal satu kali |
| For-in     | Iterasi properti objek           | Tidak berlaku     | Iterasi properti objek JSON      |
| For-of     | Iterasi elemen iterable          | Tidak berlaku     | Iterasi elemen array atau string |

Dengan memahami berbagai jenis loop ini, Anda dapat memilih metode yang paling efisien sesuai kebutuhan program Anda.
