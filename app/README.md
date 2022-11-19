# APP DE TRANSFERÊNCIAS 💰💵

<details>
  <summary> BANDO DE DADOS 📚 </summary>
  <br>

  🛠️ **Tools:**
  * [PostegreSQL](https://www.postgresql.org/)

  **Informações do banco:** <br>
  Nome = transfer | Porta = 5432 | Usuário = postgres |  Password = example <br>
  Acesso via docker: `docker exec -it postgres-db psql -U postgres `
</details>
  <br>

<details>
  <summary> BACKEND 💻</summary>
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
  <summary> FRONTEND 🖥️</summary>
  <br>

  🛠️ **Tools:**
  * [React](https://github.com/colinhacks/zod)
  * [TypeScript](https://www.typescriptlang.org/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)
</details>
<br>

<!-- ### 🎯
# TESTES

🛠️ **Tools:**
* [Chai](https://www.chaijs.com/)
* [Sinon](https://sinonjs.org/)
* [Mocha](https://mochajs.org/)
<!-- * [Swagger](https://swagger.io/) -->
<br>

## ⚙️Como rodar a aplicação:

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
<br>

<!-- <details>

<summary>Run the tests </summary> <br>

Enter the backend folder:
```
cd ./app/backend/
```
Install dependencies:
```
npm install
```
Run the tests
```
npm run test:coverage
```
</details> -->
