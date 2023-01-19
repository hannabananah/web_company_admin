import HistoryTable from "~/components/table/HistoryTable";
import React, { Fragment, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Pagination from "react-js-pagination";
import "~/styles/pagination.css";
import { useStyles } from "~/styles/History";
import images from "~/assets/js/Images";
import SelectBox from "~/components/SelectBox";
import DatePicker from "~/components/DatePicker";
import FilterSection from "~/components/FilterSection";
import TableHeader from "~/components/TableHeader";
import axios from "axios";

// filter select option
const option = [
  {
    value: "id",
    name: "아이디",
  },
  {
    value: "contents",
    name: "내용",
  },
];

const History = () => {
  const classes = useStyles();
  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 데이트픽커
  let now = dayjs().format("YYYY-MM-DD");
  const [start, setStart] = useState(dayjs(now));
  const [end, setEnd] = useState(start);
  //더미데이터
  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    changePage(1);
    setEnd(start);
  }, [start]);

  const getTotalHistry = () => {
    axios
      .get(
        `http://localhost:3001/api/access/total?s=${selectVal}&v=${inputVal}&st=${start.format(
          "YYYY-MM-DD"
        )}&et=${end.format("YYYY-MM-DD")}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setTotalUser(data.cnt);
      });
  };

  const changePage = (page) => {
    getTotalHistry();
    axios
      .get(
        `http://localhost:3001/api/access/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}&st=${start.format(
          "YYYY-MM-DD"
        )}&et=${end.format("YYYY-MM-DD")}`,
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

    const downloadExcel = () => {
        axios
            .get(`http://localhost:3001/api/access/excel?s=${selectVal}&v=${inputVal}&st=${start.format("YYYY-MM-DD")}&et=${end.format("YYYY-MM-DD")}`, {
                responseType: 'blob',
                headers: {
                    Authorization:
                        "Bearer " +
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
                },
            })
            .then((res) => {
                const url = URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', `access-${start.format("YYYY-MM-DD")}-${end.format("YYYY-MM-DD")}.xlsx`)
                document.body.appendChild(link)
                link.click()
            })
            .catch((error) => {
                console.log(error);
            });
    }

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  useEffect(() => {
    changePage(1);
  }, []);

  // 필터
  const [selectVal, setSelectVal] = useState("id");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  return (
    <div className={classes.root}>
      <TableHeader title="관리 이력" />
      <FilterSection
        left={
          <>
            <SelectBox
              value={selectVal}
              onChange={onChangeSelect}
              option={option}
            />
            <input className={classes.input} onChange={handleNameChange} />
          </>
        }
        right={
          <>
            <DatePicker
              start={start}
              setStart={setStart}
              end={end}
              setEnd={setEnd}
            />


            <button className={classes.searchBtn}
                onClick={() => {
                    changePage(1);
                }}
            >검색</button>

          <button className={classes.searchBtn}
                  onClick={() => {
                      downloadExcel();
                  }}
          >엑셀다운로드</button>
          </>
        }
      />
      <HistoryTable fetchData={fetchData} isLoaded={isLoaded} />
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
export default History;
