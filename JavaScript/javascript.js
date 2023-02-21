document.write("<br>");
document.write("Erhan Yağmur <br>");

var a=prompt("Hoşgeldiniz yazdır..");
document.write(a);
console.log(a);

var sayi,mod,kalan;

sayi=prompt("Klavyeden Sayıyı Giriniz!!!");
mod=prompt("Mod Kaç?");

sayi=parseInt(sayi);
mod=parseInt(mod);

kalan=sayi%mod;

alert("Kalan: " + kalan);

