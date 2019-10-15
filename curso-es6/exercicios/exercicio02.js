const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const map = usuarios.map(item => item.idade);
 console.log(map); // 23, 15, 30

 const filter = usuarios.filter( usuario => usuario.empresa === "Rocketseat" && usuario.idade>= 18);
 console.log(filter); // nome: "Diego", idade: 23, empresa: "Rocketseat"

 const find = usuarios.find( usuario => usuario.empresa === 'Facebook');
 console.log(find); // { nome: 'Lucas', idade: 30, empresa: 'Facebook' }

 const calculo = usuarios
  .map(usuario => ({...usuario, idade: usuario.idade * 2})) // cria um array de objetos copiando usuarios e alterando apenas a idade, onde esta será mutiplicada por 2
  .filter(usuario => usuario.idade <= 50); // filtra os novos usuarios criados em map() que contenham idade menor que 50
  console.log(calculo);