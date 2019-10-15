//import { soma as somaFunction, sub } from './functions'; //renomeando a funcao para outro nome
//import soma from './soma'; //quando usando default em function soma
//import soma, { sub } from './functions'; //quando usando default em function soma e sub sem default
//import * as functions from './functions';

//console.log(functions);
//console.log(functions.soma(1, 3));
//console.log(functions.sub(4, 2));

//console.log(soma(1, 3));
//console.log(sub(4, 2));

//import ClasseUsuario from './functions'; //está como default, posso chamar por qualquer nome
//ClasseUsuario.info();

//import { idade } from './functions'; //não está como default, precisa estar dentro de {}
//console.log(idade);

/*import Usuario, { idade as IdadeUsuario } from './functions';
Usuario.info();
console.log(IdadeUsuario);*/

/*const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});*/

/*async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
executaPromise();*/

/*const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
executaPromise();*/

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch (err) {
      console.log('Erro na API');
    }
  }
}
Api.getUserInfo('ebraimcarvalho');
Api.getUserInfo('ebraimcarvalho123123123');