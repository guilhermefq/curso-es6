"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//------------------ EXERCICIO 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true ? 'Verdadeiro' : 'Falso';
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email1@gmail.com', 'senha123');
var Admin1 = new Admin('emailTeste@gmail.com', 'senhadmin');
console.log(User1.isAdmin());
console.log(Admin1.isAdmin()); //------------------ EXERCICIO 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log('Ex 2.1: Idade: ', idade); //-------------

var usuarioFilter = usuarios.filter(function (usuario) {
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});
console.log('Ex 2.2: ', usuarioFilter); //-------------

var usuarioGoogle = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log('Ex 2.3: ', usuarioGoogle); //-------------

var usuarioFilter2 = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log('Ex 2.4: ', usuarioFilter2); //------------------ EXERCICIO 3
// 3.1

var arr = [1, 2, 3, 4, 5];
var arr31 = arr.map(function (item) {
  return item + 10;
});
console.log('Ex 3.1: ', arr31); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log('Ex 3.2: ', mostraIdade(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var name = "Diego";
var age = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log('Ex 3.3: ', mostraUsuario(name, age));
console.log('Ex 3.3: ', mostraUsuario(name));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //------------------ EXERCICIO 4


var empresa = {
  nome1: 'Rocketseat',
  endereco1: {
    cidade1: 'Rio do Sul',
    estado1: 'SC'
  }
};
var nome1 = empresa.nome1,
    _empresa$endereco = empresa.endereco1,
    cidade1 = _empresa$endereco.cidade1,
    estado1 = _empresa$endereco.estado1;
console.log('Ex 4.1: ', nome1, cidade1, estado1);

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log('Ex 4.2: ', mostraInfo({
  nome: 'Diego',
  idade: 23
})); //------------------ EXERCICIO 5

var arr5 = [1, 2, 3, 4, 5, 6];
var x = arr5[0],
    y = arr5.slice(1);
console.log('Ex 5.1: x = ', x);
console.log('Ex 5.1: y = ', y);

function somaS() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log('Ex 5.1: ', somaS(1, 2, 3, 4, 5, 6));
var usuario5 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario5, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuario5, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'Lontras'
  })
});

console.log('Ex 5.2: ', usuario2);
console.log('Ex 5.2: ', usuario3); //------------------ EXERCICIO 6

var User = 'Guilherme';
var Idade = 24;
console.log("Ex 6: O usu\xE1rio ".concat(User, " possui ").concat(Idade, " anos")); //------------------ EXERCICIO 6

var nombre = 'Guilherme';
var nota = 10;
var aluno = {
  nombre: nombre,
  nota: nota,
  cidade: 'Rio do Sul'
};
console.log('Ex 7: ', aluno);
