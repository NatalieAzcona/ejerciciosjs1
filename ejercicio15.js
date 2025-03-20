const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

//let name = 'camiseta'

function findName(name, arr) {
    let results = [];

    for (let word of arr){
        if (word.toLowerCase().includes(name.toLowerCase())) {
            results.push([arr.indexOf(word), word])
        } 
    } 
    return results;
}
console.log(findName('camiseta', products));