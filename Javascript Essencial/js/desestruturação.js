const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...retante] = numeros;
console.log(a);
console.log(b);
console.log(c);
console.log(retante);
console.log(`--------------------------`);

const livro = {
    titulo: 'O hobbit',
    autor: 'J.R.R tolkien',
    anoPublicacao: '1937',
    editora: 'George Allen & Unwin',
    paginas: 310
};
console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.paginas);

const{titulo, autor, anoPublicacao, editora, paginas} = livro
console.log(`Nome do livro: ${titulo}`);
console.log(`Nome do Autor: ${autor}`);
console.log(`Ano de publicação: ${anoPublicacao}`);
console.log(`Editora: ${editora}`);
console.log(`Páginas: ${paginas}`);






