# api-node-express
Este repositório contém materiais e códigos básicos para ensinar a construção de uma API Rest com a linguagem JavaScript, o runtime Node.js e o framework Express.

A API desenvolvida neste repositório não possui conexão com banco de dados. Os dados que são "manipulados" pelas rotas estão em um objeto dentro do código mesmo. Esta certamente não é uma boa prática, muito menos aplicável em sistemas comerciáveis. Entretanto, ressalto que este repositório tem o objetivo educativo focado em:

- construir projetos iniciais em Node.Js;
- entender o funcionamento das requisições e respostas;
- construir rotas usando os status de respostas.

---

## Preparando o ambiente de desenvolvimento
Antes de qualquer coisa, é importante ressaltar que este processo foi realizado no OpenSuse Leap 15.4 e 15.5. É possível que versões antigas ou mais recentes apresentem alterações no processo.

---

## Passo a passo usado para criar este projeto (e que pode ser usado por você criar a sua API)

O projeto foi iniciado dentro de um diretório com o comando:

```bash
npm init -y
```

O framework Express foi utilizado neste sistema. Para instalá-lo, foi usado o comando:

```bash
npm install express
```

Em seguida, criou-se o arquivo de entrada do sistema. Neste exemplo, o arquivo chama-se *server.js*. A partir deste ponto, foram definidas as rotas do sistema para funcionamento da lógica do CRUD.

### Passo extra para a fase de desenvolvimento

Para automatizar a tarefa de reinicialização do servidor durante o desenvolvimento, foi instalado o Nodemon. Ele monitora as alterações nos arquivos e reinicia automaticamente o servidor sempre que houver uma modificação no código. O comando utilizado foi:

~~~bash
npm install --save-dev nodemon
~~~

Logo após, utilizei o arquivo `package.json`, na seção de "scripts", para usar o nodemon. Substitui o script "start" por este:

~~~bash
"scripts": {
  "start": "nodemon server.js"
}
~~~

Por fim, passei a inicializar o servidor com o comando `npm start` e o Nodemon gerencia o resto. É importante ressaltar que estes passos extras são para a fase de desenvolvimento.
