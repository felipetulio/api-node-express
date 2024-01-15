// importação do framework Express
import express from "express";

// criação da variável app que recebe o retorno do método express(). A partir de agora, 
// a variável app é capaz de usar os métodos disponíveis do framework Express.
const app = express();

// criação de um middleware. Este código foi adicionado para forçar um parseamento dos 
// dados da requisição para o formato json. Os dados trafegados entre as requisições e 
// respostas na internet estão no formato texto (string). Logo, para usarmos os métodos
// de dados em json, precisamos desse middleware para "parsear" antes de usarmos.
app.use(express.json())

// este é o array de objetos que está sendo utilizado como "armazenamento dos dados"
// inseridos e buscados na API.
const livros = [
    {
        id: 1,
        titulo: "Jogador Número 1"
    },
    {
        id: 2,
        titulo: "Jogos Vorazes"
    },
    {
        id: 3,
        titulo: "A Batalha do Apocalipse"
    }
]

// função criada para retornar o índice de um objeto no array livros[] com base no id
// passado pela requisição.
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}


// no código abaixo foi usado o método .get() para pegar a rota "ouvida" pelo servidor e
// definir uma resposta para aquela requisição.
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})


// o método .post() tem uma tarefa contrária ao do método .get(). Ao invés de "capturar"
// dados do sistema e retorná-los para o usuário, o método .post() inclui dados na API,
// que eventualmente serão armazenados em um banco de dados. Neste exemplo, os dados inseridos
// serão incluídos no array de objetos livros[].
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});


// o método .put() faz uma atualização do conteúdo. O método HTTP PUT geralmente é utilizado para
// atualizar ou criar um recurso no servidor, ou seja, é utilizado quando deseja-se modificar um
// recurso específico no servidor ou criar um novo se ele não existir.
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});


// o método .delete() é utilizado em APIs JavaScript para solicitar a remoção de um recurso
// específico no servidor. Quando você faz uma requisição DELETE, está indicando ao servidor que
// deseja excluir o recurso identificado pela URL da requisição.
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});


// exportação de variáveis e métodos do arquivo app.js para os demais arquivos do projeto.
// Aqui o arquivo app.js se torna um módulo dentro do projeto.
export default app;
