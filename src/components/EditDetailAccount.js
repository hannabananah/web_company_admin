import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";

const EditDetailAccount = ({ gobackstate }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useLocation().state;

  //user info state
  const [userInfo, setUserInfo] = useState({
    id: user.firstName,
    auth: user.bloodGroup,
    pwd: "",
    chkPwd: "",
    // phone1: user.phone1,
    // phone2: user.phone2,
    // phone3: user.phone3,
    phone1: "",
    phone2: "",
    phone3: "",
    email: user.email,
    ip: user.ip,
    use_yn: user.gender == "male" ? false : true, //male:N, female:Y
  });

  const { auth, pwd, chkPwd, phone1, phone2, phone3, email, ip, use_yn } =
    userInfo;

  const onChange = (e) => {
    console.log("onchange!!!!!!!!!!!");
    const { name, value, checked } = e.target;
    console.log("e.target.name:::::::", name);
    console.log("e.target.value:::::::::", value);
    console.log("e.target.checked:::::::::", checked);

    const newInfo = {
      ...userInfo,
      [name]: name == "use_yn" ? !userInfo.use_yn : value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  const onClickPrev = () => {
    // UserAccountDetails.js
    navigate('/setting_admin/user_account/details', {state:user})
  }
  console.log("userInfo ----------->", userInfo);
  console.log("userInfo.use_yn ----------->", userInfo.use_yn);

  return (
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
            <td className={classes.fixedLayout}>{userInfo.id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>관리자 권한</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.auth}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="auth"
                id="account"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>비밀번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.pwd}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="pwd"
                id="account"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>비밀번호 확인</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.chkPwd}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="chkPwd"
                id="account"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>전화번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="tel"
                value={userInfo.phone1}
                onChange={onChange}
                className={classes.inputNumStyle}
                name="phone1"
                id="account"
                maxLength="3"
                required
              />
              <span className={classes.inputDash}>&nbsp;&ndash;&nbsp;</span>
              <input
                type="tel"
                value={userInfo.phone2}
                onChange={onChange}
                className={classes.inputNumStyle}
                name="phone2"
                id="account"
                maxLength="4"
                required
              />
              <span className={classes.inputDash}>&nbsp;&ndash;&nbsp;</span>
              <input
                type="tel"
                value={userInfo.phone3}
                onChange={onChange}
                className={classes.inputNumStyle}
                name="phone3"
                id="account"
                maxLength="4"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>이메일</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.email}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="email"
                id="account"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>접속허가 IP</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.ip}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="ip"
                id="account"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>사용여부</label>
            </th>
            <td className={classes.inputLayout}>
              <label className={`auggleToggle ${classes.userToggle}`}>
                <input
                  value={userInfo.use_yn}
                  onChange={onChange}
                  role="switch"
                  type="checkbox"
                  name="use_yn"
                  defaultChecked={userInfo.use_yn}
                />
                {userInfo.use_yn ? (
                  <span className={classes.toggleText1}>사용</span>
                ) : (
                  <span className={classes.toggleText2}>미사용</span>
                )}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        {/* <button onClick={gobackstate} className={classes.backBtn}> */}
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  );
};
export default EditDetailAccount;
