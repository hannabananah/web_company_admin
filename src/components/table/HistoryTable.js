import useStyles from "~/styles/Table";

const HistoryTable = (props) => {
  const { changeState, fetchData, isLoaded, onClickTarget } = props;

  const classes = useStyles();

  console.log(fetchData);
  console.log(isLoaded);

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr style={{borderBottom:'1px solid rgba(188, 191, 204, 0.2)'}}>
            <td className={classes.th_td} style={{ width: "40px" }}>
              번호
            </td>

            <td
              className={classes.th_td}
              style={{
                width: "100px",
              }}
            >
              작업 날짜
            </td>

            <td className={classes.th_td} style={{ width: "80px" }}>
              관리자 ID
            </td>

            <td className={classes.th_td} style={{ width: "100px" }}>
              로그인 완료 시간
            </td>

            <td className={classes.th_td} style={{ width: "80px" }}>
              수행 시간
            </td>

            <td className={classes.th_td} style={{ width: "400px" }}>
              작업 내용
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.users?.slice(0,10).map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  <td className={classes.td}>{i.id}</td>
                  <td className={classes.td}>{i.birthDate}</td>
                  <td className={classes.td}>{i.maidenName}</td>
                  <td className={classes.td}>{i.birthDate}</td>
                  <td className={classes.td}>{i.bank.cardExpire}</td>
                  <td className={classes.td}>{i.university}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </figure>
  );
};

export default HistoryTable;
