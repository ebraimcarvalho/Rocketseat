const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa; //criando constante nome, cidade e estado que recebe os valores da constante empresa, repare que para acessar cidade e estado precisa falar com endereço: { cidade, estado }
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) { // cria função que recebe dois parametros como objeto
return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 })); //Diego tem 23 anos.