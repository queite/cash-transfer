import { useState } from "react";
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