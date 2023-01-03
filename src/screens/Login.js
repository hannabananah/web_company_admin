const Login = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "250px",
          display: "flex",
          // flex: "1",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <fieldset>
          <div style={{ textAlign: "center" }}>
            <h2>ANYCHAT 관리자 시스템</h2>
          </div>
          <div style={{ width: "100%" }}>
            <form
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <label htmlFor="id" style={{ width: "70px" }}>
                    아이디
                  </label>
                  <input
                    type="text"
                    id="id"
                    autoComplete="false"
                    placeholder="아이디를 입력해주세요."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <label htmlFor="password" style={{ width: "70px" }}>
                    패스워드
                  </label>
                  <input
                    type="password"
                    id="password"
                    autoComplete="false"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </div>
              </div>
              <input
                type="submit"
                value="로그인"
                className="loginBtn"
                style={{ padding: "20px 10px", backgroundColor: "beige",cursor: "pointer", border:"none" }}
              />
            </form>
          </div>

          {/* 로그인알림메시지 */}
          {/* <div className="loginAlertMsg">
          <p>아이디와 패스워드가 일치 하지 않습니다.</p>
          <p>다른 기기에서 로그인 중입니다.</p>
        </div> */}
          <div>
            <p>아이디, 비밀번호 분실시 시스템 관리자에게 문의 바랍니다.</p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: "10px",
              }}
            >
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
