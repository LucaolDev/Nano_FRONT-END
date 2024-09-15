const usuario = prompt("Digite seu usuário: ");
const senha = prompt("Digite sua senha: ");

if (usuario === "user" && senha === "123") {
    console.log("Login efetuado com sucesso!");

    const numeroProduto = Math.floor(Math.random() * 4) + 1;
    let nomeProduto;

    switch (numeroProduto) {
        case 1:
            nomeProduto = "Notebook";
            break;
        case 2:
            nomeProduto = "Tablet";
            break;
        case 3:
            nomeProduto = "Celular";
            break;
        case 4:
            nomeProduto = "Videogame";
            break;
        default:
            console.log("Produto inválido");
    }

    let precoProduto = Math.ceil(Math.random() * 5000);
    while (precoProduto < 1000) {
        let precoProduto = Math.ceil(Math.random() * 5000);

    }

    let precoFrete = 0;
    if (precoProduto < 1600) {
        precoFrete = 37.50;
    }

    const percentalDesconto = (Math.floor(Math.random() * 9)) * 1;
    const desconto = (precoProduto * percentalDesconto) / 100;

    let precoFinal = precoProduto - desconto + precoFrete; 

    console.log(`Produto: ${nomeProduto}`);
    console.log(`Preço do produto: R$${precoProduto.toFixed(2)}`);
    console.log(`Desconto de ${percentalDesconto}%: ${desconto.toFixed(2)}`);
    console.log(`Valor do frete: R$${precoFrete.toFixed(2)}`);
    console.log(`Total a pagar: R$${precoFinal.toFixed(2)}`);

    console.log(`Preço final em 4 parcelas sem juros: `);
    for (let i = 1; i <= 4; i++){
        const parcela = precoFinal / 4;
        console.log(`Parcela ${i}: R$${parcela.toFixed(2)}`);
    }

    console.log(`Obrigado por comprar conosco!!!`);
    
    
    

} else {
    console.log("Usuário ou senha inválidos");

}