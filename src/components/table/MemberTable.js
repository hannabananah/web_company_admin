import useStyles from "~/styles/Table";

const MemberTable = (props) => {
  const { fetchData, isLoaded } = props;
  const classes = useStyles();

  return (
    <div>
      <figure className={classes.root}>
        <table className={classes.tableStyle}>
          <thead className={classes.theadStyle}>
            <tr>
              <td className={classes.th_td} style={{ width: "30px" }}>
                번호
              </td>
              <td
                className={classes.th_td}
                style={{
                  width: "200px",
                }}
              >
                계정
              </td>
              <td className={classes.th_td} style={{ width: "50px" }}>
                OS
              </td>
              <td className={classes.th_td} style={{ width: "100px" }}>
                생일
              </td>
              <td className={classes.th_td} style={{ width: "100px" }}>
                가입일
              </td>
              <td className={classes.th_td} style={{ width: "100px" }}>
                탈퇴일
              </td>
              <td className={classes.th_td} style={{ width: "180px" }}>
                최근 접속일
              </td>
            </tr>
          </thead>
          <tbody>
            {isLoaded &&
              fetchData?.users?.slice(0, 10).map((i, index) => {
                return (
                  <tr key={index} className={classes.tableTr}>
                    {/* 번호 */}
                    <td className={classes.td}>{i.id}</td>
                    {/* 계정 */}
                    <td className={classes.td}>{i.firstName}</td>
                    {/* OS */}
                    <td className={classes.td}>{i.bloodGroup}</td>
                    {/* 생일 */}
                    <td className={classes.td}>{i.birthDate}</td>
                    {/* 가입일 */}
                    <td className={classes.td}>{i.gender}</td>
                    {/* 탈퇴일 */}
                    <td className={classes.td}>{i.birthDate}</td>
                    {/* 최근 접속일 */}
                    <td className={classes.td}>{i.birthDate}</td>
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
    </div>
  );
};

export default MemberTable;
