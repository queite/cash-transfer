// import TransactionsTable from "./TransactionsTable"

function Transactions() {
  return(
    <div>
      <div> Filtros
        <label> Escolha a data:
          <input type='Date' placeholder="dd/mm/aaaa"/>
        </label>
        <input type="radio" value="cashin" name="filter" /> Entradas
        <input type="radio" value="cashout" name="filter" /> Saídas
        <input type="radio" value="all" name="filter" /> Todos
      </div>
      <div>
        {/* <TransactionsTable /> */}
      </div>
    </div>
  )
}

export default Transactions