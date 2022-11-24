import { AxiosResponse } from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Context from '../context/context';
import api from '../services/requests';
import '../styles/Login.css';

interface LoginProps {
  login?: boolean
};

interface ILogin {
  username: string
  password: string
};

function Login(props: LoginProps) {
  const [login, setLogin] = useState<ILogin>({username: '', password: ''});
  const navigate = useNavigate();
  const {setToken, setUserData, setTransactions, setBalance}: any = useContext(Context);

  const geUserInfo = async () => {
    const userData = await api.get('/users/user', {'headers': {
        'Authorization': localStorage.token
      }});
    setUserData(userData.data)
    localStorage.user = JSON.stringify(userData.data);
    const userTransactions = await api.get('/transactions', {'headers': {
        'Authorization': localStorage.token
      }});
    setTransactions(userTransactions.data);
    localStorage.transactions = JSON.stringify(userTransactions.data);
    const balance = await api.get('/balance', {'headers': {
        'Authorization': localStorage.token
      }});
    setBalance(balance.data);
    localStorage.balance = JSON.stringify(balance.data);
  }

  const handleClick = async () => {
    let token: AxiosResponse<any, any>;
    if (props.login) {
      token = await api.post('/users/login', {username: login.username, password: login.password } );
    } else {
      token = await api.post('/users/create', {username: login.username, password: login.password } );
    }
    if(token) {
      localStorage.token = token.data.token;
      setToken(token.data.token);
      geUserInfo();
      navigate('/main');
    }
  };

  return(
    <div className="login-container">
      <label> Nome de usuário
        <input
          name='username'
          type="text"
          placeholder="usuário"
          value={login.username}
          onChange={(e) => setLogin({ username: e.target.value, password: login.password })}/>
      </label>
        <label> Senha
        <input
          name='password'
          type="password"
          placeholder="sua senha aqui"
          value={login.password}
          onChange={(e) => setLogin({ username: login.username, password: e.target.value })}/>
      </label>
      <button onClick={handleClick}>{props.login? 'Entrar' : 'Cadastrar'}</button>
    </div>
  )
}

export default Login;
