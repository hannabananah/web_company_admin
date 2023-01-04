import { useEffect, useState } from "react";

import useStyles from "~/styles/AddUserAccount";
import "~/styles/Toggle.css";
import UserAccAdd from "~/components/AddUserAccount";
import UserAccountTable from "~/components/table/UserAccountTable";
import DetailAccount from "~/components/DetailAccount";

const UserAccount = () => {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const [user, setUser] = useState([]);
  
  const backState = () => {
    setAdd(false); //등록 화면 -> 디폴트 페이지
  };
  
  const changeState = () => {
    setAdd(true); // 디폴트 페이지 -> 등록 화면
  };

  //타인 계정 상세보기
  const [editAcc, setEditAcc] = useState(false);

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //더미데이터
  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);

  
  const onClickTarget = (user) => {
    setEditAcc(true);
    setUser(user);
  };
  const goBackTable = () => {
    setEditAcc(false);
  }


  console.log(fetchData);
  console.log(isLoaded);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <UserAccAdd backState={backState} />
      ) : (
        editAcc ?
        <DetailAccount backState={goBackTable} user={user} />
        :
        <UserAccountTable
          fetchData={fetchData}
          isLoaded={isLoaded}
          changeState={changeState}
          user={user}
          setUser={setUser}
          onClickTarget={onClickTarget}
        />
      )}
    </div>
  );
};
export default UserAccount;
