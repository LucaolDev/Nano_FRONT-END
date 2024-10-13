function calculaDesconto(preco, porcetagemDesconto){
    const desconto = preco * (porcetagemDesconto / 100);
    return preco - desconto;
}

function calcularPrecoFinal(preco, porcetagemDesconto, callback){
    const precoFinal = callback(preco, porcetagemDesconto)
    console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
}
calcularPrecoFinal(100, 10, calculaDesconto);
calcularPrecoFinal(5670, 20, calculaDesconto);
console.log(`-------------------------------------------------------`);

function exibirHoraAtual(callback){
    setInterval(() => {
        	const agora = new Date();
        	const hora = agora.getHours();
        	const minutos = agora.getMinutes();
        	const segundos = agora.getSeconds();
        	const horaAtual = `${hora}:${minutos}:${segundos}`;
            callback(horaAtual);
    }, 1000);
}

function exibirHora(horaAtual) {
    console.log(horaAtual);
}
exibirHoraAtual(exibirHora)