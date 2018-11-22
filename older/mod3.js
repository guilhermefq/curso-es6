//------------------- EXERCICIO 1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => 
    setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay();
    console.log("1s");

    await delay();
    console.log("2s");

    await delay();
    console.log("3s");
}
// umPorSegundo();

//------------------- EXERCICIO 2
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)    
        console.log(response.data.html_url);
    } catch (error) {
        console.log('Usuário não existe');        
    }
}
// getUserFromGithub('diego3g');
// getUserFromGithub('guilhermefq');


//------------------- EXERCICIO 3

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');            
        }
    }
}

// Github.getRepositories('Rocketseat/academy-css-flexbox');
// Github.getRepositories('rocketseat/dslkvmskv');

//------------------- EXERCICIO 4
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');       
    }
}
buscaUsuario('guilhermefq');