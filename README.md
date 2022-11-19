# BANCO DE DADOS
🛠️ **Tools:**
* [PostegreSQL](https://www.postgresql.org/)

# BACKEND

🛠️ **Tools:**
* [TypeScript](https://www.typescriptlang.org/)
* [JWT](https://jwt.io/)
* [Sequelize](https://sequelize.org/)
* [express-async-errors](https://www.npmjs.com/package/express-async-errors)
* [zod](https://github.com/colinhacks/zod)
* [ESLint](https://eslint.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

<br>

## ✨**Rotas**
| Recurso | Rota
| ------- | ------
Lista transações | GET /transactions
Obter dados conta |GET /balance
Obtem dados do usuário logado | GET /users/user
Filtra transações por data ou tipo | GET /transactions/search
Cria nova transação | POST /transactions
Cria usuário | POST /users/create
Login | POST /users/login

# FRONTEND
* [React](https://github.com/colinhacks/zod)
* [TypeScript](https://www.typescriptlang.org/)
* [Axios](https://axios-http.com/ptbr/docs/intro)

### 🎯
# TESTES

🛠️ **Tools:**
* [Chai](https://www.chaijs.com/)
* [Sinon](https://sinonjs.org/)
* [Mocha](https://mochajs.org/)
<!-- * [Swagger](https://swagger.io/) -->
<br>

---


 ## ⚙️Como rodar a aplicação:

<details>

<summary> Install and execute </summary> <br>

Download the code:
```
git clone git@github.com:queite/trybe-futebol-clube.git
```
Enter the root folder:
```
cd trybe-futebol-clube
```
Install dependencies:
```
npm install
```
Run on docker:
```
npm run compose:up
```

Go to the `localhost:3000` to see from the frontend or use the routes on Thunder Client to see the back-end. <br>
Ex.: `localhost:3001/leaderboard` <br>

</details>
<br>
<details>

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
</details>
