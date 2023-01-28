import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import useStyles from "~/styles/Add";
import MemberTable from "~/components/table/MemberTable";
import SelectBox from "~/components/SelectBox";
import FilterSection from "~/components/FilterSection";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global"

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
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    changePage(page);
    console.log("page  -------------------->", page);
  };

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // 필터
  const [selectVal, setSelectVal] = useState("Phone");
  const [inputVal, setInputVal] = useState("");

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const getTotalUserCnt = () => {
    axios
      .get(
        `${g.base_url}api/user/totalUserCnt?s=${selectVal}&v=${inputVal}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log('getTotalUserCnt________',data.userCount);
        setTotalUser(data.userCount);
      });
  };

  const changePage = (page) => {
    axios
      .get(
        `${g.base_url}api/user/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}`,
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

    // fetch("https://dummyjson.com/users/")
    //   .then((res) => res.json())
    //   .then((json) => setFetchData(json))
    //   .then(setIsLoaded(true));
  }, []);

  const onChangeSelect = (event) => {
    console.log(event.target.value);
    setSelectVal(event.target.value);
  };

  // 총 회원 수
  // const 총 = +fetchData.limit;
  // 천 단위 마다 콤마
  // cmemberNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={classes.root}>
      <TableHeader title="회원현황" />
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
                getTotalUserCnt();
                changePage(1);
              }}
            >
              검색
            </button>
            <p className={classes.memberNum}>
            총 회원 수 :<span> {totalUser.toLocaleString()}명</span>
            </p>
          </>
        }
      />

      <MemberTable fetchData={fetchData} isLoaded={isLoaded} currentPage={currentPage} postsPerPage={postsPerPage} totalUser={totalUser}/>
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

export default MemberStatus;
