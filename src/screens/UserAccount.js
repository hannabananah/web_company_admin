import { useState } from "react";

import useStyles from "~/styles/AddUserAccount";
import "~/styles/Toggle.css";
import UserAccAdd from "~/components/AddUserAccount";
import UserAccTable from "~/components/table/UserAccountTable.js";

const UserAccount = () => {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const changeState = () => {
    setAdd(true);
  };
  const backState = () => {
    setAdd(false);
  };

  return (
    <div style={{ width: "100%" }}>
      {add ? (
        <UserAccAdd backState={backState} />
      ) : (
        <UserAccTable changeState={changeState} />
      )}
    </div>
  );
};
export default UserAccount;
