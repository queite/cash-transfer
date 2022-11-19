import { useContext } from 'react';
import Context from '../context/context';
import api from '../services/requests';
import '../styles/Transactions.css';
import TransactionsTable from "./TransactionsTable";

function Transactions() {
  const {setTransactions}: any = useContext(Context);

  const handleDataFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredTransactions = await api.get(`/transactions/search?q=${e.target.value}`, {'headers': {'Authorization': localStorage.token}});
    setTransactions(filteredTransactions.data)
  }

  return(
    <div className="transction-container">
      <div className="filters-container">
        <div>
          <label> Escolha uma data:
            <input
              type='Date'
              placeholder="dd/mm/aaaa"
              onChange={handleDataFilter}
            />
          </label>
          <input
            type="radio"
            value="cashin"
            name="filter"
            onChange={handleDataFilter}
          /> Entradas
          <input
            type="radio"
            value="cashout"
            name="filter"
            onChange={handleDataFilter}
          /> Saídas
          <input
            type="radio"
            value="all"
            name="filter"
            onChange={handleDataFilter}
          /> Todos
        </div>
      </div>
      <div className='table-container'>
        <TransactionsTable />
      </div>
    </div>
  )
}

export default Transactions