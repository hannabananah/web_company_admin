import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "~/styles/Toggle.css";
import useStyles from "~/styles/MyAccountEdit";
import TableHeader from "~/components/TableHeader";
import { UptConfirmModal, SaveConfirmModal } from "~/components/Modal";
import { g } from "~/util/global";
import { validateMsgMap } from "~/util/utils";
import images from "~/assets/js/Images";

const EditDetailMyAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const user = useLocation().state;
  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  const [validate, setValidate] = useState({
    isSubmit: false,
    gradeWorning:false,
    pwdWorning:false,
    chkPwdWorning:false,
    phoneWorning:false,
    emailWorning:false,
    allow_remote_ipWorning:false,
    gradeValidateMsg:'',
    pwdValidateMsg:'',
    chkPwdValidateMsg:'',
    phoneValidateMsg:'',
    emailValidateMsg:'',
    allow_remote_ipValidateMsg:'',
  });

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
    setUserInfo(newInfo);

    setValidate((pre)=> {
      return {
        ...pre,
        [`${name}Worning`]: validateMsgMap[`${name}_empty`] == pre[`${name}ValidateMsg`] ? false : pre[`${name}Worning`],
        [`${name}ValidateMsg`]: validateMsgMap[`${name}_empty`] == pre[`${name}ValidateMsg`] ? '' : pre[`${name}ValidateMsg`],
      }
    })
  };

  useEffect(() => {
    axios
      .get(`${g.base_url}api/admin/${user.id}`, {
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
    // setSaveConfirm(false);

    axios
      .post(
        `${g.base_url}api/admin/update`,
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
      });
      
    // delete userInfo['password'];
    // delete userInfo['chkPwd'];
  };

  const onConfirm = () => {
    // 비밀번호는 숫자,영문자,특수문자 조합 6자리 이상
    const regPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    setValidate((pre)=>{return {...pre, isSubmit:true}})

    if (!userInfo.grade) {
      setValidate((pre)=>{
        return {
          ...pre,
          gradeWorning:true, 
          gradeValidateMsg:validateMsgMap['grade_empty'] 
        }
      })
      return false;
    }
    if (!userInfo.phone) {
      setValidate((pre)=>{
        return {
          ...pre,
          phoneWorning:true, 
          phoneValidateMsg:validateMsgMap['phone_empty'] 
        }
      })
      return false;
    }
    if (!userInfo.email) {
      setValidate((pre)=>{
        return {
          ...pre,
          emailWorning:true, 
          emailValidateMsg:validateMsgMap['email_empty'] 
        }
      })
      return false;
    }
    if (!userInfo.allow_remote_ip) {
      setValidate((pre)=>{
        return {
          ...pre,
          allow_remote_ipWorning:true, 
          allow_remote_ipValidateMsg:validateMsgMap['allow_remote_ip_empty'] 
        }
      })
      return false;
    }

    if (userInfo.pwd) {
      // console.log('비밀번호가 빈칸이 아닐때')
      if (userInfo.pwd != userInfo.chkPwd) {
        setValidate((pre)=>{
          return {
            ...pre,
            chkPwdWorning:true,
            chkPwdValidateMsg:validateMsgMap['chkPwd_inValid'],
          }
        })
        return false;
      } else {
        if (!regPwd.test(userInfo.pwd)) {
          setValidate((pre)=>{
            return {
              ...pre,
              pwdWorning:true, 
              chkPwdWorning:false, 
              pwdValidateMsg:validateMsgMap['pwd_inValid'] 
            }
          })
          return false;
        } else {
          setValidate((pre)=>{
            return {
              ...pre,
              pwdWorning:false, 
              chkPwdWorning:false, 
            }
          })
          // 비밀번호 변경을 시도했고 유효성 통과 했을 때.
          setSaveConfirm(true);
        }
      }
    } else {
      // console.log('비밀번호가 빈칸일때')
    
      if ( !validate.pwdWorning
        && !validate.chkPwdWorning
        && !validate.gradeWorning
        && !validate.phoneWorning
        && !validate.emailWorning
        && !validate.allow_remote_ipWorning ) 
      setSaveConfirm(true);
    }
  }
  console.log('validate ------>>> ',validate)
  console.log('userInfo ------>>> ',userInfo)
  console.log('userInfo.grade ------>>> ',userInfo.grade)

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
                value={userInfo.grade || ""}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="grade"
                id="grade"
                required
              />
              {validate.isSubmit && validate.gradeWorning && 
                <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {validate.gradeValidateMsg}
                  </span>
                </div>
                }
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
              {validate.isSubmit && validate.pwdWorning && 
                <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {validate.pwdValidateMsg}
                  </span>
                </div>
                }
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
              {validate.isSubmit && validate.chkPwdWorning && 
                <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {validate.chkPwdValidateMsg}
                  </span>
                </div>
                }
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
              {validate.isSubmit && validate.phoneWorning && 
                <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {validate.phoneValidateMsg}
                  </span>
                </div>
                }
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
              {validate.isSubmit && validate.emailWorning && 
                <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {validate.emailValidateMsg}
                  </span>
                </div>
                }
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
              {validate.isSubmit && validate.allow_remote_ipWorning && 
                <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {validate.allow_remote_ipValidateMsg}
                  </span>
                </div>
                }
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
          // onClick={() => setSaveConfirm(true)}
          onClick={onConfirm}
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
  );
};

export default EditDetailMyAccount;
