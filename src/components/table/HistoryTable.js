import useStyles from "~/styles/Table";
import { dateFormat } from "~/util/global";

const HistoryTable = (props) => {
  const { changeState, fetchData, isLoaded, onClickTarget, totalUser, currentPage, postsPerPage } = props;

  const classes = useStyles();

  // console.log(fetchData);
  // console.log(isLoaded);

  console.log(currentPage * 10);

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead>
          <tr
            style={{
              borderBottom: "1px solid rgba(188, 191, 204, 0.2)",
              backgroundColor: "#EFEFFE",
            }}
          >
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

            <td className={classes.th_td} style={{ width: "100px" }}>
              관리자 ID
            </td>

            {/*<td className={classes.th_td} style={{ width: "100px" }}>*/}
            {/*  로그인 완료 시간*/}
            {/*</td>*/}

            {/*<td className={classes.th_td} style={{ width: "80px" }}>*/}
            {/*  수행 시간*/}
            {/*</td>*/}

            <td className={classes.th_td} style={{ width: "400px" }}>
              작업 내용
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            [...fetchData]?.reverse().map((i, index) => {
            // fetchData?.slice(0).reverse().map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  {/* 번호 */}
                  <td className={classes.td}>
                    {/* { ( index+1 ) + ((currentPage-1)*postsPerPage) } */}
                    {/* { ((totalUser/postsPerPage)-1)*index } */}
                  </td>
                  {/* 작업 날짜 */}
                  <td className={classes.td}>{dateFormat(i.createdAt)}</td>
                  {/* 관리자 ID */}
                  <td className={classes.td}>{i.user_id}</td>
                  {/*/!* 로그인 완료 시간 *!/*/}
                  {/*<td className={classes.td}>{i.birthDate}</td>*/}
                  {/*/!* 수행시간 *!/*/}
                  {/*<td className={classes.td}>{i.createdAt}</td>*/}
                  {/* 작업 내용 */}
                  <td className={classes.td}>{i.comments}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </figure>
  );
};

export default HistoryTable;
