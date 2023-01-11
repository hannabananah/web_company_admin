import useStyles from "~/styles/Table";

const UserAccountTable = (props) => {
  const {
    changeState,
    fetchData,
    isLoaded,
    backState,
    user,
    setUser,
    onClickTarget,
  } = props;
  const classes = useStyles();

  console.log(fetchData);
  console.log(isLoaded);

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr style={{ borderBottom: "1px solid rgba(188, 191, 204, 0.2)" }}>
            <td className={classes.th_td} style={{ width: "40px" }}>
              번호
            </td>
            <td
              className={classes.th_td}
              style={{
                width: "140px",
              }}
            >
              공지 등록일
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              App Intro 공지 노출 기간
            </td>
            <td className={classes.th_td} style={{ width: "120px" }}>
              공지 유형
            </td>
            <td className={classes.th_td} style={{ width: "60px" }}>
              공지 제목
            </td>
            <td className={classes.th_td} style={{ width: "150px" }}>
              OS
            </td>
            <td className={classes.th_td} style={{ width: "150px" }}>
              공지 활성
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.users?.slice(0, 10).map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  <td className={classes.td}>{i.id}</td>
                  <td onClick={() => onClickTarget(i)} className={classes.td}>
                    {i.firstName}
                  </td>
                  <td className={classes.td}>{i.bloodGroup}</td>
                  <td className={classes.td}>{i.phone}</td>
                  <td className={classes.td}>
                    <span className={`${classes.td} + ${classes.idLink}`}>
                      {i.gender}
                    </span>
                  </td>
                  <td className={classes.td}>{i.ip}</td>
                  <td className={classes.td}>
                    <span className={classes.activeLive}>Live</span>
                  </td>
                </tr>
              );
            })}
          {/* 검색결과가 없습니다. */}
          {/* <tr>
            <td colSpan="8" className={classes.noDataText}>
              검색 결과가 없습니다.
            </td>
          </tr> */}
        </tbody>
      </table>
    </figure>
  );
};
export default UserAccountTable;
