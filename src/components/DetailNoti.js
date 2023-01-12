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
