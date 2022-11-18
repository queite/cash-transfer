function TransactionsTable() {
  return(
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
          {/* <tbody>
            {transactions.map((transaction) => {
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
          </tbody> */}
        </table>
  )
}

export default TransactionsTable