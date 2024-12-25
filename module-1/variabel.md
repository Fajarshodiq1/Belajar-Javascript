# Materi: Variabel dalam JavaScript

Variabel adalah **wadah** untuk menyimpan data yang dapat digunakan dalam program. Di JavaScript, terdapat tiga jenis utama variabel yang sering digunakan: `var`, `let`, dan `const`. Berikut penjelasan singkat tentang perilaku masing-masing:

## 1. `var`

- Dapat diakses di luar scope tempat ia dideklarasikan (fungsi atau global).
- Mendukung redeklarasi (mendeklarasikan ulang variabel yang sama).
- Tidak memiliki block scope (hanya memiliki function scope).

**Contoh:**

```javascript
var x = 10;
if (true) {
  var x = 20; // redeklarasi
  console.log(x); // Output: 20
}
console.log(x); // Output: 20
```

## 2. `let`

- Hanya bisa diakses dalam scope tempat ia dideklarasikan (block scope).
- Tidak mendukung redeklarasi dalam scope yang sama.
- Cocok digunakan untuk variabel yang nilainya dapat berubah.

**Contoh:**

```javascript
let y = 10;
if (true) {
  let y = 20; // variabel baru dalam block scope
  console.log(y); // Output: 20
}
console.log(y); // Output: 10
```

## 3. `const`

- Hanya bisa diakses dalam scope tempat ia dideklarasikan (block scope).
- Tidak bisa di-assign ulang setelah nilai awal diberikan.
- Cocok digunakan untuk nilai tetap (konstanta).

**Contoh:**

```javascript
const z = 10;
if (true) {
  const z = 20; // variabel baru dalam block scope
  console.log(z); // Output: 20
}
console.log(z); // Output: 10

// z = 30; // Error: Assignment to constant variable
```

## Perbandingan Sederhana

| Fitur          | `var` | `let` | `const` |
| -------------- | ----- | ----- | ------- |
| Block Scope    | ❌    | ✅    | ✅      |
| Function Scope | ✅    | ✅    | ✅      |
| Redeclare      | ✅    | ❌    | ❌      |
| Reassign       | ✅    | ✅    | ❌      |

---
