import "~/styles/Modal.css";
import useStyles from "~/styles/Add";
import images from "~/assets/js/Images";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const DeleteModal = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { open, close, header, id } = props;

  const deleteAdminID = () => {
      axios.post(
          `http://localhost:3001/api/admin/delete`,
          { id : id },
          {
            headers: {
              Authorization:
                  "Bearer " +
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
            },
          }
      ).then(({data}) => {
        console.log(data);
        close();
        navigate("/setting_admin/user_account");

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
            <button className={classes.backBtn} onClick={close}>
              취소
            </button>
            {/* onClick 바꿔야함 */}
            <button className={classes.deleteBtn} onClick={deleteAdminID}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export const AlertModal = (props) => {
  const classes = useStyles();
  const { open, close, header } = props;

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
}