import { useEffect, useState } from "react";

import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import AddAppVersion from "~/components/AddAppVersion";
import AppVersionTable from "~/components/table/AppVersionTable";
import DetailStore from "~/components/DetailStore";

const AppVersion = () => {
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
  };

  console.log(fetchData);
  console.log(isLoaded);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <AddAppVersion backState={backState} />
      ) : editAcc ? (
        <DetailStore backState={goBackTable} user={user} />
      ) : (
        <AppVersionTable
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
export default AppVersion;
