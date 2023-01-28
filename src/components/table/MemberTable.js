import useStyles from "~/styles/Table";
import { dateFormat, renderBirth } from "~/util/global";

const MemberTable = (props) => {
  const { fetchData, isLoaded, totalUser,currentPage,postsPerPage } = props;
  const classes = useStyles();

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr style={{ borderBottom: "1px solid rgba(188, 191, 204, 0.2)", backgroundColor: "#EFEFFE", }}>
            <td className={classes.th_td} style={{ width: "40px" }}>
              번호
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              전화번호
            </td>
            <td className={classes.th_td} style={{ width: "40px" }}>
              국가
            </td>
            <td
              className={classes.th_td}
              style={{
                width: "150px",

              }}
            >
              계정
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              OS
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              생일
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              가입일
            </td>
            {/*<td className={classes.th_td} style={{ width: "100px" }}>*/}
            {/*  탈퇴일*/}
            {/*</td>*/}
            <td className={classes.th_td} style={{ width: "100px" }}>
              최근 접속일
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  {/* 번호 */}
                  <td className={classes.td}>{ ((totalUser - index) - ((currentPage - 1) * postsPerPage)) }</td>
                  {/* 전화번호 */}
                  <td className={classes.td}>{i.phone_no}</td>
                  {/* 국기 */}
                  <td className={classes.td}>{i.locale_cd}</td>
                  {/* 계정 */}
                  <td className={classes.td}>{i.user_id}</td>
                  {/* OS */}
                  {/* <td className={classes.td}>{i.device_type}</td> */}
                  <td className={classes.td}>Android</td>
                  {/* 생일 */}
                  {/* <td className={classes.td}>{renderBirth(i.birthday)}</td> */}
                  <td className={classes.td}>1999-03-01</td>
                  {/* 가입일 */}
                  <td className={classes.td}>{dateFormat(i.reg_dttm)}</td>
                  {/*/!* 탈퇴일 *!/*/}
                  {/*<td className={classes.td}>{i.last_login_dttm}</td>*/}
                  {/* 최근 접속일 */}
                  <td className={classes.td}>
                    {dateFormat(i.last_login_dttm)}
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

export default MemberTable;
