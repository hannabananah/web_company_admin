import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import images from "~/assets/js/Images";
import "~/styles/Toggle.css";
import axios from "axios";

const AddUserAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inactive, setInactive] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: '',
    grade: 1,
    pwd: "",
    chkPwd: "",
    password: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    allow_remote_ip: "",
    use_yn: "Y",
  });

  const onChange = (e) => {
    const { name, value, checked } = e.target;

    console.log(name + " " + value);
    const newInfo = {
      ...userInfo,
      [name]: name == "use_yn" ? !userInfo.use_yn : value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  const onClickPrev = () => {
    // UserAccount.js
    navigate('/setting_admin/user_account')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    {
      if (userInfo.pwd != userInfo.chkPwd) {
        alert('비밀번호 확인을 해주세요.');
        return false;
      }
      const newInfo = {
        ...userInfo,
        "password":  userInfo.pwd, //e.target의 name과 value이다.
      };
      setUserInfo(newInfo);
    }

    // eslint-disable-next-line no-restricted-globals
    if (confirm("저장 하시겠습니까?")) {
      axios.post(
          `http://localhost:3001/api/admin/create`,
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
        navigate("/setting_admin/user_account");

      });
    }
  };

  const duplicationCheck = () => {
    axios
        .get(`http://localhost:3001/api/admin/${userInfo.id}`, {
          headers: {
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
          },
        })
        .then(({data}) => {
          if (data.adminKey) {
            setDoubleCheck(true)
          } else {
            setDoubleCheck(false)
          }
        });
  };

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="사용자 추가" /> 
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
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="id"
                id="id"
                minLength="4"
                value={userInfo.id}
                onChange={onChange}
                maxLength="30"
                required
              />
              <input
                type="submit"
                value="중복체크"
                onClick={duplicationCheck}
                className={classes.checkBtnStyle}
              />
              {/* 로그인 중복체크 문구*/}
              {doubleCheck && (
                <div className={classes.checkIconStyle}>
                  <img
                    src={images.icons.LOGIN_INFO}
                    alt="중복체크 에러 아이콘"
                    className={classes.checkErrorIcon}
                  />
                  <span className={classes.checkErrorText}>
                    동일한 아이디가 존재합니다.
                  </span>
                </div>
              )}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>관리자 권한</label>
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
              <label className={classes.leftText}>비밀번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="pwd"
                id="pwd"
                minLength="8"
                maxLength="16"
                required
                value={userInfo.pwd}
                onChange={onChange}

              />
              {/* 비밀번호 생성 조합 알림문구 */}
              {pwdCheck && (
                <div className={classes.checkIconStyle}>
                  <img
                    src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon}
                  />
                  <span className={classes.checkErrorText}>
                    비밀번호는 숫자, 영문자, 특수문자 조합 6자리 이상이어야
                    합니다.
                  </span>
                </div>
              )}
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
                id="chkPwd"
                minLength="8"
                maxLength="16"
                required
                value={userInfo.chkPwd}
                onChange={onChange}
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
                id="phone"
                maxLength="50"
                required
                value={userInfo.phone}
                onChange={onChange}
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
                id="email"
                required
                value={userInfo.email}
                onChange={onChange}

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
                required
                value={userInfo.allow_remote_ip}
                onChange={onChange}

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
                  role="switch"
                  type="checkbox"
                  name="use_yn"
                  id="use_yn"
                  defaultChecked
                  value={userInfo.use_yn}
                  onChange={onChange}
                  // onClick={() => setInactive(!inactive)}
                />
                {inactive ? (
                  <span className={classes.toggleText2}>미사용</span>
                ) : (
                  <span className={classes.toggleText1}>사용</span>
                )}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} onClick={handleSubmit} />
      </div>
    </figure>
  )
}
export default AddUserAccount; 