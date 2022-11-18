import Login from '../components/Login';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
          Bem-vindo a N.G Cash
          </p>
        </header>
        <div>
          <h3>Acessar minha conta</h3>
          <Login login/>
          <h3>Criar conta</h3>
          <Login />
        </div>
      </div>

  );
}

export default App;
