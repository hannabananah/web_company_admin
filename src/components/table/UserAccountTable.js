import { useNavigate } from "react-router-dom";
import useStyles from "~/styles/Table";
import { dateFormat } from "~/util/global";

const UserAccountTable = (props) => {
  const {
    fetchData,
    isLoaded,
  } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  // console.log(fetchData);
  // console.log(isLoaded);

  const onClickTarget = (i) => {
    // UserAccountDetails.js
    navigate('/setting_admin/user_account/details/', { state: i })
  }

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
              아이디
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              관리자 권한
            </td>
            <td className={classes.th_td} style={{ width: "120px" }}>
              전화번호
            </td>
            <td className={classes.th_td} style={{ width: "60px" }}>
              사용여부
            </td>
            <td className={classes.th_td} style={{ width: "150px" }}>
              최근 접속
            </td>
            <td className={classes.th_td} style={{ width: "150px" }}>
              수정일
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  <td className={classes.td}>{i.adminKey}</td>
                  <td onClick={() => onClickTarget(i)}
                    className={`${classes.td} + ${classes.idLink}`}
                  >
                    {i.id}
                  </td>
                  <td className={classes.td}>{i.grade}</td>
                  <td className={classes.td}>{i.phone}</td>
                  <td className={classes.td}>
                    <span
                      className={
                        i.use_yn == "N" ? classes.unuseBtn : classes.useBtn
                      }
                    >
                      {i.use_yn}
                    </span>
                  </td>
                  <td className={classes.td}>{i.remote_ip}</td>
                  {/* <td className={classes.td}>{dateFormat(i.updatedAt)}</td> */}
                  <td className={classes.td}>{dateFormat(i.updatedAt)}</td>
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
