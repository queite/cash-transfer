import { useContext } from "react";
import { ITransactions } from "../@types";
import Context from "../context/context";
import '../styles/TransactionsTable.css';

function TransactionsTable() {
  const {transactions}: any = useContext(Context);
  console.log(transactions)

  return(
    <section className="table">
      <table>
        <thead>
          <tr className="top">
            <th>Código da transação</th>
            <th>Conta debitada</th>
            <th>Conta creditada</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: ITransactions) => {
            const { id, debitedAccountId , creditedAccountId , value,
              createdAt } = transaction;
            return (
              <tr key={ id }>
                <td>{id}</td>
                <td>{debitedAccountId}</td>
                <td>{creditedAccountId}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{createdAt}</td>
              </tr>);
          })}
        </tbody>
      </table>
    </section>

  )
}

export default TransactionsTable