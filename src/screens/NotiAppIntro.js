import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";

import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import NoticeIntroTable from "~/components/table/NoticeIntroTable";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import SearchInput from "~/components/SearchInput";
import { SearchBtn, SaveBtn } from "~/components/button/Buttons";

// filter select option
const option = [
  {
    value: "os",
    name: "OS",
  },
  {
    value: "emergency",
    name: "긴급",
  },
  {
    value: "normal",
    name: "일반",
  },
];

const NotiAppIntro = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const onClickAddNoti = () => {
    // NotiAppIntroAdd.js
    navigate("/notice/app_intro/add");
  };

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 필터
  const [selectVal, setSelectVal] = useState("os");
  const [inputVal, setInputVal] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
    changePage(page);
    // console.log("page  -------------------->", page);
  };
  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
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
        console.log(data);
        setTotalUser(data.userCount);
        // console.log('totalUser :::::::::::::::', data.userCount)
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

  return (
    <div className={classes.root}>
      <TableHeader title="App Intro 공지" />
      <FilterSection
        left={
          <>
            <SelectBox
              value={selectVal}
              onChange={onChangeSelect}
              option={option}
            />
            <SearchInput handleNameChange={handleNameChange} />
            <SearchBtn />
          </>
        }
        right={<SaveBtn onClick={onClickAddNoti} />}
      />

      <NoticeIntroTable fetchData={fetchData} isLoaded={isLoaded} />
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
  );
};
export default NotiAppIntro;
