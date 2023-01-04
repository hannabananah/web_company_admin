import useStyles from "~/styles/Table";

const MemberTable = (props) => {
  const { fetchData, isLoaded } = props;
  const classes = useStyles();

  // 천 단위 마다 콤마
  const cmemberNum = fetchData.limit
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div>
      <div>
        <p>
          총 회원 수 : <span>{cmemberNum} 명</span>
        </p>
      </div>
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
          <tbody>
            {isLoaded &&
              fetchData?.users?.map((i, index) => {
                return (
                  <tr key={index} className={classes.tableTr}>
                    <td className={classes.td}>{i.id}</td>
                    <td className={`${classes.td} + ${classes.idLink}`}>
                      {i.firstName}
                    </td>
                    <td className={classes.td}>{i.bloodGroup}</td>
                    <td className={classes.td}>{i.birthDate}</td>
                    <td className={classes.td}>{i.gender}</td>
                    <td className={classes.td}>{i.birthDate}</td>
                    <td className={classes.td}>{i.birthDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </figure>
    </div>
  );
};

export default MemberTable;
