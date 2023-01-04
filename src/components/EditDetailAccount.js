import { useState } from "react";
import useStyles from "~/styles/AddUserAccount";
import "~/styles/Toggle.css";

const EditDetailAccount = ({ gobackstate, user }) => {
  const classes = useStyles();

  //user info state
  const [userInfo, setUserInfo] = useState({
    id: user.firstName,
    auth: user.bloodGroup,
    pwd: "",
    chkPwd: "",
    phone: user.phone,
    email: user.email,
    ip: user.ip,
    use_yn: user.gender,
  });
  const { auth, pwd, chkPwd, phone1, phone2, phone3, email, ip, use_yn } =
    userInfo;
  const onChange = (e) => {
    const { name, value } = e.target;
    const newInfo = {
      ...userInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  return (
    <figure className={classes.userAccContainer}>
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
            <td className={classes.contentStyle}>{userInfo.id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>관리자 권한</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.auth}
                onChange={onChange}
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
                value={userInfo.pwd}
                onChange={onChange}
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
                value={userInfo.chkPwd}
                onChange={onChange}
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
                onChange={onChange}
                className={classes.inputNumStyle}
                name="phone1"
                id="name"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                onChange={onChange}
                className={classes.inputNumStyle}
                name="phone2"
                id="name"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                onChange={onChange}
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
                value={userInfo.email}
                onChange={onChange}
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
                value={userInfo.ip}
                onChange={onChange}
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
                <input
                  value={userInfo.use_yn}
                  onChange={onChange}
                  role="switch"
                  type="checkbox"
                  defaultChecked={userInfo.use_yn == "male" ? true : false}
                />
                <span className={classes.toggleText}>알람</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={gobackstate} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  );
};
export default EditDetailAccount;
