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

//---------------------------------------------------------------
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

/*import axios from 'axios';

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
Api.getUserInfo('ebraimcarvalho123123123');*/

//------------------Exercicios Modulo 3------------------------------------
// Função delay aciona o .then após 1s
// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log("1s");

  await delay();
  console.log("2s");

  await delay();
  console.log("3s");
}
umPorSegundo();

// B

import axios from 'axios';

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// C

class Github {
  static async getRepositories(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
 }
 Github.getRepositories('rocketseat');
 Github.getRepositories('ebraimcarvalho');

 // D

 const buscaUsuario = async usuario => {
   try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
   } catch (err) {
    console.log('Usuário não existe');
   }
 }
 buscaUsuario('diego3g');