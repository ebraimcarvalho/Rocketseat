"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//--------------------------Class, Constructor, Extends-----------------------
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Ebraim';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 4)); //------------------Map, Reduce, Filter, Find-------------------------//

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var newArr2 = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr2);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 1;
});
console.log(find); //---------------------Arrow functions---------------------------------

var arr2 = [1, 3, 4, 5, 8, 9];
/*
const newArr = arr.map(function(item) {
  return item * 3;
})
*/

var newArr3 = arr2.map(function (item) {
  return item * 3;
});
console.log(newArr3);

var teste = function teste() {
  return {
    nome: 'Ebraim'
  };
}; // 'Ebraim'; // 2; //[1,2,3];


console.log(teste()); //--------------------------Valores Padrão-------------------------------

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1, 4));
console.log(soma(1));
console.log(soma()); //---------------------Desestruturação-----------------------------

var usuario = {
  nome: 'Ebraim',
  idade: '28',
  endereco: {
    cidade: 'João Pessoa',
    estado: 'PB'
  }
};
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);
*/

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(idade, cidade, nome);
}

mostraNome(usuario); //---------------------REST---------------------------

var usuario1 = {
  nome1: 'Ebraim Carvalho',
  idade: 23,
  empresa: 'E-brain'
};

var nome1 = usuario1.nome1,
    resto = _objectWithoutProperties(usuario1, ["nome1"]);

console.log(nome1);
console.log(resto);
var arr3 = [1, 2, 3, 4];
var a = arr3[0],
    b = arr3[1],
    c = arr3.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma1() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma1(1, 2, 3, 4, 5));

function rest(a, b) {
  for (var _len2 = arguments.length, params1 = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params1[_key2 - 2] = arguments[_key2];
  }

  return params1;
}

console.log(rest(1, 2, 3, 4, 5, 6)); //---------------------SPREAD---------------------------

var arr10 = [1, 2, 3];
var arr11 = [4, 5, 6];
var arr12 = [].concat(arr10, arr11);
console.log(arr12);
var usuario10 = {
  nome10: 'Ebraim',
  idade10: 28,
  empresa10: 'E-brain'
};

var usuario11 = _objectSpread({}, usuario10, {
  nome10: 'Eu mesmo'
});

console.log(usuario11); //-------------------TEMPLATE LITERALS-----------------------

var nomeTeste = 'Ebraim';
var idadeTeste = 28;
console.log('Meu nome é ' + nomeTeste + ' e tenho ' + idadeTeste + ' anos.');
console.log("Meu nome \xE9 ".concat(nomeTeste, " e tenho ").concat(idadeTeste, " anos.")); //-------------------OBJECT SHORT SYNTAX----------------------

var nome15 = 'Ebraim';
var idade15 = 28;
var usuario15 = {
  nome15: nome15,
  idade15: idade15,
  empresa15: 'E-brainn!'
};
console.log(usuario15);
