var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var waktu = 10000;
var ctr = 0
function readBooksProm() {
	readBooksPromise(waktu,books[ctr])
        .then(function (check) {
            // console.log(check);
			ctr++;
			if(ctr<books.length){
				waktu = check;
				readBooksProm();
			}
        })
}
 
readBooksProm() 