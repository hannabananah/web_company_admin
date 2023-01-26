import useStyles from "~/styles/Table";
import { dateFormat } from "~/util/global";

const ReportTransErrorTable = (props) => {
  const { fetchData, isLoaded, onClickTarget } = props;
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
            <td className={classes.th_td} style={{ width: "80px" }}>
              신고 날짜
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              신고 계정
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              원문 언어 코드
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              원문 텍스트
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              1차 영문 번역 텍스트
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              번역 언어 코드
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              번역 텍스트
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  {/* 번호 */}
                  <td className={classes.td}>{i.version_idx}</td>
                  {/* 신고 날짜 */}
                  <td className={classes.td}>{dateFormat(i.reg_dttm)}</td>
                  {/* 신고 계정 */}
                  <td className={classes.td}>{i.store}</td>
                  {/* 원문 언어 코드 */}
                  <td className={classes.td}>{i.os}</td>
                  {/* 원문 텍스트 */}
                  <td className={classes.td}>
                    <span
                      onClick={() => onClickTarget(i)}
                      className={classes.idLink}
                    >
                      {i.late_app_version}
                    </span>
                  </td>
                  {/* 1차 영문 번역 텍스트 */}
                  <td className={classes.td}>{i.min_app_version}</td>
                  {/* 번역 언어 코드 */}
                  <td className={classes.td}>{i.update_type}</td>
                  {/* 번역 텍스트 */}
                  <td className={classes.td}>{dateFormat(i.upt_dttm)}</td>
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

export default ReportTransErrorTable;
