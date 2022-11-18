import { useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Context from '../context/context';
import '../styles/Header.css';

function Header() {
  const {setUserData, setBalance, setTransactions}: any = useContext(Context);
  const userData = JSON.parse(localStorage.user);
  const balance = JSON.parse(localStorage.balance);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    setUserData();
    setBalance();
    setTransactions([]);
    navigate('/')
  }

  return(
    <header>
      <div className='user'>
        <FaRegUserCircle/>
        <span>{userData.username}</span>
      </div>
      <span>Saldo R$ {Number(balance.balance).toFixed(2)}</span>
      <button onClick={handleLogOut}>Sair</button>
    </header>
  )
}

export default Header;