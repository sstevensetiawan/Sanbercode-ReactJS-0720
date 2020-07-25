function luasLingkaran(radius){
    return 3.14*Math.pow(radius,2);
}

function luasSegitiga(alas,tinggi){
    return 0.5*alas*tinggi;
}

function luasPersegi(width){
    return Math.pow(width,2);
}

console.log(luasLingkaran(5));
console.log(luasSegitiga(4,3));
console.log(luasPersegi(5));

var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
daftarAlatTulis.sort();
var i=0;
while(i<daftarAlatTulis.length){
    console.log(daftarAlatTulis[i])
    i++;
}

function segitiga(height){
    for(var i=height;i>0;i--){
        var temp="";
        for(var j=0;j<i;j++){
            temp+="*";
        }
        console.log(temp);
    }
}
segitiga(6);

var jenisKelamin="L";
var nama ="Steven";

if(jenisKelamin=="L"){
    console.log("Bapak "+ nama);
}
else{
    console.log("Ibu "+ nama);
}
