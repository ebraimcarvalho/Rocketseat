// 3.1
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(item => item + 10); // percorre arr copiando-o e acrescentando 10 em cada item do array
console.log(arr2);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade; //mostraIdade é uma função onde recebe um parâmetro(usuario e retorna a idade deste usuario)
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Ebraim', idade = 28) => ({ nome, idade }); // mostraUsuario é uma função que tem como padrão (nome = "Ebraim" e idade = 28) que retorna um objeto com nome e idade
console.log(mostraUsuario(nome, idade)); // { "Diego", 23 } //chama a função passando as variáveis declaradas fora da função
console.log(mostraUsuario(nome)); // { "Diego", 28 } // passa apenas a variável nome, a idade retornará o padrão da função
console.log(mostraUsuario()); // { "Ebraim", 28 } //chama a função com os valores padrões

// 3.4
const promise = () => new Promise((resolve, reject) => console.log("OK!"));
console.log(promise); // mostra a const promise completa
console.log(promise()); // retorna o resultado da função promise