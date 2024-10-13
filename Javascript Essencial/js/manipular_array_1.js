const produtos = ["Notebook", "Smartphone", "Smartwatch", "Tablet", "PlayStation 5"]

console.log(produtos);
console.table(produtos);

// adicionar um novo produto no inicio do array
produtos.unshift("Monitor Ultrawide");
console.log(produtos);

// adicionar um novo produto no final do array
produtos.push("Teclado mecânico Razer");
console.log(produtos);

//remover o primeiro produto do array
let primeiroProduto = produtos.shift();
console.log("O primeiro produto removido foi: " + primeiroProduto);
console.log(produtos);

//remover o último produto do array
let ultimoProduto = produtos.pop();
console.log("O último produto removido foi: " + ultimoProduto);
console.log(produtos);

// adicionar um novo produto no meio do array
produtos.splice(2, 0, "Tablet Apple iPad Pro", "Iphone 15");
console.log("O array agr é: " + produtos);
console.table(produtos);

// remover um produto no meio do array
produtos.splice(1, 3);
console.log("O array agora é: " + produtos);

//criar uma copia do array original
let copiaProdutos = produtos.slice();
console.log("A cópia do array é: " + copiaProdutos);

//encontrar a posição de um produto
let posicao = produtos.indexOf('Tablet');
console.log("A posição do produto é: " + posicao);

posicao = produtos.lastIndexOf('Tablet');
console.log("A posição do produto é: " + posicao);


