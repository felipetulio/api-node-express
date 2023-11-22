// importação do módulo app.js para dentro deste arquivo
import app from "./src/app.js";

// variável PORT recebe a indicação de qual porta o servidor deverá "ouvir" para 
// pegar a requisição (request) e retornar a resposta (response)
const PORT = 3000;

// utilização da variável app que foi exportada do módulo app.js e do método .listen()
// para escutar a porta definida anteriormente.
app.listen(PORT, () => {
    console.log("Servidor escutando");
});