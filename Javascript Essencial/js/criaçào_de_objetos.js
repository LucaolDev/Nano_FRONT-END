// Objetos literais
const produto1 = {
    id: 123,
    tipo: 'Celular',
    fabricante: 'Apple',
    preco: 4899.00
}
const produto2 = {
    id: 456,
    tipo: 'Notebook',
    fabricante: 'Asus',
    preco: 6899.00
}
console.log(produto1);
console.log(produto2);
console.log(produto1.tipo);
console.log(produto2.preco);
console.log('---------------------------------');

// criando objetos com construtor
function User(id, user, password, email) {
    this.id = id;
    this.user = user;
    this.password = password;
    this.email = email;
}
const user1 = new User(123, 'Eu mesmo', 'abc', 'eumesmo@eu.com')
const user2 = new User(456, 'Você mesmo', 'def', 'vocemesmo@eu.com')
const user3 = new User(798, 'Ele mesmo', 'ghi', 'elemesmo@eu.com')
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user3.id);
console.log(user2.email);

// factory function
function criarHeroi(nome, velocidade, agilidade, forca){
    return{
        nome,
        velocidade,
        agilidade,
        forca,
    };
}
const heroi1 = criarHeroi("Eu", 88, 87, 91)
const heroi2 = criarHeroi("Tu", 86, 82, 92)
const heroi3 = criarHeroi("Ele", 92, 88, 94)
console.log(heroi1);
console.log(heroi2);
console.log(heroi3);
console.log(heroi1.forca);
console.log(heroi2.nome);

// criando métodos
function Pessoa(nome, idade, altura, cidade, ocupacao){
    return{
        nome,
        idade,
        altura,
        cidade,
        ocupacao,
        exibirPessoa: function(){
            console.log(`Nome: ${nome}`);
            console.log(`Idade: ${idade}`);
            console.log(`Altura: ${altura}`);
            console.log(`Cidade: ${cidade}`);
            console.log(`Ocupação: ${ocupacao}`);
        }
    }
}
const pessoa1 = new Pessoa("Paulo", 50, 1.93, "São Paulo", "Desenvolvedor");
pessoa1.exibirPessoa();
console.log(" ");
const pessoa2 = new Pessoa("Sandra", 30, 1.70, "Rio de Janeiro", "Desenvolvedora");
pessoa1.exibirPessoa();

// adicionando uma propriedade a pessoa1
console.log(`Adicionando a propriedade projeto Atual`);
pessoa1.projetoAtual = 'Projeto Front-End Tesla'
console.log(pessoa1);

