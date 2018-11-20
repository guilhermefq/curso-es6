"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
    _this.usuario = 'Guilherme';
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

var minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function () {
  minhaLista.add('Novo Todo');
};

minhaLista.mostraUsuario();

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
} //----------------------------------
//---Valores padrões


var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
};

console.log(soma());
console.log(soma2()); //-----------------------------------
//---Desestruturação de objetos

console.log('Desestruturação de Objetos');
var usuario = {
  nome: 'Guilherme',
  idade: 24,
  endereco: {
    cidade: 'Dourados',
    estado: 'MS'
  }
};
var nome2 = usuario.nome;
var idade2 = usuario.idade;
var cidade2 = usuario.endereco.cidade;
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // Renomeando Campos do Objeto

var Nome_Usuario = usuario.nome,
    Idade_Usuario = usuario.idade,
    Cidade_Usuario = usuario.endereco.cidade;
console.log(Nome_Usuario, Idade_Usuario, Cidade_Usuario);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
console.log('Desestruturação de Objetos'); //----------------------------
//---------- rest parameter

console.log('rest parameter');
var aluno = {
  name: 'Karoline',
  idade: 24,
  endereco: {
    cidade: 'Dourados',
    estado: 'MS'
  }
};

var name = aluno.name,
    resto = _objectWithoutProperties(aluno, ["name"]); // Com Objetos


console.log('Resto: ', resto);
var arr = [1, 2, 3, 4, 5, 6];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2); // Com Arrays

console.log(c);

function restOp() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

function restOp2(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(restOp(1, 3, 4, 6, 7, 5, 10));
console.log('rest parameter'); //----------------------------
//-------------spread operator

console.log('spread operator');
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr2.concat(arr1);
console.log(arr3); // Trabalhand com obj

var funcionario1 = {
  nome: 'João',
  idade: 32,
  empresa: 'Softgran'
};

var funcionario2 = _objectSpread({}, funcionario1, {
  nome: 'José'
});

console.log(funcionario2);
console.log('spread operator'); //----------------------------
//---------------Template Literals

console.log('Template literals');
var user = 'Pedro';
var age = 23;
var numA = 4,
    numB = 5;
console.log("Meu nome \xE9 ".concat(user, " e tenho ").concat(age, " anos."));
console.log("A soma de ".concat(numA, " + ").concat(numB, " \xE9 ").concat(numA + numB));
console.log('Template literals'); //---------------------------------
