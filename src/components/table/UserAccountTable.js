import { useState } from "react";

import Pagination from "react-js-pagination";

import useStyles from "~/styles/Table";

import DetailAccount from "~/components/DetailAccount";
const UserAccountTable = (props) => {
  const { changeState, fetchData, isLoaded } = props;
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

  //타인 계정 상세보기
  const [editAcc, setEditAcc] = useState(false);
  const [user, setUser] = useState([]);
  const onClickTarget = (user) => {
    setEditAcc(true);
    setUser(user);
  };

  return (
    <div>
      {editAcc ? (
        <DetailAccount user={user} backState={() => setEditAcc(false)} />
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <select>
                <option>아이디</option>
                <option>사용자명</option>
                <option>전화번호</option>
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
                  <td className={classes.td} style={{ width: "40px" }}>
                    번호
                  </td>
                  <td
                    className={classes.td}
                    style={{
                      width: "140px",
                    }}
                  >
                    아이디
                  </td>
                  <td className={classes.td} style={{ width: "100px" }}>
                    관리자 권한
                  </td>
                  <td className={classes.td} style={{ width: "120px" }}>
                    전화번호
                  </td>
                  <td className={classes.td} style={{ width: "60px" }}>
                    사용여부
                  </td>
                  <td className={classes.td} style={{ width: "150px" }}>
                    최근 접속
                  </td>
                  <td className={classes.td} style={{ width: "150px" }}>
                    수정일
                  </td>
                </tr>
              </thead>
              <tbody>
                {isLoaded &&
                  fetchData?.users?.map((i, index) => {
                    return (
                      <tr key={index} className={classes.tableTr}>
                        <td className={classes.td}>{i.id}</td>
                        <td
                          onClick={() => onClickTarget(i)}
                          className={`${classes.td} + ${classes.idLink}`}
                        >
                          {i.firstName}
                        </td>
                        <td className={classes.td}>{i.bloodGroup}</td>
                        <td className={classes.td}>{i.phone}</td>
                        <td className={classes.td}>{i.gender}</td>
                        <td className={classes.td}>{i.ip}</td>
                        <td className={classes.td}>{i.birthDate}</td>
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
      )}
    </div>
  );
};
export default UserAccountTable;
