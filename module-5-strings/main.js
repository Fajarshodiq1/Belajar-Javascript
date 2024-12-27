// Strings di javascript

/*



*/

// Mengakses Karakter di dalam string
let str = "javascript";
console.log(str[1]); // mengakses index yang ada pada variabel

// Properti dan Method di dalam string

// Menghitung length dari variabel
console.log(str.length);

// Merubah string ke Uppercase
console.log(str.toUpperCase()); //Dikarenakan method maka gunakan () untuk running method

let testTrim = "       javascript     ";
console.log(testTrim.trim());

// Manipulasi String

// Concate
let fname = "alpha";
let lname = "beta";
// let result = fname + " " + lname;

// concate template literals
let result = `${fname} ${lname}`;
console.log(result);

// mengambil bagian dari string
let text = "javascript";
console.log(text.slice(0, 4));
console.log(text.substring(4, 7));

// Mengganti bagian dari stirng
let replace = "hello, world";
let newReplace = replace.replace("world", "guys");
console.log(newReplace);

// Menggabungkan data array menjadi string
const arr = ["halo", "saya", "dari", "array"];
console.log(arr.join(" "));

// Mengubah string menjadi array
const strToArr = "hallo saya dari string";
console.log(strToArr.split(" ", 2)); // setiap element dapat di pisahkan oleh separator yang bebas di tentukan dan bisa menggunakan limit

// Pencarian di dalam string
// indexOf,
let sentece =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, explicabo reprehenderit in atque quas dolorum ducimus! Voluptatum ducimus excepturi doloribus earum minus repellat ut iusto error. Hic, aliquam? Delectus, aliquam.";

let index = sentece.indexOf("aliquam"); // di hitung dari index ke berapa
console.log(index);

let lastIndex = sentece.lastIndexOf("dolor"); // Index di hitung dari kata paling terakhir yang di tentukan
console.log(lastIndex);

let exists = sentece.includes("sit"); // Mengecek apakah string tersebut ada di dalam variabel atau tidak
console.log(exists); // output nya true/false
