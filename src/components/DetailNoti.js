import { useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import EditAppIntroNotice from "~/components/EditAppIntroNotice";
import { DeleteModal } from "~/components/Modal";

const DetailNoti = ({ user, backState }) => {
  const classes = useStyles();
  // 계정수정 페이지로
  const [edit, setEdit] = useState(false);
  const onEdit = () => {
    setEdit(true);
  };
  const gobackstate = () => {
    setEdit(false);
  };
  // 계정삭제 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {edit ? (
        <EditAppIntroNotice user={user} gobackstate={gobackstate} />
      ) : (
        <figure className={classes.userAccContainer}>
          <section className={classes.titleSection}>
            <h2 className={classes.mainTitle}>앱 인트로 공지 상세</h2>
          </section>
          <table className={classes.tableStyle}>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <tbody>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>OS</label>
                </th>
                <td className={classes.contentStyle}>{user.firstName}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 유형</label>
                </th>
                <td className={classes.contentStyle}>{user.bloodGroup}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 노출 기간</label>
                </th>
                <td className={classes.contentStyle}>{user.phone}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 제목</label>
                </th>
                <td className={classes.contentStyle}>{user.email}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 내용</label>
                </th>
                <td className={classes.contentStyle}>{user.ip}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>설명</label>
                </th>
                <td className={classes.contentStyle}>{user.gender}</td>
              </tr>

              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>등록일</label>
                </th>
                <td className={classes.contentStyle}>{user.birthDate}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>등록자</label>
                </th>
                <td className={classes.contentStyle}>{user.username}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>수정일</label>
                </th>
                <td className={classes.contentStyle}>{user.birthDate}</td>
              </tr>
            </tbody>
          </table>
          <div className={classes.submitBtns}>
            <button onClick={backState} className={classes.backBtn}>
              이전
            </button>
            <button onClick={() => onEdit(true)} className={classes.editBtn}>
              수정
            </button>
          </div>
        </figure>
      )}
    </>
  );
};
export default DetailNoti;
