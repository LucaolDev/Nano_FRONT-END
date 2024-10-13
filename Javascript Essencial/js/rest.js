function calcularSoma(...numeros) {
    let = soma = 0;
    for(let numero of numeros){
        soma += numero;
    }
    return soma;
}

console.log(calcularSoma(10, 20, 30));
console.log(calcularSoma(244, 365, 166, 897));
console.log(`--------------------------`);

function calcularMedia(...arr) {
    let soma = 0;
    for(let numero of arr){
        soma += numero;
    }
    return soma / arr.length;
}
const numeros = [100, 200, 300, 400, 50, 60, 70, 80, 90, 1000];
const media = calcularMedia(...numeros)
console.log(`A média dos numeros do Array é: ${media}`);




