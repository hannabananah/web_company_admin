import useStyles from "../styles/UserAccount";

const UserAccount = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.contentInput}>
        <div className={classes.leftLayout}>
          <label className={classes.leftText}>아이디</label>
        </div>
        <input
          type="text"
          className={classes.inputLayout}
          name="name"
          id="name"
          required
        />
      </form>
      <form className={classes.contentInput}>
        <div className={classes.leftLayout}>
          <label className={classes.leftText}>관리자 권한</label>
        </div>
        <input
          type="text"
          className={classes.inputLayout}
          name="name"
          id="name"
          required
        />
      </form>
      <form className={classes.contentInput}>
        <div className={classes.leftLayout}>
          <label className={classes.leftText}>비밀번호</label>
        </div>
        <input
          type="text"
          className={classes.inputLayout}
          name="name"
          id="name"
          required
        />
      </form>
    </div>
  );
};
export default UserAccount;
