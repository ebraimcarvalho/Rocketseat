var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Preenchendo a lista de Todos pegando da storage, passando para Array JSON.parse
// caso esteja vazio, insere um Array vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//Função que renderiza os todos.
function renderTodos() {
  //limpando o html antes de renderizar novamente
  //caso não limpassemos e salvasse um novo todo, toda a lista se repetiria
  listElement.innerHTML = '';

  for (todo of todos) {
    //Criando elemento li
    var todoElement = document.createElement('li');
    //Criando o texto do li
    var todoText = document.createTextNode(todo);
    //Criando o elemento link a, atributo href e style
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    linkElement.style.marginLeft = '10px';
    linkElement.style.color = '#c00';
    linkElement.style.textDecoration = 'none';
    linkElement.style.fontSize = '14px';
    //Criando uma variavel posição para cada elemento da lista para poder chamar na função deleteTodo()
    var pos = todos.indexOf(todo);
    //Cria um atributo ao link Excluir, chamando a função deleteTodo(pos) ao clicar em Excluir
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos(); //Chamando a função principal que renderiza os Todos

function addTodo() {
  var todoText = inputElement.value; //Coloca o valor digitado no input na variavel todoText para ser adicionado no renderTodos()
  todos.push(todoText); //Acrescenta o valor do input ao final do array todos

  inputElement.value = ''; //Após acrescentar, o valor do input fica vazio
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo; //Chamando a função addTodo ao clicar no botão adicionar

function deleteTodo(pos) {
  todos.splice(pos, 1); //Exclui o elemento que estiver na posição do indexOf
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos)); // Salva o array todos como string JSON
}