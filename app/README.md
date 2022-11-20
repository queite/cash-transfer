# APP DE TRANSFERÊNCIAS 💰💵

<details>
  <summary> <font color="#05d401">BANDO DE DADOS</font> 📚 </summary>
  <br>

  🛠️ **Tools:**
  * [PostegreSQL](https://www.postgresql.org/)

  **Informações do banco:** <br>
  Nome = transfer | Porta = 5432 | Usuário = postgres |  Password = example <br>
  Acesso via docker: `docker exec -it postgres-db psql -U postgres `
</details>
  <br>

<details>
  <summary> <font color="#ff00ff">BACKEND</font> 💻</summary>
  <br>

  🛠️ **Tools:**
  * [TypeScript](https://www.typescriptlang.org/)
  * [JWT](https://jwt.io/)
  * [Sequelize](https://sequelize.org/)
  * [express-async-errors](https://www.npmjs.com/package/express-async-errors)
  * [zod](https://github.com/colinhacks/zod)
  * [ESLint](https://eslint.org/)
  * [bcrypt](https://www.npmjs.com/package/bcrypt)

  <br>

  ### ✨**Rotas**
  | Recurso | Rota
  | ------- | ------
  Lista transações | GET /transactions
  Obter dados conta |GET /balance
  Obtem dados do usuário logado | GET /users/user
  Filtra transações por data ou tipo | GET /transactions/search
  Cria nova transação | POST /transactions
  Cria usuário | POST /users/create
  Login | POST /users/login
</details>
<br>


<details>
  <summary> <font color="#05d401">FRONTEND</font> 🖥️</summary>
  <br>

  🛠️ **Tools:**
  * [React](https://github.com/colinhacks/zod)
  * [TypeScript](https://www.typescriptlang.org/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)
</details>
<br>

<details>
  <summary> <font color="#ff00ff">TESTES</font> ⚗️ </summary>
  <br>

  🛠️ **Tools:**
  * [Chai](https://www.chaijs.com/)
  * [Chai HTTP](https://www.chaijs.com/plugins/chai-http/)
  * [Sinon](https://sinonjs.org/)
  * [Mocha](https://mochajs.org/)

  Foram realizados **testes de integração** para o backend. <br>
  Para rodar os testes pelo `docker` use o comando `docker exec -it app_backend sh -c "npm test" `
</details>
  <br>

---
## ⚙️Como rodar a aplicação:
<br>

Descompacte a pasta com o comando:
```
unzip app.zip
```
Entre na pasta raiz:
```
cd app
```
Rode o seguinte comando docker:
```
docker-compose up -d –build
```
Vá ao `localhost:3000` para ver o frontend ou use as rotas no Thunder Client para ver o back-end. <br>
