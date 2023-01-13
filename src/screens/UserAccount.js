import { useEffect, useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import UserAccAdd from "~/components/AddUserAccount";
import UserAccountTable from "~/components/table/UserAccountTable";
import DetailAccount from "~/components/DetailAccount";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";

// filter select option
const option = [
  {
    value: "ID",
    name: "아이디",
  },
  {
    value: "name",
    name: "사용자명",
  },
  {
    value: "phone",
    name: "전화번호",
  },
];

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
  // console.log(isLoaded);

  // 필터
  const [selectVal, setSelectVal] = useState("ID");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {add ? (
        <UserAccAdd backState={backState} />
      ) : editAcc ? (
        <DetailAccount backState={goBackTable} user={user} />
      ) : (
        <div className={classes.root}>
          <section className={classes.titleSection}>
            <h2 className={classes.mainTitle}>계정관리</h2>
          </section>
          <FilterSection
            left={
              <>
                <SelectBox
                  value={selectVal}
                  onChange={onChangeSelect}
                  option={option}
                />
                <input className={classes.filterInput} />
                <button className={classes.searchBtn}>검색</button>
              </>
            }
            right={
              <button onClick={changeState} className={classes.addBtn}>
                등록
              </button>
            }
          />
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
