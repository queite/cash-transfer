import { useState } from "react";
import { IDataTransfer } from "../@types";
import api from "../services/requests";

function Transfer() {
  const [dataTransfer, setDataTransfer] = useState<IDataTransfer>({username: '', value: 0});

  const handleTransfer = async () => {
    try {
      await api.post('/transactions', {
        username: dataTransfer.username,
        value: dataTransfer.value
      }, {'headers': {'Authorization': localStorage.token}})
      alert('Transação bem sucedida')
    } catch (error) {
        alert(error)
      }
  }

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
}

export default Transfer;