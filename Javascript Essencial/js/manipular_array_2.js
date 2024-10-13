const produtos = ["Notebook", "Smartphone", "Smartwatch", "Tablet", "PlayStation 5"];
console.table(produtos);

const produtos2 = ['Iphone 14', 'Xbox', 'Atari'];
console.table(produtos2);

// concat junta arrays 
const novosProdutos = produtos.concat(produtos2);
console.table(novosProdutos);

// sort ordena o array em ordem alfabética 
novosProdutos.sort();
console.table(novosProdutos);

// reverse deixa o array na ordem inversa
novosProdutos.reverse();
console.table(novosProdutos);

// join tranforma o array em uma string
let novosProdutosString = novosProdutos.join(" ");
console.log("A strig criada é " + novosProdutosString);

//includes verifica a existencia de um item no array
let existe = novosProdutos.includes("Smartwatch")
console.log("O produto existe no array? " + existe)
existe = novosProdutos.includes("Mouse Redragon")
console.log("O produto existe no array? " + existe)

// every verifica se todos os produtos contem algo semelhante
let todosComLetraA = novosProdutos.every(novosProdutos => {
    return novosProdutos.includes('A');
});
console.log("Todos os produtos tem a letra A? " + todosComLetraA);

// verifica se pelo menos um produto tem 10 caracteres
let total = 0;
const tamanhoMaximo10 = novosProdutos.some((novosProdutos) => {
return novosProdutos.length <= 10;
});
console.log(tamanhoMaximo10);

// find retorna o preimeiro produto que tenha mais de 6 caracteres
const tamanhoMaior6 = novosProdutos.find((novosProdutos) => {
    return novosProdutos.length > 6;
});
console.log(tamanhoMaior6);
console.log(novosProdutos);

