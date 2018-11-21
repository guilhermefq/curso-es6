//------------------ EXERCICIO 1
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true ? 'Verdadeiro' : 'Falso';
    }
}
class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);    
        
        this.admin = true;
    }
}

const User1 = new Usuario('email1@gmail.com', 'senha123');
const Admin1 = new Admin('emailTeste@gmail.com', 'senhadmin');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

//------------------ EXERCICIO 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map((usuario) => {
    return usuario.idade;
})
console.log('Ex 2.1: Idade: ', idade);
//-------------
const usuarioFilter = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18
);
console.log('Ex 2.2: ',usuarioFilter);

//-------------
const usuarioGoogle = usuarios.find(usuario => usuario.empresa === 'Google');
console.log('Ex 2.3: ',usuarioGoogle);

//-------------
const usuarioFilter2 = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

console.log('Ex 2.4: ', usuarioFilter2);

//------------------ EXERCICIO 3
// 3.1
const arr = [1, 2, 3, 4, 5];
const arr31 = arr.map(item => item + 10);

console.log('Ex 3.1: ', arr31);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;

console.log('Ex 3.2: ', mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const name = "Diego";
const age = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({
        nome, 
        idade
});

console.log('Ex 3.3: ', mostraUsuario(name, age));
console.log('Ex 3.3: ',mostraUsuario(name));

const promise = () => new Promise((resolve, reject) => resolve());

//------------------ EXERCICIO 4
const empresa = {
    nome1: 'Rocketseat',
    endereco1: {
    cidade1: 'Rio do Sul',
    estado1: 'SC',
    }
};
const { nome1, endereco1: { cidade1, estado1} } = empresa;
console.log('Ex 4.1: ', nome1, cidade1, estado1);

function mostraInfo(usuario) {
    const { nome, idade } = usuario; 
    return `${nome} tem ${idade} anos.`;
}
console.log('Ex 4.2: ',mostraInfo({ nome: 'Diego', idade: 23 }));

//------------------ EXERCICIO 5
const arr5 = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr5;
console.log('Ex 5.1: x = ', x);
console.log('Ex 5.1: y = ', y);

function somaS(...params){
    return params.reduce((total, next) => total + next);
}
console.log('Ex 5.1: ',somaS(1,2,3,4,5,6));

const usuario5 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario5, nome: 'Gabriel'};
const usuario3 = {...usuario5, endereco: { ...usuario.endereco, cidade: 'Lontras'} };
console.log('Ex 5.2: ', usuario2);
console.log('Ex 5.2: ', usuario3);

//------------------ EXERCICIO 6
const User = 'Guilherme';
const Idade = 24;
console.log(`Ex 6: O usuário ${User} possui ${Idade} anos`);

//------------------ EXERCICIO 6
const nombre = 'Guilherme';
const nota = 10;
const aluno = {
 nombre,
 nota,
 cidade: 'Rio do Sul',
};
console.log('Ex 7: ',aluno);