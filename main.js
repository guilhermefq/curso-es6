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