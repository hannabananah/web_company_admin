import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import images from "~/assets/js/Images";
import useStyles from "~/styles/Login";

const Login = () => {
  const classes = useStyles();
  const [id, setId] = useState("admin");
  const [password, setPassword] = useState("11111111");
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/auth/login`, { id, password })
      .then((result) => {
        if (result.data) {
          // console.log(result.data)
          localStorage.setItem("id", result.data.id);
          localStorage.setItem("adminKey", result.data.adminKey);
          localStorage.setItem("access_token", result.data.access_token);
          navigate("/dashboard");
        } else {
          setInvalid(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginContentStyle}>
        <img
          className={classes.loginLogo}
          src={images.icons.ANYCHAT_LOGO}
          alt="애니챗 로고"
          width="70%"
        />
        {/* 로그인 창 박스 */}
        <fieldset className={classes.loginContainer}>
          <div className={classes.loginTitleLayout}>
            <h2 className={classes.loginTitle}>ADMIN LOGIN</h2>
          </div>
          <div className={classes.formLayout}>
            <form onSubmit={onSubmit} className={classes.loginForm}>
              <div className={classes.formGroup}>
                <div className={classes.loginInputGroup}>
                  <img
                    src={images.icons.LOGIN_MAN}
                    alt="로그인 아이디 아이콘"
                    className={classes.loginIcon1}
                  />
                  <input
                    type="text"
                    value={id}
                    onChange={onChangeId}
                    autoComplete="false"
                    placeholder="관리자 아이디"
                    className={classes.loginInput}
                    minLength="4"
                    maxLength="30"
                    // required
                  />
                </div>
                <div className={classes.loginInputGroup}>
                  <img
                    src={images.icons.LOGIN_LOCK}
                    alt="로그인 비밀번호 아이콘"
                    className={classes.loginIcon2}
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={onChangePw}
                    autoComplete="false"
                    placeholder="비밀번호"
                    className={classes.loginInput}
                    minLength="8"
                    maxLength="16"
                    // required
                  />
                  {/* 로그인 오류 아이콘 */}
                  {invalid && (
                    <img
                      src={images.icons.LOGIN_INFO}
                      alt="로그인 오류 아이콘"
                      className={classes.loginErrorIcon}
                    />
                  )}
                </div>
                {/* 로그인 에러 알림메시지 */}
                {invalid && (
                  <div className={classes.loginAlertMsgStyle}>
                    <p className={classes.loginAlertMsg}>
                      아이디와 패스워드가 일치 하지 않습니다.
                    </p>
                    {/* <p className={classes.loginAlertMsg}>
                      다른 기기에서 로그인 중입니다.
                    </p> */}
                  </div>
                )}
              </div>
              {/* 로그인 버튼 */}
              <input
                type="submit"
                value="로그인"
                className={classes.loginBtn}
                // onClick={setInvalid}
              />
            </form>
          </div>
          <div className={classes.loginTextStyle}>
            <p className={classes.loginText}>
              아이디, 비밀번호 분실시 시스템 관리자에게 문의 바랍니다.
            </p>
            <p className={classes.loginText}>
              <span>전화 : 000-0000-0000 </span>
              <span>| Email : anychat79@anychat.com</span>
            </p>
          </div>
        </fieldset>
      </div>
      <footer className={classes.notiTextStyle}>
        <p className={classes.notiText1}>
          ANYCHAT 관리자 시스템은 Chrome 브라우저에 최적화 되어 있습니다.
        </p>
        <p className={classes.notiText2}>
          Copyright&#169; ANYCHAT ALL right reserved.
        </p>
      </footer>
    </div>
  );
};
export default Login;
