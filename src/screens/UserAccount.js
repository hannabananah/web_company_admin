import { useEffect, useState } from "react";

import useStyles from "~/styles/AddUserAccount";
import "~/styles/Toggle.css";
import UserAccAdd from "~/components/AddUserAccount";
import UserAccTable from "~/components/table/UserAccountTable";

const UserAccount = () => {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const changeState = () => {
    setAdd(true);
  };
  const backState = () => {
    setAdd(false);
  };

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);

  console.log(fetchData);
  console.log(isLoaded);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <UserAccAdd fetchData={fetchData} backState={backState} />
      ) : (
        <UserAccTable
          fetchData={fetchData}
          isLoaded={isLoaded}
          changeState={changeState}
        />
      )}
    </div>
  );
};
export default UserAccount;
