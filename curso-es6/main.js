//--------------------------Class, Constructor, Extends-----------------------
class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Ebraim';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1,4));

//------------------Map, Reduce, Filter, Find-------------------------//
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) {
  return item * 2;
})
console.log(newArr);

const newArr2 = arr.map(function(item, index) {
  return item + index;
})
console.log(newArr2);

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 ===0;
});
console.log(filter);

const find = arr.find(function(item) {
  return item === 1;
});
console.log(find);

//---------------------Arrow functions---------------------------------
const arr2 = [1, 3, 4, 5, 8, 9];

/*
const newArr = arr.map(function(item) {
  return item * 3;
})
*/

const newArr3 = arr2.map((item) => item * 3);
console.log(newArr3);

const teste = () => ({ nome: 'Ebraim' }); // 'Ebraim'; // 2; //[1,2,3];
console.log(teste());

//--------------------------Valores Padrão-------------------------------
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1, 4));
console.log(soma(1));
console.log(soma());

//---------------------Desestruturação-----------------------------
const usuario = {
  nome: 'Ebraim',
  idade: '28',
  endereco: {
    cidade: 'João Pessoa',
    estado: 'PB',
  }
}
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);
*/

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade, endereco: { cidade } }) {
  console.log(idade, cidade, nome);
}
mostraNome(usuario);