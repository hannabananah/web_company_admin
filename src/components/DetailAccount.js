import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import EditDetailAccount from "~/components/EditDetailAccount";
import { DeleteModal } from "~/components/Modal";

const DetailAccount = ({ user, backState }) => {
  const classes = useStyles();
  const navigate = useNavigate();

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
  const onClickPrev = () => {
    // UserAccount.js
    navigate('/setting_admin/user_account')
  }
  const onClickEdit = () => {
    // UserAccountEdit.js
    navigate('/setting_admin/user_account/edit', { state : user })
  }

  return (
    <>
      {edit ? (
        <EditDetailAccount user={user} gobackstate={gobackstate} />
      ) : (
        <figure className={classes.userAccContainer}>
          <table className={classes.tableStyle}>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <tbody>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>아이디</label>
                </th>
                <td className={classes.contentStyle}>{user.firstName}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>관리자 권한</label>
                </th>
                <td className={classes.contentStyle}>{user.bloodGroup}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>전화번호</label>
                </th>
                <td className={classes.contentStyle}>{user.phone}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>이메일</label>
                </th>
                <td className={classes.contentStyle}>{user.email}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>접속허가 IP</label>
                </th>
                <td className={classes.contentStyle}>{user.ip}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>사용여부</label>
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
            {/* <button onClick={backState} className={classes.backBtn}> */}
            <button onClick={onClickPrev} className={classes.backBtn}>
              이전
            </button>
            {/* <button onClick={() => onEdit(true)} className={classes.editBtn}> */}
            <button onClick={onClickEdit} className={classes.editBtn}>
              수정
            </button>
            <button onClick={openModal} className={classes.deleteBtn}>
              삭제
            </button>
          </div>
          <DeleteModal open={modalOpen} close={closeModal} header="계정 삭제">
            <main>해당 계정을 삭제하시겠습니까?</main>
          </DeleteModal>
        </figure>
      )}
    </>
  );
};
export default DetailAccount;
