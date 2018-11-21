class List{
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)            ;
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Guilherme';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
} 


var minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    minhaLista.add('Novo Todo');   
}

minhaLista.mostraUsuario();


function soma(a = 1,b = 3){
    return a + b;
}

//----------------------------------
//---Valores padrões
const soma2 = (a = 2, b = 3) => a + b;
console.log(soma());
console.log(soma2());


//-----------------------------------
//---Desestruturação de objetos
console.log('Desestruturação de Objetos');
const usuario = {
    nome: 'Guilherme',
    idade: 24,
    endereco: {
        cidade: 'Dourados',
        estado: 'MS',
    },
};
const nome2 = usuario.nome;
const idade2 = usuario.idade;
const cidade2 = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

// Renomeando Campos do Objeto
const { nome:Nome_Usuario, idade:Idade_Usuario, endereco: { cidade:Cidade_Usuario } } = usuario;
console.log(Nome_Usuario, Idade_Usuario, Cidade_Usuario);

function mostraNome({ nome, idade }){
    console.log(nome, idade);
}
mostraNome(usuario);

console.log('Desestruturação de Objetos');
//----------------------------

//---------- rest parameter
console.log('rest parameter');

const aluno = {
    name: 'Karoline',
    idade: 24,
    endereco: {
        cidade: 'Dourados',
        estado: 'MS',
    },
};
const { name, ...resto} = aluno; // Com Objetos
console.log('Resto: ', resto);

const arr = [1,2,3,4,5,6];
const [a , b , ...c] = arr; // Com Arrays
console.log(c);

function restOp(...params){
    return params.reduce((total, next) => total + next);
}
function restOp2(a, b, ...params){
    return params.reduce((total, next) => total + next);
}
console.log(restOp(1,3,4,6,7,5,10));

console.log('rest parameter');
//----------------------------

//-------------spread operator
console.log('spread operator');

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [ ...arr2, ...arr1];
console.log(arr3);

// Trabalhand com obj

const funcionario1 = {
    nome: 'João',
    idade: 32,
    empresa: 'Softgran'
};

const funcionario2 = { ...funcionario1, nome: 'José'};
console.log(funcionario2);

console.log('spread operator');
//----------------------------

//---------------Template Literals
console.log('Template literals');

const user = 'Pedro';
const age = 23;
const numA = 4 , numB = 5;
console.log(`Meu nome é ${user} e tenho ${age} anos.`);
console.log(`A soma de ${numA} + ${numB} é ${numA + numB}`);

console.log('Template literals');
//---------------------------------



