(function () {
    let carrinho = '';

    function adicionarAoCarrinho(item) {
        carrinho += item + ' ';
        console.log(item + ' adicionado ao carrinho!');
    }

    function obterCarrinho() {
        return carrinho;
    }

    adicionarAoCarrinho('Livro de HTML')
    adicionarAoCarrinho('Livro de CSS')
    adicionarAoCarrinho('Livro de Javascript')
    adicionarAoCarrinho('Livro de React')

    console.log('itens no carrinho ' + obterCarrinho());
})();
console.log(`------------------------------------------------------`);

let calcularPrecoLocacao = (function () {
    let precoBasePorDia = 250;
    let precoPorKm = 2.25;

    function calcularPreco(dias, distancia){
        return(precoBasePorDia * dias) + (precoPorKm * distancia);
    }
    return calcularPreco;
})();
console.log(`Preço da locação: R$` + calcularPrecoLocacao(5,100));
console.log(`Preço da locação: R$` + calcularPrecoLocacao(3,200));
