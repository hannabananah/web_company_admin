import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import images from "~/assets/js/Images";
import "~/styles/Toggle.css";
import useStyles from "~/styles/AccountAdd";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global";
import { validateMsgMap } from "~/util/utils";
import { SaveConfirmModal, UptConfirmModal } from "~/components/Modal";

const AddUserAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inactive, setInactive] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState();
  const [pwdCheck, setPwdCheck] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    grade: "",
    pwd: "",
    chkPwd: "",
    password: "",
    phone:'',
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    allow_remote_ip: "",
    use_yn: "Y",

    isSubmit: false,
    isIdDbChek:'',

    idWorning:'',
    gradeWorning:'',
    pwdWorning:'',
    chkPwdWorning:'',
    phoneWorning:'',
    emailWorning:'',
    allow_remote_ipWorning:'',

    idValidateMsg:'',
    gradeValidateMsg:'',
    pwdValidateMsg:'',
    chkPwdValidateMsg:'',
    phoneValidateMsg:'',
    emailValidateMsg:'',
    allow_remote_ipValidateMsg:'',
  });

  const onChange = (e) => {
    const { name, value, checked } = e.target;
    console.log('onChange name : ',name);

    // const newInfo = {
    //   ...userInfo,
    //   // [name]: name == "use_yn" ? !userInfo.use_yn : value, //e.target의 name과 value이다.
    //   [name]: name == "use_yn" ? (checked ? "Y" : "N") : value, //e.target의 name과 value이다.
    // };
    // setUserInfo(newInfo);

    setUserInfo((pre)=> {
      return {
        ...pre,
        [name]: name == "use_yn" ? (checked ? "Y" : "N") : value, //e.target의 name과 value이다.
        isIdDbChek: name == "id" ? false : pre.isIdDbChek,
        [`${name}Worning`]: validateMsgMap[`${name}_empty`] == pre[`${name}ValidateMsg`] ? false : pre[`${name}Worning`],
        [`${name}ValidateMsg`]: validateMsgMap[`${name}_empty`] == pre[`${name}ValidateMsg`] ? '' : pre[`${name}ValidateMsg`],
       }
    });
  };

  const onClickPrev = () => {
    // UserAccount.js
    navigate(-1);
  };

  // 저장완료 모달
  const [saveConfirm, setSaveConfirm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveConfirm(false);

    // const newInfo = {
    //   ...userInfo,
    //   password: userInfo.pwd, //e.target의 name과 value이다.
    // };
    // setUserInfo(newInfo);

    axios
      .post(
        `${g.base_url}api/admin/create`,
        {
          id: userInfo.id,
          grade: userInfo.grade,
          pwd: userInfo.pwd,
          chkPwd: userInfo.chkPwd,
          password: userInfo.pwd,
          phone: userInfo.phone,
          // phone1: userInfo."",
          // phone2: userInfo."",
          // phone3: userInfo."",
          email: userInfo.email,
          allow_remote_ip: userInfo.allow_remote_ip,
          use_yn: userInfo.use_yn,
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
  };

  const onConfirm = (e) => {
    e.preventDefault();
    // 비밀번호는 숫자,영문자,특수문자 조합 6자리 이상
    const regPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    // 아이디 중복체크 안했을시
    if (!userInfo.isIdDbChek) {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit:true, 
          idWorning:true, 
          idValidateMsg:validateMsgMap['id_not_dbChek'] 
        };
      });
    }

    // 관리자 권한 값 없을시
    if (!userInfo.grade) {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit:true, 
          gradeWorning:true, 
          gradeValidateMsg:validateMsgMap['grade_empty'] 
        };
      });
    }

    // 비밀번호 값 없을시
    if (!userInfo.pwd) {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit:true, 
          pwdWorning:true, 
          pwdValidateMsg:validateMsgMap['pwd_empty'] 
        };
      });
    } else {
      // 비밀번호 확인 값 없을시 
      if (!userInfo.chkPwd) {
        setUserInfo((pre) => {
          return { 
            ...pre, 
            isSubmit:true, 
            chkPwdWorning:true, 
            chkPwdValidateMsg:validateMsgMap['chkPwd_empty'] 
          };
        });
      } else {
        // 비밀번호 1차, 2차 다를시
        if (userInfo.pwd != userInfo.chkPwd) {
          setUserInfo((pre) => {
            return { 
              ...pre, 
              isSubmit:true, 
              chkPwdWorning:true, 
              chkPwdValidateMsg:validateMsgMap['chkPwd_inValid'] 
            };
          });
          // return false;
        } else {
          if (!regPwd.test(userInfo.pwd)){
            setUserInfo((pre) => {
              return { 
                ...pre, 
                isSubmit:true, 
                chkPwdWorning:false, 
                pwdWorning:true, 
                pwdValidateMsg:validateMsgMap['pwd_inValid'] 
              };
            });
          } else {
            setUserInfo((pre) => {
              return { 
                ...pre, 
                isSubmit:true, 
                chkPwdWorning:false, 
                pwdWorning:false 
              };
            });
          }
        }
      }
    }

    // 전화번호 값 없을시
    if (!userInfo.phone) {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit: true, 
          phoneWorning:true, 
          phoneValidateMsg:validateMsgMap['phone_empty'] 
        };
      });
    }

    // 이메일 값 없을시
    if (!userInfo.email) {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit:true, 
          emailWorning:true, 
          emailValidateMsg:validateMsgMap['email_empty'] 
        };
      });
    } 

    // 접속허가 ip 값 없을시
    if (!userInfo.allow_remote_ip) {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit:true, 
          allow_remote_ipWorning:true, 
          allow_remote_ipValidateMsg:validateMsgMap['allow_remote_ip_empty'] 
        };
      });
    }

    // 유효성 통과시
    if ( userInfo.isSubmit
      && !userInfo.idWorning
      && !userInfo.gradeWorning
      && !userInfo.pwdWorning
      && !userInfo.chkPwdWorning
      && !userInfo.phoneWorning
      && !userInfo.emailWorning
      && !userInfo.allow_remote_ipWorning ) 
      setSaveConfirm(true);
  };

  // 아이디 중복체크
  const duplicationCheck = (e) => {
    e.preventDefault();
    let regId = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,30}$/;

    if (userInfo.id == "") {
      setUserInfo((pre) => {
        return { 
          ...pre, 
          isSubmit:true, 
          isIdDbChek:false, 
          idWorning:true, 
          idValidateMsg:validateMsgMap['id_empty'] 
        };
      });
    } else {
      // 영문, 숫자 조합 4자리 이상 30자 미만
      if (!regId.test(userInfo.id) ) { 
        setUserInfo((pre) => {
          return { 
            ...pre, 
            isSubmit:true, 
            isIdDbChek:false, 
            idWorning:true, 
            idValidateMsg:validateMsgMap['id_inValid'] 
          };
        });
      } else {
        axios
          .get(`${g.base_url}api/admin/${userInfo.id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          })
          .then(({ data }) => {
            if (data.adminKey) {
              setUserInfo((pre) => {
                return { 
                  ...pre, 
                  isSubmit:true, 
                  isIdDbChek:false, 
                  idWorning:true, 
                  idValidateMsg:validateMsgMap['id_exists'] 
                };
              });
            } else {
              setUserInfo((pre) => {
                return { 
                  ...pre, 
                  isSubmit:true, 
                  isIdDbChek:true, 
                  idWorning:false, 
                  idValidateMsg:validateMsgMap['id_valid'] 
                };
              });
            }
          });
      }
    }
  };

  console.log(userInfo)

  return (
    <figure className={classes.adminAccContainer}>
      <TableHeader title="사용자 추가" />
      <table className={classes.adminTableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>아이디</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.adminInputStyle}
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
              {userInfo.isSubmit ? (
                <div className={classes.checkIconStyle}>
                  {userInfo.isSubmit && userInfo.idWorning &&
                    <img src={images.icons.LOGIN_INFO}
                      alt="중복체크 에러 아이콘"
                      className={classes.checkErrorIcon} />
                  }
                  <span className={userInfo.idWorning ? classes.checkErrorText : classes.checkNormalText}>
                    {userInfo.idValidateMsg}
                  </span>
                </div>
              ):null}

            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>관리자 권한</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.adminInputStyle}
                name="grade"
                id="grade"
                value={userInfo.grade}
                onChange={onChange}
                required
              />

              {userInfo.isSubmit && 
                <div className={classes.checkIconStyle}>
                  {userInfo.isSubmit && userInfo.gradeWorning &&
                    <img src={images.icons.LOGIN_INFO}
                      alt="오류 아이콘"
                      className={classes.checkErrorIcon} />
                  }
                  <span className={userInfo.gradeWorning ? classes.checkErrorText : classes.checkNormalText}>
                    {userInfo.gradeValidateMsg}
                  </span>
                </div>
              }

            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>비밀번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="password"
                className={classes.adminInputStyle}
                name="pwd"
                id="pwd"
                minLength="8"
                maxLength="16"
                required
                value={userInfo.pwd}
                onChange={onChange}
              />
              {/* 비밀번호 유효성 검사 결과 문구 */}
              {userInfo.isSubmit && userInfo.pwdWorning &&
               <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {userInfo.pwdValidateMsg}
                  </span>
                </div>
              }
            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>비밀번호 확인</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="password"
                className={classes.adminInputStyle}
                name="chkPwd"
                id="chkPwd"
                minLength="8"
                maxLength="16"
                required
                value={userInfo.chkPwd}
                onChange={onChange}
              />
              {/* 비밀번호 확인 유효성 검사 결과 문구 */}
              {userInfo.isSubmit && userInfo.chkPwdWorning &&
               <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {userInfo.chkPwdValidateMsg}
                  </span>
                </div>
              }
            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>전화번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="tel"
                className={classes.adminInputStyle}
                name="phone"
                id="phone"
                maxLength="50"
                required
                value={userInfo.phone}
                onChange={onChange}
              />
              {/* 전화번호 유효성 검사 결과 문구 */}
              {userInfo.isSubmit && userInfo.phoneWorning &&
               <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {userInfo.phoneValidateMsg}
                  </span>
                </div>
              }
            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>이메일</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.adminInputStyle}
                name="email"
                id="email"
                required
                value={userInfo.email}
                onChange={onChange}
              />

              {/* 이메일 유효성 검사 결과 문구 */}
              {userInfo.isSubmit ? (
                <div className={classes.checkIconStyle}>
                  {userInfo.isSubmit && userInfo.emailWorning &&
                    <img
                    src={images.icons.LOGIN_INFO}
                    alt="중복체크 에러 아이콘"
                    className={classes.checkErrorIcon}
                  />}
                  <span className={userInfo.emailWorning ? classes.checkErrorText : classes.checkNormalText}>
                    {userInfo.emailValidateMsg}
                  </span>
                </div>
              ):null}
              {/* {validate.email == false && validate.type =="empty" && (
                <div className={classes.checkIconStyle}>
                  <img
                    src={images.icons.LOGIN_INFO}
                    alt="중복체크 에러 아이콘"
                    className={classes.checkErrorIcon}
                  />
                  <span className={classes.checkErrorText}>
                    이메일을 입력해 주세요.
                  </span>
                </div>
              )} */}
            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
              <label className={classes.leftText}>접속허가 IP</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.adminInputStyle}
                name="allow_remote_ip"
                id="allow_remote_ip"
                required
                value={userInfo.allow_remote_ip}
                onChange={onChange}
              />
              {/* 접속허가 IP 유효성 검사 결과 문구 */}
              {userInfo.isSubmit && userInfo.allow_remote_ipWorning &&
               <div className={classes.checkIconStyle}>
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                  <span className={classes.checkErrorText}>
                    {userInfo.allow_remote_ipValidateMsg}
                  </span>
                </div>
              }
            </td>
          </tr>
          <tr className={classes.adminContentInput}>
            <th className={classes.adminLeftLayout}>
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
                {/* {inactive ? ( */}
                {userInfo.use_yn == "N" ? (
                  <span className={classes.adminToggleText2}>미사용</span>
                ) : (
                  <span className={classes.adminToggleText1}>사용</span>
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
        <input
          type="submit"
          value="저장"
          className={classes.saveBtn}
          // onClick={handleSubmit}
          // onClick={() => setSaveConfirm(true)}
          onClick={onConfirm}
        />
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
export default AddUserAccount;
