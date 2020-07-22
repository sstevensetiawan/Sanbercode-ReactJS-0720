//soal ke-1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log("Jawaban Soal 1:");
console.log(kataPertama+" "+kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)+" "+kataKetiga+" "+kataKeempat.toUpperCase());

//soal ke-2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
console.log("Jawaban Soal 2:");
console.log(parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat));

//soal ke-3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25,31); 
console.log("Jawaban Soal 3:");
console.log('Kata Pertama: ' + kataPertama); console.log('Kata Kedua: ' + kataKedua); console.log('Kata Ketiga: ' + kataKetiga); console.log('Kata Keempat: ' + kataKeempat); console.log('Kata Kelima: ' + kataKelima);

//soal ke-4
var nilai = 0;
console.log("Jawaban Soal 4:");
if (nilai>=80){
    console.log("Nilai A");
}
else if(nilai<80 && nilai>=70){
    console.log("Nilai B");
}
else if(nilai<70 && nilai>=60){
    console.log("Nilai C");
}
else if(nilai<60 && nilai>=50){
    console.log("Nilai D");
}
else{
    console.log("Nilai E"); 
}

//soal ke-5
var tanggal = 5;
var bulan = 4;
var tahun = 1997;
var newbulan=""

switch(bulan) {
    case 1: { newbulan="Januari";break;}
    case 2: { newbulan="Februari";break; }
    case 3: { newbulan="Maret"; break; }
    case 4: { newbulan="April"; break; }
    case 5: { newbulan="Mei"; break; }
    case 6: { newbulan="Juni"; break; }
    case 7: { newbulan="Juli"; break; }
    case 8: { newbulan="Agustus"; break; }
    case 9: { newbulan="September"; break; }
    case 10: { newbulan="Oktober"; break; }
    case 11: { newbulan="November"; break; }
    case 12: { newbulan="Desember"; break; }
    default:{break;}
}
console.log("Jawaban Soal 5:");
console.log(String(tanggal)+" "+newbulan+" "+String(tahun));