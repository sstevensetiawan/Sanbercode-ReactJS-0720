//Soal 1
let luasLingkaran = (radius) => { 
    return 3.14*Math.pow(radius,2)
};
console.log("Luas Lingkaran : " + luasLingkaran(7));

let kelilingLingkaran = (radius) => { 
    return 3.14*2*radius
};
console.log("Keliling Lingkaran : " + kelilingLingkaran(7));

//Soal 2
let combineWord = (kata1,kata2,kata3,kata4,kata5) => { 
    return `${kata1} ${kata3} ${kata3} ${kata4} ${kata5}`
};
console.log(combineWord("saya","adalah","seorang","frontend","developer"))

//Soal 3
class Book {
    constructor(namaBuku, page, price) {
      this.name = namaBuku;
      this.totalPage = page;
      this.price = price;
    }
}

class Komik extends Book{
    constructor(namaBuku, page, price ,colorful){
        super(namaBuku,page,price);
        this.isColorful=colorful;
    }
}

bukuKomik = new Komik("Doraemon",35,15.000,false);
console.log(bukuKomik)
  
