var avengers = ['Tony stark', 'Clint Barton', 'Natasha Rommanoff', 'Stve Rogers', 'Bruce Banner', 'Scot Lang']
00
function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)

    })
}