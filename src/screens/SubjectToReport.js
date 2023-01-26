import { useEffect, useState } from "react";
import useStyles from "~/styles/Add";
import axios from "axios";
import TableHeader from "~/components/TableHeader";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import ReportTable from "~/components/table/ReportTable";
import Pagination from "react-js-pagination";

// filter select option
const option = [
  {
    value: "phone",
    name: "전화번호",
  },
  {
    value: "email",
    name: "이메일",
  },
];

const SubjectToReport = () => {
  const classes = useStyles();
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // 필터
  const [selectVal, setSelectVal] = useState("phone");
  const [inputVal, setInputVal] = useState("");
  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const onChangeSelect = (event) => {
    console.log(event.target.value);
    setSelectVal(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // changePage(page);
    // console.log("page  -------------------->", page);
  };

  const getTotalUserCnt = () => {
    // axios
    //   .get(
    //     `http://localhost:3001/api/warning/total?s=${selectVal}&v=${inputVal}&st=${''}&et=${''}`,
    //     {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("access_token"),
    //       },
    //     }
    //   )
    //   .then(({ data }) => {
    //     console.log('getTotalUserCnt________',data.userCount);
    //     setTotalUser(data.userCount);
    //   });
  };

  const changePage = (page) => {
    axios
      .get(
        `http://localhost:3001/api/warning/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  useEffect(() => {
    getTotalUserCnt();
    changePage(1);
  }, []);

  return (
    <div>
      <TableHeader title="신고 대상 회원" />
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
              onClick={() => {
                // changePage(1);
              }}
            >
              검색
            </button>
            <p className={classes.memberNum}>
            {/* 총 회원 수 :<span> {totalUser.toLocaleString()}명</span> */}
            </p>
          </>
        }
      />

      <ReportTable 
        fetchData={fetchData} 
        isLoaded={isLoaded}
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
  )
}
export default SubjectToReport;