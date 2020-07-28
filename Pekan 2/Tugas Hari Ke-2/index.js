var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var time = 10000;
var ctr = 0;
function readBook(){
	readBooks(time,books[ctr],function(check) {
		ctr++;
		if(ctr<books.length){
			time = check;
			readBook();
		}
	});
}
readBook();