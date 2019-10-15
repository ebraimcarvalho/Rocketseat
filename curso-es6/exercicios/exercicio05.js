const arr = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr;
console.log(x); // 1
console.log(y); // 2, 3, 4, 5, 6

function soma(...params) { // utiliza ...params pois não sabemos quantos parâmetros serão passados
  return params.reduce((total, next) => total + next) // percorre todos os parametros, alocando cada um em total e next, fazendo a soma e percorrendo novamente até o término.
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };
console.log(usuario2); // nome: 'Gabriel', idade: 23, endereco: { cidade: 'Rio do sul', ... }
console.log(usuario3); // nome: 'Diego', idade: 23, endereco: { cidade: 'Lontras', uf: 'SC', ... }