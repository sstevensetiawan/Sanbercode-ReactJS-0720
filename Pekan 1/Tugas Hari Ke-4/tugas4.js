//Soal ke-1
console.log("Soal Ke-1");
console.log("LOOPING PERTAMA");
for(var i=2;i<=20;i+=2){
    console.log(String(i)+" - I love coding");
}
console.log("LOOPING KEDUA");
for(var i=20;i>=0;i-=2){
    console.log(String(i)+" - I will become a frontend developer");
}

//Soal ke-2
console.log("Soal ke-2");
for (var i=1;i<=20;i++){
    if(i%2 == 1){
        if(i%3 == 0){
            console.log(String(i)+" - I Love Coding");
        }
        else{
            console.log(String(i)+" - Santai");
        }
    }
    else{
        console.log(String(i)+" - Berkualitas");
    }
}

//Soal ke-3
console.log("Soal ke-3");
for(var i=1;i<=7;i++){
    var lala="#";
    for(var j=1;j<i;j++){
        lala=lala+"#";
    }
    console.log(lala);
}

//Soal ke-4
console.log("Soal ke-4");
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

//Soal ke-5
console.log("Soal ke-5");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(var i=0 in daftarBuah){
    console.log(daftarBuah[i]);
}