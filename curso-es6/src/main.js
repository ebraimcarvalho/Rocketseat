//import { soma as somaFunction, sub } from './functions'; //renomeando a funcao para outro nome
//import soma from './soma'; //quando usando default em function soma
//import soma, { sub } from './functions'; //quando usando default em function soma e sub sem default
//import * as functions from './functions';

//console.log(functions);
//console.log(functions.soma(1, 3));
//console.log(functions.sub(4, 2));

//console.log(soma(1, 3));
//console.log(sub(4, 2));

//---------------------Exercicio modulo 02----------------------------------------------

/*import ClasseUsuario from './functions'; //está como default, posso chamar por qualquer nome
ClasseUsuario.info(); // apenas teste

import { idade } from './functions'; //não está como default, precisa estar dentro de {}
console.log(idade); // 23

import Usuario, { idade as IdadeUsuario } from './functions';
Usuario.info(); // apenas teste
console.log(IdadeUsuario); // 23*/

//------------------------modulo 03 explicando---------------------------------------
/*const minhaPromise = () => new Promise((resolve, reject) => { // declara uma promise onde retorna 'OK', depois de 2 segundos
  setTimeout(() => { resolve('OK') }, 2000);
});*/

/*async function executaPromise() {
  console.log(await minhaPromise()); // OK, depois de 2 segundos
  console.log(await minhaPromise()); // OK, depois de 4 segundos
  console.log(await minhaPromise()); // OK, depiis de 6 segundos
}
executaPromise();*/

/*const executaPromise = async () => {
  console.log(await minhaPromise()); // OK, depois de 2 segundos
  console.log(await minhaPromise()); // OK, depois de 4 segundos
  console.log(await minhaPromise()); // OK, depois de 6 segundos
}
executaPromise();*/

//------------------------------------------------------------------

/*import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response); // Retorna os dados do usuário do github
    } catch (err) {
      console.log('Erro na API'); // Retorna 'Erro na API' caso o usuário não conste na base de dados
    }
  }
}
Api.getUserInfo('ebraimcarvalho'); // chama Api.getUserInfo passando ebraimcarvalho como usuario para buscar
Api.getUserInfo('ebraimcarvalho123123123');// chama Api.getUserInfo passando ebraimcarvalho123123123 como usuario para buscar, o que retornará erro pois não existe esse usuário*/

//------------------Exercicios Modulo 3------------------------------------
// Função delay aciona o .then após 1s
// A
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay(); // espera a promise da função delay, que é 1 segundo
  console.log("1s"); // mostra em tela 1s, depois de 1 segundo

  await delay();
  console.log("2s"); // mostra em tela 2s, depois de 2 segundo

  await delay();
  console.log("3s"); // mostra em tela 3s, depois de 3 segundo
}
umPorSegundo();*/

// B

/*import axios from 'axios';

async function getUserFromGithub(user) {
  try { // se requisição correta
    const response = await axios.get(`https://api.github.com/users/${user}`); // lista os dados do usuario na constante response
    console.log(response.data); // retorna o data do response
  } catch (err) { // se houver erro na requisição
    console.log('Usuário não existe');
  }
}
getUserFromGithub('diego3g');
getUserFromGithub('ebraimc');*/

// C
/*
import axios from 'axios';

class Github {
  static async getRepositories(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`); // lista os repositorios do usuario que é passado ao chamar a função
      console.log(response.data); // retorna o data da resposta
    } catch (err) { // se houver erro na requisição
      console.log('Repositório n existe');
    }
  }
 }
 Github.getRepositories("rocketseat");
 Github.getRepositories("ebraimcarvalho");*/

 // D

 import axios from 'axios';

 const buscaUsuario = async usuario => { // cons buscaUsuario é uma função assíncrona que passa apenas usuario como parâmetro 
   try { // em caso de sucesso, axios busque o usuario tal na api do github e aloque na const response
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data); // mostre o data da resposta
   } catch (err) { // em caso de erro na requisição, mostre que o Usuário não existe
    console.log('Usuário não existe');
   }
 }
 buscaUsuario('diego3g');
 buscaUsuario('ebraimcarvalho');