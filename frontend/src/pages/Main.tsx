import { useContext } from "react";
import Header from "../components/Header";
import Transactions from "../components/Transactions";
import Transfer from "../components/Transfer";
import Context from "../context/context";
import '../styles/Main.css';

function Main() {
  const {userData, balance, transactions}: any = useContext(Context);

  return(
    <div>
      {userData && balance && transactions?
      <>
        <Header/>
        <div className="main-content-container">
          <div className="transfer-container">
            <h2>Faça sua transferência</h2>
            <Transfer />
          </div>
          <Transactions />
        </div>
      </>
      : <span>Loading...</span>}
    </div>
  )
}

export default Main;
