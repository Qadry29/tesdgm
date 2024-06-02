let arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

let angka = arr.filter(item => typeof item === "number");
let huruf = arr.filter(item => typeof item === "string");

huruf.sort();

angka.sort((a, b) => a - b);

let hasil = huruf.concat(angka);

console.info(hasil);
