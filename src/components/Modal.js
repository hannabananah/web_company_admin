import "~/styles/Modal.css";
import useStyles from "~/styles/Add";
import images from "~/assets/js/Images";

export const DeleteModal = (props) => {
  const classes = useStyles();
  const { open, close, header } = props;

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
          <footer class="modalBtns">
            <button className={classes.backBtn} onClick={close}>
              취소
            </button>
            {/* onClick 바꿔야함 */}
            <button className={classes.deleteBtn} onClick={close}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export const UpdateModal = (props) => {
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
          <footer class="modalBtns">
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
          <footer class="modalBtns">
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
