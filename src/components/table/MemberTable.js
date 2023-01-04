import useStyles from "../../styles/Table";

const MemberTable = () => {
  const classes = useStyles();

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr>
            <td className={classes.td} style={{ width: "30px" }}>
              번호
            </td>
            <td
              className={classes.td}
              style={{
                width: "200px",
              }}
            >
              계정
            </td>
            <td className={classes.td} style={{ width: "50px" }}>
              OS
            </td>
            <td className={classes.td} style={{ width: "100px" }}>
              생일
            </td>
            <td className={classes.td} style={{ width: "100px" }}>
              가입일
            </td>
            <td className={classes.td} style={{ width: "100px" }}>
              탈퇴일
            </td>
            <td className={classes.td} style={{ width: "180px" }}>
              최근 접속일
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
    </figure>
  );
};

export default MemberTable;
