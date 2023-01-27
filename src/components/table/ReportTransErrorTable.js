import useStyles from "~/styles/Table";
import { dateFormatNoTime } from "~/util/global";

const ReportTransErrorTable = (props) => {
  const {
    fetchData,
    isLoaded,
    onClickReceiveMsg,
    onClickEnMsg,
    onClickSendMsg,
  } = props;
  const classes = useStyles();

  console.log(fetchData);
  console.log(isLoaded);

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
            <td className={classes.th_td} style={{ width: "80px" }}>
              신고 날짜
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              신고 계정
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              원문 언어 코드
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              원문 텍스트
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              1차 영문 번역 텍스트
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
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
                  <td className={classes.td}>{i.report_idx}</td>
                  {/* 신고 날짜 */}
                  <td className={classes.td}>{dateFormatNoTime(i.reg_dttm)}</td>
                  {/* 신고 계정 */}
                  <td className={classes.td}>{i.reg_id}</td>
                  {/* 원문 언어 코드 */}
                  <td className={classes.td}>{i.receive_lang_cd}</td>
                  {/* 원문 텍스트 */}
                  <td className={classes.td}>
                    <span
                      onClick={() => onClickReceiveMsg(i)}
                      className={classes.idLink}
                    >
                      {i.receive_msg}
                    </span>
                  </td>
                  {/* 1차 영문 번역 텍스트 */}
                  <td className={classes.td}>
                    <span
                      onClick={() => onClickEnMsg(i)}
                      className={classes.idLink}
                    >
                      {i.en_msg}
                    </span>
                  </td>
                  {/* 번역 언어 코드 */}
                  <td className={classes.td}>{i.sender_lang_cd}</td>
                  {/* 번역 텍스트 */}
                  <td className={classes.td}>
                    <span
                      onClick={() => onClickSendMsg(i)}
                      className={classes.idLink}
                    >
                      {i.send_msg}
                    </span>
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

export default ReportTransErrorTable;
