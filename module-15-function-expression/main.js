/* Function Expression */
/*
Selain membuat function menggunakan deklarasi (function declaration), Anda juga bisa
membuat function menggunakan ekspresi (function expression), di mana function
disimpan dalam variabel.
*/

let kali = function (a, b) {
  return a * b;
};
console.log(kali(3, 5));

/* Arrow Function */
/* Arrow function adalah cara singkat untuk menulis function expression, diperkenalkan di
ES6. */

let tambah = (a, b) => {
  return a + b;
};
console.log(tambah(3, 5));

let bagi = (a, b) => a / b; // Menghilangkan scope atau {} untuk meringkas kode namun hanya boleh dilakukan jika memiliki satu pernyataan saja
console.log(bagi(6, 2));

// IIFE(Immediately Invoked Function Expressions)
/* 
  IFFE adalah function yang dipanggil langsung setelah dibuat. Ini berguna untuk
  mengisolasi variabel dan mencegahnya mengganggu kode lain.
*/
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

// High-Order Funtion dan Callback Function
/*
  Higher-order functions adalah function yang menerima function lain sebagai argumen atau
  mengembalikan function lain sebagai hasil.
*/

/*
  Callback function adalah function yang dikirim sebagai argumen ke function lain dan
  dipanggil di dalam function tersebut
*/

function selesaikanTugas(tugas, callback) {
  // High-Order Function
  console.log(`menyelesaikan tugas: ${tugas}`);
  callback();
}

function tugasSelesai() {
  // Callback Funtion
  console.log("tugas selesai");
}

selesaikanTugas("Belajar JavaScript", tugasSelesai);
