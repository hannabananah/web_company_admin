import { useState } from "react";
import useStyles from "~/styles/Table";
import { AlertModal } from "~/components/Modal";
import { useNavigate } from "react-router-dom";

const NoticeIntroTable = (props) => {
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
  const navigate = useNavigate();
  console.log(fetchData);
  console.log(isLoaded);

  // 공지활성화 알림 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
                  {/* 번호 */}
                  <td className={classes.td}>{i.id}</td>
                  {/* 공지 등록일 */}
                  <td className={classes.td}>{i.firstName}</td>
                  {/* APP Intro 공지 노출 기간 */}
                  <td className={classes.td}>{i.bloodGroup}</td>
                  {/* 공지 유형 */}
                  <td className={classes.td}>
                    <span
                      className={i.gender == "male" ? classes.urgentText : null}
                    >
                      {i.gender}
                    </span>
                  </td>
                  {/* 공지 제목 */}
                  <td className={classes.td}>
                    <span
                      onClick={() => navigate('/notice/app_intro/details', { state : i })}
                      className={`${classes.td} + ${classes.idLink}`}
                    >
                      {i.eyeColor}
                    </span>
                  </td>
                  {/* OS */}
                  <td className={classes.td}>{i.ip}</td>
                  {/* 공지 활성 */}
                  <td className={classes.td}>
                    <span onClick={openModal} className={classes.activeLive}>
                      Live
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
      <AlertModal open={modalOpen} close={closeModal} header="공지 활성화">
        <main>App Intro 공지를 노출합니다.</main>
      </AlertModal>
    </figure>
  );
};
export default NoticeIntroTable;
