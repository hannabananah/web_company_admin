import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import SearchInput from "~/components/SearchInput";
import { SearchBtn, SaveBtn } from "~/components/button/Buttons";
import "~/styles/Toggle.css";
import NoticeIntroTable from "~/components/table/NoticeIntroTable";
import { useNavigate } from "react-router-dom";

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
    navigate('/notice/app_intro/add')
  }

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //더미데이터
  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log("page  -------------------->", page);
  };
  // 필터
  const [selectVal, setSelectVal] = useState("os");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

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
            <SearchInput />
            <SearchBtn />
          </>
        }
        right={<SaveBtn onClick={onClickAddNoti} />}
      />
      <NoticeIntroTable
        fetchData={fetchData}
        isLoaded={isLoaded}
        user={user}
        setUser={setUser}
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
  );
};
export default NotiAppIntro;
