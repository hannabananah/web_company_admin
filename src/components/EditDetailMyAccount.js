import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";

const EditDetailMyAccount = ({ goBackState, admin }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/admin/${admin.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        data.use_yn = data.use_yn === "Y" ? true : false;
        // setUserData(data);
        setUserInfo(data);
        // console.log(userInfo.phone)
      });
  }, []);

  const [userInfo, setUserInfo] = useState({});

  const onChange = (e) => {
    const { name, value, checked } = e.target;

    const newInfo = {
      ...userInfo,
      [name]: name == "use_yn" ? !userInfo.use_yn : value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete userInfo["password"];

    if (userInfo.pwd != "") {
      if (userInfo.pwd != userInfo.chkPwd) {
        alert("비밀번호 확인을 해주세요.");
        return false;
      }
      const newInfo = {
        ...userInfo,
        password: userInfo.pwd, //e.target의 name과 value이다.
      };
      setUserInfo(newInfo);
    }

    // eslint-disable-next-line no-restricted-globals
    if (confirm("저장 하시겠습니까?")) {
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
          window.location.reload();
        });
    }
  };

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
      <TableHeader title="내 계정 정보 수정" />
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>사용자 아이디</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>관리자 권한</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="auth"
                id="myAccount"
                value={userInfo.grade}
                onChange={onChange}
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
                type="text"
                className={classes.inputStyle}
                name="pwd"
                id="myAccount"
                value={userInfo.pwd}
                onChange={onChange}
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
                type="text"
                className={classes.inputStyle}
                name="chkPwd"
                id="myAccount"
                value={userInfo.chkPwd}
                onChange={onChange}
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
                className={classes.inputStyle}
                name="phone"
                id="myAccount"
                maxLength="30"
                value={userInfo.phone}
                onChange={onChange}
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
                type="text"
                className={classes.inputStyle}
                name="email"
                value={userInfo.email}
                onChange={onChange}
                id="myAccount"
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
                name="ip"
                id="myAccount"
                value={userInfo.allow_remote_ip}
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
                  // value={userInfo.use_yn}
                  // onChange={onChange}
                  role="switch"
                  type="checkbox"
                  name="use_yn"
                  value={userInfo.use_yn}
                  onChange={onChange}
                  // defaultChecked={userInfo.use_yn}
                  defaultChecked={true}
                  id="myAccount"
                />
                {/* {userInfo.use_yn ? (
                  <span className={classes.toggleText1}>사용</span>
                ) : (
                  <span className={classes.toggleText2}>미사용</span>
                )} */}
                <span className={classes.toggleText1}>사용</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={goBackState} className={classes.backBtn}>
          이전
        </button>
        <input
          type="submit"
          value="저장"
          className={classes.saveBtn}
          onClick={handleSubmit}
        />
      </div>
      {/* <UptConfirmModal open={modalOpen} close={closeModal} header="저장 완료">
        <main>저장했습니다.</main>
      </UptConfirmModal> */}
    </figure>
  );
};
export default EditDetailMyAccount;
