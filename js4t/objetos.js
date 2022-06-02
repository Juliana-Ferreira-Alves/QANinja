// var album = {
//     titulo: "Black Album",
//     lancamento: 1991,
//     showInfo: function(){
//         console.log(`Titulo do album: ${this.titulo}, lançado em ${this.lancamento}`)
//     }
// }

var album = new Object();

album.titulo = 'Black Album';
album.lancamento = 1991;
album.showInfo = function(){
    console.log(`Titulo do album: ${this.titulo}, lançado em ${this.lancamento}`)
}

album.showInfo();
console.log(album.titulo);
console.log(album.lancamento);


album.faixa = ['Enter Sandman', 'The Unforgiven', 'Nothing Else Matters', ' The Struggle Within']
album.showFaixa = function(){
    this.faixa.forEach(function(value, key){
        console.log(value)
    })
}

album.showFaixa();