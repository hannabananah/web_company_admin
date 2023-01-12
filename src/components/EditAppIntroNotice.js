import { useEffect, useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";

const EditAppIntroNotice = ({ gobackstate, user }) => {
  const classes = useStyles();

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

  console.log("userInfo ----------->", userInfo);
  console.log("userInfo.use_yn ----------->", userInfo.use_yn);

  return (
    <figure className={classes.userAccContainer}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>App Intro 공지 수정</h2>
      </section>
      <div className={classes.submitBtns}>
        <button onClick={gobackstate} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  );
};
export default EditAppIntroNotice;
