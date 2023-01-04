import { useState } from "react";

import Pagination from "react-js-pagination";

import MemberTable from "~/components/table/MemberTable";

const MemberStatus = () => {
  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  // 회원 수 임시 설정
  const memberNum = 1000000;
  // 천 단위 마다 콤마
  const cmemberNum = memberNum
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <select>
          <option>전화번호</option>
          <option>이메일</option>
        </select>
        <input />

        <button>검색</button>
      </div>
      <div>
        <p>
          총 회원 수 : <span>{cmemberNum} 명</span>
        </p>
      </div>

      <MemberTable />
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
