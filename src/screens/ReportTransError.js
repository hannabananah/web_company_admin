import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import Pagination from "react-js-pagination";
import axios from "axios";

import { g } from "~/util/global";
import "~/styles/pagination.css";
import useStyles from "~/styles/Add";

import ReportTransErrorTable from "~/components/table/ReportTransErrorTable";
import SelectBox from "~/components/SelectBox";
import DatePicker from "~/components/DatePicker";
import FilterSection from "~/components/FilterSection";
import TableHeader from "~/components/TableHeader";

// filter select option
const option = [
  {
    value: "account",
    name: "신고 계정",
  },
  {
    value: "origin_lang_code",
    name: "원문 언어 코드",
  },
  {
    value: "content",
    name: "내용",
  },
];

const ReportTransError = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // 페이지네이션
  const [totalUser, setTotalUser] = useState(0); //임시
  // const [totalPage, setTotalPage] = useState(); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 데이트픽커
  let newYear = "2023-01-01";
  let now = dayjs().format("YYYY-MM-DD");
  const [start, setStart] = useState(dayjs(newYear));
  const [end, setEnd] = useState(dayjs(now));

  const [fetchData, setFetchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputVal, setInputVal] = useState("");

  // 필터
  const [selectVal, setSelectVal] = useState("account");

  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  };

  const getTotalTransError = () => {
    axios
      .get(
        `${
          g.base_url
        }api/error/total?s=${selectVal}&v=${inputVal}&st=${start.format(
          "YYYY-MM-DD"
        )}&et=${end.format("YYYY-MM-DD")}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("getTotalTransError data::::::", data);
        setTotalUser(data);
      });
  };

  const changePage = (page) => {
    getTotalTransError();
    axios
      .get(
        `${
          g.base_url
        }api/error/pagination?size=${postsPerPage}&page=${page}&s=${selectVal}&v=${inputVal}&st=${start.format(
          "YYYY-MM-DD"
        )}&et=${end.format("YYYY-MM-DD")}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log("changePage data::::", data);
        setFetchData(data);
      })
      .then(setIsLoaded(true));
  };

  const handleNameChange = (e) => {
    setInputVal(e.target.value);
  };

  const handlePageChange = (page) => {
    console.log("page  -------------------->", page);
    setCurrentPage(page);
    changePage(page);
  };

  useEffect(() => {
    changePage(1);
  }, []);

  const onClickSearch = () => {
    setCurrentPage(1);
    changePage(1);
  };

  //원문 텍스트
  const onClickReceiveMsg = (i) => {
    navigate(`/service/report_translation_error/orgin_contents_details`, {
      state: { state: i, urlParam: i.id },
    });
  };
  //1차 영문 번역 텍스트
  const onClickEnMsg = (i) => {
    navigate(`/service/report_translation_error/english_contents_details`, {
      state: { state: i, urlParam: i.id },
    });
  };
  //번역 텍스트
  const onClickSendMsg = (i) => {
    navigate(`/service/report_translation_error/translation_contents_details`, {
      state: { state: i, urlParam: i.id },
    });
  };

  return (
    <div className={classes.root}>
      <TableHeader title="번역 이상 신고" />
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

            <button className={classes.searchBtn} onClick={onClickSearch}>
              검색
            </button>
          </>
        }
      />
      <ReportTransErrorTable
        fetchData={fetchData}
        isLoaded={isLoaded}
        onClickReceiveMsg={onClickReceiveMsg}
        onClickEnMsg={onClickEnMsg}
        onClickSendMsg={onClickSendMsg}
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
export default ReportTransError;
