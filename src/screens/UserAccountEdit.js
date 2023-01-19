import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
// import EditDetailAccount from "~/components/EditDetailAccount";
import "~/styles/Toggle.css";
import axios from "axios";
import { UptConfirmModal, SaveConfirmModal } from "~/components/Modal";

const UserAccountEdit = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const user = useLocation().state.state

  console.log('user _________',user)


  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

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
      [name]: name == "use_yn" ? (checked ? "Y" : "N") : value, //e.target의 name과 value이다.
    };
    console.log(newInfo);
    setUserInfo(newInfo);
  };

  // 유저 정보 불러오기
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/admin/${user.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        console.log("data----------------->", data);
        // data.use_yn = data.use_yn == 'Y' ? true : false
        setUserInfo(data);
      });
  }, []);

  // const { auth, pwd, chkPwd, phone1, phone2, phone3, email, ip, use_yn } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();

    // delete userInfo["password"];
    setSaveConfirm(false);

    if (userInfo.pwd != "") {
      if (userInfo.pwd != userInfo.chkPwd) {
        alert("비밀번호 확인을 해주세요.");
        return false;
      } else {
        const newInfo = {
          ...userInfo,
          password: userInfo.pwd,
        };
        setUserInfo(newInfo);

        axios
          .post(
            `http://localhost:3001/api/admin/update`,
            {
              ...userInfo,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            }
          )
          .then(({ data }) => {
            console.log(data);
            openModal();
            // window.location.reload();
          });
      }
    }

    // delete userInfo['password'];
    // delete userInfo['chkPwd'];
  };

  console.log(userInfo);

  const onClickPrev = () => {
    // UserAccount.js
    navigate(-1);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    navigate(-1);
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
                value={user.pwd}
                onChange={onChange}
                type="password"
                className={classes.inputStyle}
                // name="password"
                name="pwd"
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
                // value=""
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
                  checked={userInfo.use_yn == "Y" || ""}
                  onChange={onChange}
                  role="switch"
                  type="checkbox"
                  name="use_yn"
                  id="use_yn"
                  // defaultChecked={userInfo.use_yn}
                  // defaultChecked={userInfo.use_yn == "Y" ? true : false}
                />
                {userInfo.use_yn == "Y" ? (
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
        {/* <input
          type="submit"
          value="저장"
          className={classes.saveBtn}
          onClick={handleSubmit}
        /> */}
        <button
          type="submit"
          onClick={() => setSaveConfirm(true)}
          className={classes.saveBtn}
        >
          저장
        </button>
      </div>

      <SaveConfirmModal
        open={saveConfirm}
        onClickCancel={() => setSaveConfirm(false)}
        onClickConfirm={handleSubmit}
        header="저장"
      >
        <main>저장 하시겠습니까?</main>
      </SaveConfirmModal>

      <UptConfirmModal open={modalOpen} close={closeModal} header="저장 완료">
        <main>저장했습니다.</main>
      </UptConfirmModal>
    </figure>
  )
}
export default UserAccountEdit;