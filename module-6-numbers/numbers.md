# Numbers di JavaScript

Di JavaScript, tipe data **Number** digunakan untuk merepresentasikan angka. Angka ini bisa berupa bilangan bulat (integer), bilangan pecahan (floating point), atau bilangan khusus seperti `Infinity` dan `NaN` (Not a Number).

## Contoh Penggunaan Numbers

```javascript
let bilBulat = 26;
let bilPecahan = 26.5;
let bilNegatif = -26;
let infinityValue = Infinity;
let notANumber = NaN;
console.log(notANumber); // Output: NaN
```

## Bilangan Khusus

Berikut adalah bilangan khusus yang sering digunakan:

| Bilangan    | Deskripsi                                  | Contoh            |
| ----------- | ------------------------------------------ | ----------------- |
| `Infinity`  | Menunjukkan nilai tak hingga               | `1 / 0`           |
| `-Infinity` | Menunjukkan nilai tak hingga negatif       | `-1 / 0`          |
| `NaN`       | Menunjukkan hasil operasi yang bukan angka | `parseInt('abc')` |

## Properti pada Number

JavaScript menyediakan beberapa properti pada objek **Number** yang berguna:

| Properti                   | Deskripsi                                   | Contoh                     |
| -------------------------- | ------------------------------------------- | -------------------------- |
| `Number.MAX_VALUE`         | Nilai maksimum yang dapat direpresentasikan | `Number.MAX_VALUE`         |
| `Number.MIN_VALUE`         | Nilai minimum yang dapat direpresentasikan  | `Number.MIN_VALUE`         |
| `Number.POSITIVE_INFINITY` | Merepresentasikan nilai tak hingga positif  | `Number.POSITIVE_INFINITY` |
| `Number.NEGATIVE_INFINITY` | Merepresentasikan nilai tak hingga negatif  | `Number.NEGATIVE_INFINITY` |
| `Number.NaN`               | Merepresentasikan nilai bukan angka (NaN)   | `Number.NaN`               |

Contoh penggunaan properti:

```javascript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.NaN); // Output: NaN
```

## Metode pada Number

Berikut adalah metode bawaan yang dapat digunakan pada angka:

| Metode          | Deskripsi                                                          | Contoh                     | Hasil    |
| --------------- | ------------------------------------------------------------------ | -------------------------- | -------- |
| `toString()`    | Mengubah angka menjadi string                                      | `(123).toString()`         | `'123'`  |
| `toFixed()`     | Mengubah angka menjadi string dengan jumlah digit desimal tertentu | `(3.14159).toFixed(2)`     | `'3.14'` |
| `toPrecision()` | Mengubah angka menjadi string dengan panjang total tertentu        | `(3.14159).toPrecision(3)` | `'3.14'` |
| `parseInt()`    | Mengubah string menjadi bilangan bulat (integer)                   | `parseInt('123.45')`       | `123`    |
| `parseFloat()`  | Mengubah string menjadi bilangan pecahan (float)                   | `parseFloat('123.45')`     | `123.45` |

Contoh penggunaan metode:

```javascript
let num = 433.4;
let str = num.toString();
console.log(str, typeof str); // Output: '433.4', 'string'

let floating = 3.1352532;
console.log(floating.toFixed(2)); // Output: '3.14'

let str2 = "123.12";
let int = parseInt(str2);
console.log(int); // Output: 123
```

## Pencarian Nilai

Metode pencarian sering digunakan untuk mengetahui posisi angka atau string tertentu:

| Metode          | Deskripsi                                      | Contoh                         | Hasil  |
| --------------- | ---------------------------------------------- | ------------------------------ | ------ |
| `indexOf()`     | Mengembalikan indeks pertama kemunculan nilai  | `"12345".indexOf("3")`         | `2`    |
| `lastIndexOf()` | Mengembalikan indeks terakhir kemunculan nilai | `"123451234".lastIndexOf("3")` | `7`    |
| `includes()`    | Mengecek apakah nilai ada dalam string         | `"12345".includes("3")`        | `true` |

Contoh penggunaan:

```javascript
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // Output: true
```

Dengan menggunakan fitur-fitur ini, manipulasi angka dalam JavaScript menjadi lebih mudah dan fleksibel.
