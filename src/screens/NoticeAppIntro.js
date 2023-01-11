import { useState } from "react";
import useStyles from "~/styles/NoticeAppIntro";
import TableHeader from "~/components/TableHeader";
import FilterSection from "~/components/FilterSection";
import SelectBox from "~/components/SelectBox";
import SearchInput from "~/components/SearchInput";
import { SearchBtn, SaveBtn } from "~/components/button/Buttons";
import Pagination from "react-js-pagination";

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

const NoticeAppIntro = () => {
  const classes = useStyles();

  // select
  const [selectVal, setSelectVal] = useState('os')
  const onChangeSelect = (event) => {
    setSelectVal(event.target.value);
  }

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // console.log("page  -------------------->", page);
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
        right={<SaveBtn />}
      />

      {/* 테이블 */}

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
  )
}
export default NoticeAppIntro;