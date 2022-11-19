import { useState } from 'react';
import '../styles/Transactions.css';
import TransactionsTable from "./TransactionsTable";

function Transactions() {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState('')

  const handleFilter = () => {
    console.log(data)
    console.log(filter)
  }

  return(
    <div className="transction-container">
      <div className="filters-container">
        <div>
          <label> Escolha uma data:
            <input
              type='Date'
              placeholder="dd/mm/aaaa"
              onChange={(e) => setData(e.target.value)}
            />
          </label>
          <input
            type="radio"
            value="cashin"
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
          /> Entradas
          <input
            type="radio"
            value="cashout"
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
          /> Saídas
          <input
            type="radio"
            value="all"
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
          /> Todos
        </div>
        <button onClick={handleFilter}>Filtrar</button>
      </div>
      <div className='table-container'>
        <TransactionsTable />
      </div>
    </div>
  )
}

export default Transactions