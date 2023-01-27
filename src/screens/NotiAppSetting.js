import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";
import { g } from "~/util/global";
import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";

import NoticeSettingTable from "~/components/table/NoticeSettingTable";
import TableHeader from "~/components/TableHeader";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";

// filter select option
const option = [
  {
    value: "OS",
    name: "OS",
  },
  {
    value: "title",
    name: "공지 제목",
  },
];

const NotiAppSetting = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 필터
  const [selectVal, setSelectVal] = useState("OS");
  const [inputVal, setInputVal] = useState("");

  const getAppSettingNotice = () => {
    axios
      .get(`${g.base_url}api/sysnotice/total?s=${selectVal}&v=${inputVal}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        console.log("getAppSettingNotice:::::", data);
        setTotalUser(data);
      });
  };

  const changePage = (page) => {
    axios
      .get(
        `${g.base_url}api/sysnotice/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("changePage::::::::", data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    changePage(page);
    // console.log("page  -------------------->", page);
  };

  const onClickAddVer = () => {
    navigate("/notice/app_setting/add");
  };

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  const onClickSearch = () => {
    getAppSettingNotice();
    handlePageChange(1);
  };

  const onClickTarget = (user) => {
    navigate("/notice/app_setting/details", { state: user });
  };

  useEffect(() => {
    getAppSettingNotice();
    changePage(1);
  }, []);

  return (
    <div className={classes.root}>
      <TableHeader title="App 설정 공지" />
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
            <button className={classes.searchBtn} onClick={onClickSearch}>
              검색
            </button>
          </>
        }
        right={
          <button onClick={onClickAddVer} className={classes.addBtn}>
            등록
          </button>
        }
      />
      <NoticeSettingTable
        fetchData={fetchData}
        isLoaded={isLoaded}
        onClickTarget={onClickTarget}
      />
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
export default NotiAppSetting;
