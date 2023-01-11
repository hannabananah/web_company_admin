import { useEffect, useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Add";
import MemberTable from "~/components/table/MemberTable";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";

// filter select option
const option = [
  {
    value: "Phone",
    name: "전화번호",
  },
  {
    value: "Email",
    name: "이메일",
  },
];

const MemberStatus = () => {
  const classes = useStyles();

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //더미데이터
  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);

  // 필터
  const [selectVal, setSelectVal] = useState("Phone");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  // 총 회원 수
  const cmemberNum = +fetchData.limit;
  // 천 단위 마다 콤마
  cmemberNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={classes.root}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>App 버전 관리</h2>
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
          <p className={classes.memberNum}>
            총 회원 수 :<span> {cmemberNum}명</span>
          </p>
        }
      />

      <MemberTable fetchData={fetchData} isLoaded={isLoaded} />
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
export default MemberStatus;
