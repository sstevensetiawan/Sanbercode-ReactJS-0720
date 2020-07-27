var daftarPeserta = {
    nama:"Asep", 
    jenisKelamin:"laki-laki",
    hobby:"baca buku" , 
    tahunLahir:1992
};

console.log(daftarPeserta);

var daftarBuah=[
    {
        nama:"Strawberry",
        warna:"Merah",
        adaBijinya:"tidak",
        harga:9000
    },
    {
        nama:"Jeruk",
        warna:"oranye",
        adaBijinya:"ada",
        harga:8000
    },
    {
        nama:"Semangka",
        warna:"Hijau&Merah",
        adaBijinya:"ada",
        harga:"10000"
    },
    {
        nama:"Pisang",
        warna:"Kuning",
        adaBijinya:"tidak",
        harga:"5000"
    }
];
console.log(daftarBuah[0]);

var dataFilm = [];
function addData(nama,durasi,genre,tahun){
    var film={
        nama:nama,
        durasi:durasi,
        genre:genre,
        tahun:tahun
    }
    dataFilm.push(film);
}
addData("2012", "2 Jam", "Action", "2011");
console.log(dataFilm[0]);

class Animal{
    constructor(petName){
        this.name = petName;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

class Ape extends Animal{
    constructor(petName){
        super(petName);
    }
    yell(){
        console.log("Auooo")
    }
}

class Frog extends Animal{
    constructor(petName){
        super(petName);
    }
    jump(){
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();
 
var kodok = new Frog("buduk");
kodok.jump();

class Clock {
    constructor({template}){
        this.template = template;
    }

    render(){
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        console.log(output);
    }
    stop(){
        clearInterval(this.timer);
    }
    
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  