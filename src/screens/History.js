import HistoryTable from "~/components/table/HistoryTable";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Pagination from "react-js-pagination";
import "~/styles/pagination.css";
import {useStyles}from "~/styles/History";
import images from "~/assets/js/Images";
import SelectBox from "~/components/SelectBox";
import DatePicker from "~/components/DatePicker";

// filter select option
const option = [
  {
    value:"id",
    name:"아이디"
  },
  {
    value:"contents",
    name:"내용"
  },
]

const History = () => {
  const classes = useStyles();
  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  // 데이트픽커
  let now = dayjs().format("YYYY-MM-DD");
  const [start, setStart] = useState(dayjs(now));
  const [end, setEnd] = useState(start);

  useEffect(() => {
    setEnd(start);
  }, [start]);

  //더미데이터
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((res) => res.json())
      .then((json) => setFetchData(json))
      .then(setIsLoaded(true));
  }, []);

  const [selectVal, setSelectVal] = useState('id');

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  return (
    <div className={classes.root}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>관리 이력</h2>
      </section>

      <section className={classes.filterSection}>
        <div className={classes.filterUnit}> 
          <SelectBox value={selectVal} onChange={onChangeSelect} option={option} />
          <input className={classes.input} />
        </div>
        <div className={classes.filterUnit}>
          <DatePicker 
            start={start} 
            setStart={setStart} 
            end={end} 
            setEnd={setEnd} 
          />
          <button className={classes.searchBtn}>검색</button>
        </div>
      </section>

      <HistoryTable fetchData={fetchData} isLoaded={isLoaded} />

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
export default History;
