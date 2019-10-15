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

import Usuario, { idade as IdadeUsuario } from './functions';
Usuario.info();
console.log(IdadeUsuario);