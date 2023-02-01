import { useNavigate } from "react-router-dom";
import axios from "axios";
import images from "~/assets/js/Images";
import "~/styles/Modal.css";
import useStyles from "~/styles/Modal";
import { g } from "~/util/global"

export const DeleteModal = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { open, close, header, id , onClickCancel, onClickConfirm } = props;

  const deleteAdminID = () => {
    axios
      .post(
        `${g.base_url}api/admin/delete`,
        { id: id },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        close();
      });
  };

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <img
              src={images.icons.LOGIN_INFO}
              alt="계정삭제 알림 아이콘"
              className="modalIcon"
            />
            {header}
          </header>
          <main>{props.children}</main>
          <footer className="modalBtns">
            <button className={classes.backBtn} onClick={onClickCancel}>
              취소
            </button>
            {/* onClick 바꿔야함 */}
            {/* <button className={classes.deleteBtn} onClick={deleteAdminID}> */}
            <button className={classes.deleteBtn} onClick={onClickConfirm}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export const UpdateAlertModal = (props) => {
  const classes = useStyles();
  const { open, close, header, updateAppVersion } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <img
              src={images.icons.BELL_IC_R}
              alt="업데이트 알림 아이콘"
              className="modalIcon"
            />
            {header}
          </header>
          <main>{props.children}</main>
          <footer className="modalBtns">
            <button className={classes.backBtn} onClick={close}>
              취소
            </button>
            <button className={classes.deleteBtn} onClick={updateAppVersion}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export const NoticeAlertModal = (props) => {
  const classes = useStyles();
  const { open, close, header, activeNotice } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <img
              src={images.icons.BELL_IC_R}
              alt="App 인트로 공지 알림 아이콘"
              className="modalIcon"
            />
            {header}
          </header>
          <main>{props.children}</main>
          <footer className="modalBtns">
            <button className={classes.backBtn} onClick={close}>
              취소
            </button>
            <button className={classes.deleteBtn} onClick={activeNotice}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export const UptConfirmModal = (props) => {
  const classes = useStyles();
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <img
              src={images.icons.BELL_IC_P}
              alt="등록완료 알림 아이콘"
              className="modalIcon"
            />
            {header}
          </header>
          <main>{props.children}</main>
          <footer className="modalBtns">
            {/* onClick 바꿔야함 */}
            <button className={classes.backBtn} onClick={close}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export const SaveConfirmModal = (props) => {
  const classes = useStyles();
  const { open, close, header, onClickCancel, onClickConfirm } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <img
              src={images.icons.BELL_IC_P}
              alt="등록완료 알림 아이콘"
              className="modalIcon"
            />
            {header}
          </header>
          <main>{props.children}</main>
          <footer className="modalBtns">
            {/* onClick 바꿔야함 */}
            <button className={classes.backBtn} onClick={onClickCancel}>
              취소
            </button>
            <button className={classes.saveBtn} onClick={onClickConfirm}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};