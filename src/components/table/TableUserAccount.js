import { useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Table";
const TableUserAccount = ({ changeState }) => {
  const classes = useStyles();
  
  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  return (
    <figure className={classes.root}>
      <button onClick={changeState}>등록</button>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr>
            <td className={classes.td} style={{ width: "100px" }}>
              번호
            </td>

            <td
              className={classes.td}
              style={{
                width: "150px",
              }}
            >
              작업 날짜
            </td>

            <td className={classes.td} style={{ width: "120px" }}>
              관리자 ID
            </td>

            <td className={classes.td} style={{ width: "120px" }}>
              로그인 완료 시간
            </td>

            <td className={classes.td} style={{ width: "120px" }}>
              수행 시간
            </td>

            <td className={classes.td} style={{ width: "150px" }}>
              작업 내용
            </td>
          </tr>
        </thead>

        {/* <tbody>
            {rowsData?.map((i,index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  <td className={classes.tableTd}>
                    <span className="cell">
                      {i.comment_type == 1 ? "댓글" : "답글"}
                    </span>
                  </td>

                  <td>
                    
                    <>
                      <p className="cell">{i.profile_name}</p>
                    </>
                  </td>

                  <td>
                    <span className="cell" onClick={() => setTrans(!trans)}>
                      {trans ? i.comment : i.comment_trans}
                    </span>
                  </td>

                  <td>
                    <span className="cell">{i.comment_count}</span>
                  </td>

                  <td>
                    <span className="cell" style={{ textAlign: "center" }}>
                      {`${i.reg_dt}`.slice(0, 10)}
                      <br />
                      {`${i.reg_dt}`.slice(11, 16)}
                    </span>
                  </td>

                  <td>
                    <span
                      className="cellActionBtn"
                      onClick={() => detailPosts(i)}
                    >
                      게시물 자세히 보기
                    </span>
                  </td>

                  <td>
                    <button
                      className="cellActionBtn"
                      onClick={() => deleteCommentsModal(i.cidx)}
                    >
                      댓글 삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody> */}
      </table>
      <Pagination
        activePage={currentPage}
        totalItemsCount={postsPerPage * totalPage} // 총 포스트 갯수
        itemsCountPerPage={postsPerPage} // 페이지당 보여줄 포스트 갯수
        pageRangeDisplayed={10} // 페이저 갯수
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </figure>
  );
};
export default TableUserAccount;
