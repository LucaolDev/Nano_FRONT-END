const produtos = ["Notebook", "Smartphone", "Smartwatch", "Tablet", "PlayStation 5"];
const precos = [6800, 6700, 3500, 6300, 5400];

console.log(produtos);
console.log(precos);

// filter
const produtosComSmart = produtos.filter((produtos) => {
    return produtos.includes("Smart");
})
console.log(produtosComSmart);

// filter buscando preços maiores que 5500
const precosMaiores = precos.filter((precos) => {
    return precos > 5500;
});
console.log(precosMaiores);

// map Aplica um função a cada elemento de array e retorna a um novo array 
const produtosEmMaiuscula = produtos.map((produtos) => {
    return produtos.toUpperCase();
});
console.log(produtosEmMaiuscula);

// map Aplica um desconto de 10%
const precosDesconto = precos.map((precos) =>{
    return precos - precos * .10;
});
console.log(precosDesconto);

//reduce retorna um único valor
const totalLetrasProdutos = produtos.reduce((acumulador, produtos) =>{
    return acumulador + produtos.length;
}, 0);
console.log(totalLetrasProdutos);

// valor do estoque
const totalValores = precos.reduce((acumulador, precos) => {
    return acumulador + precos;
}, 0)
console.log(totalValores);