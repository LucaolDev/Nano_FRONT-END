const calcularValorHospedagem = (diarias, ValorDiaria, taxaLimpeza) => {
    return diarias * ValorDiaria + taxaLimpeza;
}

let valorHospedagem = calcularValorHospedagem(9, 500, 300);
console.log(`O valor da reserva é R$ ${valorHospedagem.toFixed(2)}`);

valorHospedagem = calcularValorHospedagem(5, 300, 150);
console.log(`O valor da reserva é R$ ${valorHospedagem.toFixed(2)}`);
console.log(`------------------------------------------------------`);

const validarLogin = (usuario, senha) => {
    const usuarioRegistrado = "joao123";
    const senhaRegistrada = "senha123";

    if (usuario === usuarioRegistrado && senha === senhaRegistrada) {
        console.log("login realizado com sucesso!");
        return true;
    } else {
        console.log("Usuario ou senha inválidos. Tente novamente");
        return false;
    }
}
const user1 = validarLogin("joao123", "senha123");
const user2 = validarLogin("maria123", "senha456");
const user3 = validarLogin("sla123", "senha123");

console.log(user1, user2, user3);


