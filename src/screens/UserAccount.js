import { useState } from "react";
import useStyles from "../styles/AddUserAccount";
import "../styles/Toggle.css";
import UserAccAdd from "../components/AddUserAccount";
import UserAccTable from "../components/table/TableUserAccount.js";

const UserAccount = () => {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const changeState = () => {
    setAdd(true);
  };
  const backState = () => {
    setAdd(false);
  };

  console.log(add);

  return (
    <div style={{ width: "100%" }}>
      <button onClick={changeState}>등록</button>
      {add ? <UserAccAdd backState={backState} /> : <UserAccTable />}
    </div>
  );
};
export default UserAccount;
