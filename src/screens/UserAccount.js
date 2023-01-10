import { useEffect, useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Add";
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
  };

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  console.log(fetchData);
  console.log(isLoaded);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <UserAccAdd backState={backState} />
      ) : editAcc ? (
        <DetailAccount backState={goBackTable} user={user} />
      ) : (
        <div style={{ maxWidth: "1320px", width: "100%" }}>
          <section className={classes.titleSection}>
            <h2 className={classes.mainTitle}>계정관리</h2>
          </section>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div>
              <select>
                <option>아이디</option>
                <option>사용자명</option>
                <option>전화번호</option>
              </select>
              <input className={classes.input} />
              <button className={classes.searchBtn}>검색</button>
            </div>
            <button onClick={changeState} className={classes.addBtn}>
              등록
            </button>
          </div>
          <UserAccountTable
            fetchData={fetchData}
            isLoaded={isLoaded}
            changeState={changeState}
            user={user}
            setUser={setUser}
            onClickTarget={onClickTarget}
          />
          <Pagination
            activePage={currentPage}
            totalItemsCount={postsPerPage * totalPage} // 총 포스트 갯수
            itemsCountPerPage={postsPerPage} // 페이지당 보여줄 포스트 갯수
            pageRangeDisplayed={10} // 페이저 갯수
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
export default UserAccount;
