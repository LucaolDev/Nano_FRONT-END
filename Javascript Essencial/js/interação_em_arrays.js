const produtos = ["Smatphone", "Notebook", "Smatwatch", "Tablet", "Teclado", "Mouse", "Caixa de som", "Fone de ouvido", "Webcam", "Roteador"];

console.log(produtos);

for (let i = 0; i < produtos.length; i++) {

    console.log(`Índice ${i} do Array = ${produtos[i]}`);
}
console.log("");
console.log(`------------------------------`);
for (let index in produtos) {
    console.log(`Índice: ${index} - Produto: ${produtos[index]}`);
}

console.log("");
console.log(`------------------------------`);
for (let produto of produtos) {
    console.log(`Nome do produto: ${produto.toLocaleUpperCase()}
    `);
}
console.log(' ');
console.log(`------------------------------`);
let produtoMaioQuantidade = 0;
let maiorQuantidade = 0;
produtos.forEach(function(produto){
    console.log(`${produto} - ${produto.length}`);
    if(produto.length > maiorQuantidade){
        maiorQuantidade = produto.length;
        produtoMaioQuantidade = produto;
    }
});
console.log(`Maior quantidade de caractes: ${produtoMaioQuantidade} - Total: ${maiorQuantidade} caracteres`);
