import { useState } from "react";

import { useNavigate } from "react-router-dom";

import useStyles from "~/styles/Login";

const Login = () => {
  const classes = useStyles();
  const [id, setId] = useState("anychat");
  const [password, setPassword] = useState("anychat21!@");
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
    navigate("/user_account");
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <fieldset>
          <div className={classes.loginTitleLayout}>
            <h2 className={classes.loginTitle}>ANYCHAT 관리자 시스템</h2>
          </div>
          <div className={classes.formLayout}>
            <form onSubmit={onSubmit} className={classes.loginForm}>
              <div className={classes.formGroup}>
                <div className={classes.loginInputGroup}>
                  <label htmlFor="id" className={classes.loginLabel}>
                    아이디
                  </label>
                  <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={onChangeId}
                    autoComplete="false"
                    placeholder="아이디를 입력해주세요."
                    className={classes.loginInput}
                  />
                </div>
                <div className={classes.loginInputGroup}>
                  <label htmlFor="password" className={classes.loginLabel}>
                    패스워드
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={onChangePw}
                    autoComplete="false"
                    placeholder="비밀번호를 입력해주세요."
                    className={classes.loginInput}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="로그인"
                className={classes.loginBtn}
              />
            </form>
          </div>

          {/* 로그인알림메시지 */}

          {invalid && (
            <div className="loginAlertMsg">
              <p>아이디와 패스워드가 일치 하지 않습니다.</p>
              <p>다른 기기에서 로그인 중입니다.</p>
            </div>
          )}
          <div className={classes.loginText1}>
            <p>아이디, 비밀번호 분실시 시스템 관리자에게 문의 바랍니다.</p>
            <p className={classes.loginText2}>
              <span>전화 : 000-0000-0000</span>
              <span>/ Email : aaa@amam.cp.kr</span>
            </p>
          </div>
        </fieldset>
      </div>
      <p>ANYCHAT 관리자 시스템은 Chrome 브라우저에 최적화 되어 있습니다.</p>
    </div>
  );
};
export default Login;
