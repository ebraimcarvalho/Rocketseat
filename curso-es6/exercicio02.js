const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const map = usuarios.map(item => item.idade);
 console.log(map);

 const filter = usuarios.filter( usuario => usuario.empresa === "Rocketseat" && usuario.idade>= 18);
 console.log(filter);

 const find = usuarios.find( usuario => usuario.empresa === "Google");
 console.log(find);

 const calculo = usuarios
  .map(usuario => ({...usuario, idade: usuario.idade * 2}))
  .filter(usuario => usuario.idade <= 50);
  console.log(calculo);