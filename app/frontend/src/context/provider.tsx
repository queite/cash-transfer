import { useEffect, useState } from "react";
import { IBalance, ITransactions, IUserData } from "../@types";
import Context from "./context";

type Props = {
  children?: React.ReactNode,
};

const Provider = ({children}: Props) => {
  const [userData, setUserData] = useState<IUserData>()
  const [token, setToken] = useState<string>()
  const [transactions, setTransactions] = useState<ITransactions[]>([])
  const [balance, setBalance] = useState<IBalance>()

useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const savedBalance = localStorage.getItem("balance");
    const savedtransactions = localStorage.getItem("transactions");
    if (loggedInUser && savedBalance && savedtransactions) {
      setUserData(JSON.parse(loggedInUser));
      setBalance(JSON.parse(savedBalance));
      setTransactions(JSON.parse(savedtransactions));
    }
  }, []);

  const data = {
    token,
    setToken,
    userData,
    setUserData,
    balance,
    setBalance,
    transactions,
    setTransactions,
  }

  return(
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

export default Provider