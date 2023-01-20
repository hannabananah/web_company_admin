import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";

import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import UserAccountTable from "~/components/table/UserAccountTable";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";
import TableHeader from "~/components/TableHeader";
import ColumnHeaderTable from "~/components/table/ColumnHeaderTable";

// filter select option
const option = [
  {
    value: "ID",
    name: "아이디",
  },
  {
    value: "phone",
    name: "전화번호",
  },
];

const UserAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [currentPage, setCurrentPage] = useState(1);
  // 필터
  const [selectVal, setSelectVal] = useState("ID");
  const [inputVal, setInputVal] = useState("");

  const postsPerPage = 10;

  const handlePageChange = (page) => {
    console.log("page  -------------------->", page);
    setCurrentPage(page);
    getTotalUserCnt();
    changePage(page);
  };

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };
  const onClickAddAccount = () => {
    // AddUserAccount.js
    navigate("/setting_admin/user_account/add");
  };
  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const getTotalUserCnt = () => {
    axios
      .get(
        `http://localhost:3001/api/admin/total?s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log('totalUser :::::::::::::::', data)
        setTotalUser(data);
      });
  };

  const changePage = (page) => {
    axios
      .get(
        `http://localhost:3001/api/admin?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("changePage data::::::::::::", data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  useEffect(() => {
    getTotalUserCnt();
    changePage(1);
  }, []);

  const onClickSearch = () => {
    getTotalUserCnt();
    changePage(1);
  }

  return (
    <div className={classes.root}>
      <TableHeader title="계정관리" />
      <FilterSection
        left={
          <>
            <SelectBox
              value={selectVal}
              onChange={onChangeSelect}
              option={option}
            />
            <input
              className={classes.filterInput}
              onChange={handleNameChange}
            />
            <button
              className={classes.searchBtn}
              onClick={onClickSearch}>
              검색
            </button>
          </>
        }
        right={
          <button onClick={onClickAddAccount} className={classes.addBtn}>
            등록
          </button>
        }
      />

      {/* <ColumnHeaderTable 
        table_header={renderHeader}   
        table_data={isLoaded && renderData}
      /> */}

      <UserAccountTable fetchData={fetchData} isLoaded={isLoaded} />

      <Pagination
        activePage={currentPage}
        totalItemsCount={totalUser} // 총 포스트 갯수
        itemsCountPerPage={postsPerPage} // 페이지당 보여줄 포스트 갯수
        pageRangeDisplayed={10} // 페이저 갯수
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default UserAccount;
