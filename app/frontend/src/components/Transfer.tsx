function Transfer() {
  return(
    <div className="transfer-container">
      <label> Nome de usuário que receberá o valor
        <input type="text" placeholder="usuário"/>
      </label>
        <label> Valor a ser transferido
        <input type="number" placeholder="valor"/>
      </label>
      <button>Transferir</button>
    </div>
  )
}

export default Transfer;