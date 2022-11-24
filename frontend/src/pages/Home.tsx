import Login from '../components/Login';
import '../styles/Home.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p>Bem-vindo a N.G Cash</p>
        </header>
        <div className='home-container'>
          <div className='access-container'>
            <h2>Acessar minha conta</h2>
            <Login login/>
          </div>
          <div className='registration-container'>
            <h2>Criar conta</h2>
            <Login />
          </div>

        </div>
      </div>

  );
};

export default App;
