import { useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Table";

const AppVersionTable = (props) => {
  const { changeState, fetchData, isLoaded, onClickTarget } = props;
  const classes = useStyles();

  console.log(fetchData);
  console.log(isLoaded);

  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5); //임시
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("page  -------------------->", page);
  };

  return (
    <div style={{ maxWidth: "1320px", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <select>
            <option>스토어</option>
            <option>OS</option>
          </select>
          <input />
          <button>검색</button>
        </div>
        <button onClick={changeState}>등록</button>
      </div>
      <figure className={classes.root}>
        <table className={classes.tableStyle}>
          <thead className={classes.theadStyle}>
            <tr>
              <td className={classes.td} style={{ width: "30px" }}>
                번호
              </td>
              <td className={classes.td} style={{ width: "100px" }}>
                등록일
              </td>
              <td className={classes.td} style={{ width: "80px" }}>
                스토어
              </td>
              <td className={classes.td} style={{ width: "80px" }}>
                OS
              </td>
              <td className={classes.td} style={{ width: "80px" }}>
                최신 APP 버전
              </td>
              <td className={classes.td} style={{ width: "100px" }}>
                최소 앱 버전
              </td>
              <td className={classes.td} style={{ width: "150px" }}>
                업데이트 유형
              </td>
              <td className={classes.td} style={{ width: "140px" }}>
                업데이트
              </td>
            </tr>
          </thead>
          <tbody>
            {isLoaded &&
              fetchData?.users?.map((i, index) => {
                return (
                  <tr key={index} className={classes.tableTr}>
                    <td className={classes.td}>{i.id}</td>
                    <td className={classes.td}>{i.birthDate}</td>
                    <td className={classes.td}>{i.bloodGroup}</td>
                    <td className={classes.td}>{i.eyeColor}</td>
                    <td
                      className={`${classes.td} + ${classes.idLink}`}
                      onClick={() => onClickTarget(i)}
                    >
                      {i.ein}
                    </td>
                    <td className={classes.td}>{i.gender}</td>
                    <td className={classes.td}>{i.ein}</td>
                    <td className={classes.td}>
                      <span className={classes.uptActiveBlue}>Update</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
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
    </div>
  );
};

export default AppVersionTable;
