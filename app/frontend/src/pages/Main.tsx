import { useContext } from "react";
import Header from "../components/Header";
import Transfer from "../components/Transfer";
import Context from "../context/context";

function Main() {
  const {userData, balance}: any = useContext(Context);

  return(
    <div>
      {userData && balance
      ? <>
      <Header/>
      <Transfer /></>
      : <span>Loading...</span>}

    </div>
  )
}

export default Main;