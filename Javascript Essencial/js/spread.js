const numeros1 = [1, 2, 3];
console.log(`Array numeros1: ${numeros1}`);

const numeros2 = [4, 5, 6];
console.log(`Array numeros2: ${numeros2}`);

const todosNumeros = [...numeros1, ...numeros2]
console.log(todosNumeros);

const novoArray = [12, 14, 16, 18, ...todosNumeros, 20, 22, 24]
console.log(novoArray);
console.log(`-----------------------`);

// Com objetos 
const carrinho = {
    "Camiseta": 99.99,
    "Calça": 159.99,
    "Tênis" : 289.98
};
const carrinhoCopidado = {...carrinho};
console.log(carrinho);
console.log(carrinhoCopidado);



