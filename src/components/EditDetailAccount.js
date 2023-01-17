import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import axios from "axios";

const EditDetailAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useLocation().state;
  // console.log(user)

  const [userInfo, setUserInfo] = useState({});
  // const [userInfo, setUserInfo] = useState({
  //   grade:user.grade,
  //   pwd:user.pwd,
  //   chkPwd: user.chkPwd,
  //   phone: user.phone,
  //   email: user.email,
  //   allow_remote_ip:user.allow_remote_ip,
  //   use_yn: user.use_yn,
  // });

  const onChange = (e) => {
    const { name, value, checked } = e.target;
    console.log("e.target.name:::::::", name);
    console.log("e.target.value:::::::::", value);
    console.log("e.target.checked:::::::::", checked);

    const newInfo = {
      ...userInfo,
      // [name]: name == "use_yn" ? userInfo.use_yn : value, //e.target의 name과 value이다.
      [name]: name == "use_yn" ? checked : value, //e.target의 name과 value이다.
      
    };
    console.log(newInfo)
    setUserInfo(newInfo);
  };
  
  useEffect(() => {
      axios
          .get(`http://localhost:3001/api/admin/${user.id}`, {
            headers: {
              Authorization:
                  "Bearer " +
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
            },
          })
          .then(({data}) => {
            console.log('data----------------->',data)
            data.use_yn = data.use_yn == 'Y' ? true : false
            setUserInfo(data);

          });
  }, [])
  console.log('userInfo------>',userInfo)
  console.log(userInfo.use_yn)

  //user info state
  //userData.phone.split('-')[2] ? userData.phone.split('-')[2] :
  // const [userInfo, setUserInfo] = useState({});

  // const { auth, pwd, chkPwd, phone1, phone2, phone3, email, ip, use_yn } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInfo.password != "") {
      if (userInfo.password != userInfo.chkPwd) {
        alert('비밀번호 확인을 해주세요.');
        return false;
      } else {
        
        const newInfo = {
          ...userInfo,
          password: userInfo.password, //e.target의 name과 value이다.
        };
        setUserInfo(newInfo);
      }
    }
    // const newInfo = {
    //   ...userInfo,
    //   use_yn: userInfo.use_yn == true ? "Y" : "N", //e.target의 name과 value이다.
    // };
    // setUserInfo(newInfo);

    // delete userInfo['password'];
    // delete userInfo['chkPwd'];
      console.log(userInfo)



    // // eslint-disable-next-line no-restricted-globals
    // if (confirm("저장 하시겠습니까?")) {
      axios.post(
          `http://localhost:3001/api/admin/update`,
          {
            ...userInfo,
          },
          {
            headers: {
              Authorization:
                  "Bearer " +
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
            },
          }
      ).then(({data}) => {
        console.log(data);

        // window.location.reload();
      });
    // }

  };

  const onClickPrev = () => {
    // UserAccountDetails.js
    navigate('/setting_admin/user_account/details', {state:user})
  }

  // 저장완료 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
                value={userInfo.grade || ""}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="auth"
                id="auth"
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
                value={userInfo.password || ""}
                onChange={onChange}
                type="password"
                className={classes.inputStyle}
                name="password"
                id="password"
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
                value={userInfo.chkPwd || ""}
                onChange={onChange}
                type="password"
                className={classes.inputStyle}
                name="chkPwd"
                id="chkPwd"
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
                value={userInfo.phone || ""}
                onChange={onChange}
                className={classes.inputStyle}
                name="phone"
                id="phone"
                maxLength="50"
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
                value={userInfo.email || ""}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="email"
                id="email"
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
                type="text"
                className={classes.inputStyle}
                name="allow_remote_ip"
                id="allow_remote_ip"
                value={userInfo.allow_remote_ip || ""}
                onChange={onChange}
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
                  // value={userInfo.use_yn || ""}
                  // value={userInfo.use_yn}
                  checked={userInfo.use_yn || ""}
                  onChange={onChange}
                  role="switch"
                  type="checkbox"
                  name="use_yn"
                  id="use_yn"
                  // defaultChecked={userInfo.use_yn}
                  // defaultChecked={userInfo.use_yn == "Y" ? true : false}
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
        <input type="submit" value="저장" className={classes.saveBtn} onClick={handleSubmit} />
      </div>
      {/* <UptConfirmModal open={modalOpen} close={closeModal} header="저장 완료">
        <main>저장했습니다.</main>
      </UptConfirmModal> */}
    </figure>
  );
};

export default EditDetailAccount;
