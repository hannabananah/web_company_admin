import useStyles from "../styles/UserAccount";
import "../styles/Toggle.css";

const UserAccount = () => {
  const classes = useStyles();
  return (
    <div className={classes.userAccContainer}>
      <table
        style={{ borderCollapse: "collapse", borderSpacing: 0 }}
        className={classes.tableStyle}
      >
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>아이디</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="name"
                id="name"
                required
              />
              <input
                type="submit"
                value="중복체크"
                className={classes.checkBtnStyle}
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>관리자 권한</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="name"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>비밀번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="name"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>비밀번호 확인</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="name"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>전화번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone1"
                id="name"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone2"
                id="name"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone3"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>이메일</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="name"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>접속허가 IP</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="name"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>사용여부</label>
            </th>
            <td className={classes.inputLayout}>
              <label className={`auggleToggle ${classes.userToggle}`}>
                {/* <label className="auggleToggle"> */}
                <input role="switch" type="checkbox" />
                <span className={classes.toggleText}>알람</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button className={classes.backBtn}>이전</button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </div>
  );
};
export default UserAccount;
