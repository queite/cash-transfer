import { useContext, useState } from "react";
import { IDataTransfer } from "../@types";
import Context from "../context/context";
import api from "../services/requests";

function Transfer() {
  const {setBalance, setTransactions}: any = useContext(Context);
  const [dataTransfer, setDataTransfer] = useState<IDataTransfer>({username: '', value: 0});

  const updateData = async () => {
    const updatedBalance = await api.get('/balance',  {'headers': {'Authorization': localStorage.token}});
    const updatedTransactions = await api.get('/transactions',  {'headers': {'Authorization': localStorage.token}});
    setBalance(updatedBalance.data);
    localStorage.balance = JSON.stringify(updatedBalance.data);
    setTransactions(updatedTransactions.data);
    localStorage.transactions = JSON.stringify(updatedTransactions.data);
  };

  const handleTransfer = async () => {
    try {
      await api.post('/transactions', {
        username: dataTransfer.username,
        value: dataTransfer.value
      }, {'headers': {'Authorization': localStorage.token}});
      await updateData();
    } catch (error) {
        alert(error);
      }
  };

  return(
    <div className="transfer-container">
      <label> Nome de usuário que receberá o valor
        <input
          name="username"
          type="text"
          placeholder="usuário"
          onChange={(e) => setDataTransfer({
            username: e.target.value,
            value: dataTransfer.value })}
        />
      </label>
        <label> Valor a ser transferido
        <input
          name="value"
          type="number"
          placeholder="valor"
          onChange={(e) => setDataTransfer({
            username: dataTransfer.username,
            value: Number(e.target.value) })}
        />
      </label>
      <button onClick={handleTransfer}>Transferir</button>
    </div>
  )
};

export default Transfer;
