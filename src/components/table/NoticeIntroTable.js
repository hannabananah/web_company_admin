import { useNavigate } from "react-router-dom";

import { dateFormat } from "~/util/global";
import useStyles from "~/styles/Table";

const NoticeIntroTable = (props) => {
  const {
    fetchData,
    isLoaded,
    openModal,
    totalUser,
    currentPage,
    postsPerPage,
  } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  console.log(fetchData);
  console.log(isLoaded);

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr
            style={{
              borderBottom: "1px solid rgba(188, 191, 204, 0.2)",
              backgroundColor: "#FFF8F1",
            }}
          >
            <td className={classes.th_td} style={{ width: "40px" }}>
              번호
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              공지 등록일
            </td>
            <td className={classes.th_td} style={{ width: "150px" }}>
              App Intro 공지 노출 기간
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              공지 유형
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              공지 제목
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              OS
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              공지 활성
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  {/* 번호 */}
                  <td className={classes.td}>
                    {totalUser - index - (currentPage - 1) * postsPerPage}
                  </td>
                  {/* 공지 등록일 */}
                  <td className={classes.td}>{dateFormat(i.reg_dttm)}</td>
                  {/* APP Intro 공지 노출 기간 */}
                  <td className={classes.td}>
                    {dateFormat(i.noti_start_dttm)} ~
                    {dateFormat(i.noti_end_dttm)}
                  </td>
                  {/* 공지 유형 */}
                  <td className={classes.td}>
                    <span
                      className={
                        i.noti_type == "EG" ? classes.urgentText : null
                      }
                    >
                      {i.noti_type === "EG" ? "긴급" : "일반"}
                    </span>
                  </td>
                  {/* 공지 제목 */}
                  <td className={classes.td}>
                    <span
                      onClick={() =>
                        navigate("/notice/app_intro/details", { state: i })
                      }
                      className={classes.idLink}
                    >
                      {i.noti_title}
                    </span>
                  </td>
                  {/* OS */}
                  <td className={classes.td}>{i.os}</td>
                  {/* 공지 활성 */}
                  {i.status === "Y" ? (
                    <td className={classes.td}>{dateFormat(i.upt_dttm)}</td>
                  ) : (
                    <td className={classes.td}>
                      <div className={classes.activeLive}>
                        <span
                          onClick={() => openModal(index)}
                          className={classes.activeLiveText}
                        >
                          Live
                        </span>
                      </div>
                    </td>
                  )}
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
export default NoticeIntroTable;
