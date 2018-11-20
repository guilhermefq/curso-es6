const arr = [1,2,3,4,5,6,7,8];

//modificando para Arrow Function

const newArr = arr.map((item) => {
    return item * 2;
});


console.log(newArr);

const sum = arr.reduce((total,next) => {
    return total + next;
})

console.log(sum);

const filter = arr.filter(item => {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(item => item === 4);

console.log(find);

const teste = () => {
    return 'Teste de retorno';
}

const array = () => [2,4,5];
const texto = () => 'Teste de retorno';
const numero = () => 4;

//Retorno de Objeto
const obj = () => ({ nome: 'Guilherme'});

console.log(obj());
