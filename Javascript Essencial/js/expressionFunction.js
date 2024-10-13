const simularValorPassagem = function (qtdAdultos, qtdCrincas, idaVolta) {
    const PRECO_PASSAGEM = 1000;

    const valorAdulto = PRECO_PASSAGEM * qtdAdultos;
    const valorCrinca = (PRECO_PASSAGEM * qtdCrincas) * .5;

    if(idaVolta){
        return(valorAdulto + valorCrinca) * 2;
    }else{
        return valorAdulto + valorCrinca;
    }
}
let valorPassagem = simularValorPassagem(2, 3, false);
console.log(`O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`);

valorPassagem = simularValorPassagem(3, 0, true);
console.log(`O valor total das passagens será de R$ ${valorPassagem.toFixed(2)}`);
