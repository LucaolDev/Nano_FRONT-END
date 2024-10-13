// Função simples
function soma() {
    let primeiroNumero = 20;
    let segundoNumero = 30;
    console.log(primeiroNumero + segundoNumero);
}
soma();
console.log(`------------------------------------`);

// Função com parametros
function multiplica(valor1, valor2){
    let resultado =  valor1 * valor2;
    console.log(`O resultado da função é: ${resultado} `);    
}
multiplica(2,10);
multiplica(5,10);
multiplica(10,10);
console.log(`------------------------------------`);

// Mais Exemplos
function subtrair(valor1,valor2) {
    return valor1 - valor2;
}
const resutadoFinal = subtrair (45,40)
console.log(resutadoFinal);
console.log(`------------------------------------`);

function encontrarMaiorMenor(){
    let maior = 0;
    let menor = 100;

    // Gerar 10 numeros aleatorios entre 1 e 100
    for(let i = 0; i < 10; i++){
        let num = Math.floor(Math.random() * 100) + 1;
        console.log(`Número gerado: ${num}`);

        // Compara o maior numero gerado com o atual maior/menor
        if (num > maior) {
            maior = num;
        }
        if (num < menor) {
            menor = num;
        }
    }

    console.log(`O maior número encontrado foi: ${maior}`);
    console.log(`O menor número encontrado foi: ${menor}`);   
}
encontrarMaiorMenor(); 
console.log(`------------------------------------`);

function calcularRendimento(valor, taxaJuros, tempo){
    
    for (let i = 1; i <= tempo; i++){
        valor += valor * taxaJuros;
        console.log(`Rendimento no ${i}o.: R$ ${valor.toFixed(2)}`);
    }
}
calcularRendimento(1000, 0.05, 5);
console.log(`------------------------------------`);

function calculaPrecoUber(distancia, tempo){
    const valorBase = 2.5;
    const valorKm = 1.3;
    const valorMin = 0.26;

    const PrecoDistancia = distancia * valorKm;
    const PrecoTempo = tempo * valorMin;
    const PrecoTotal = valorBase + PrecoDistancia + PrecoTempo;

    return PrecoTotal.toFixed(2);
}
let valorCorrida = calculaPrecoUber(40, 10);
console.log(`Sua viagem ficara em: R$ ${valorCorrida}`); 

valorCorrida = calculaPrecoUber(30, 70);
console.log(`Sua viagem ficara em: R$ ${valorCorrida}`);
