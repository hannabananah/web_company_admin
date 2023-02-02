import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import images from "~/assets/js/Images";
import "~/styles/Toggle.css";
import useStyles from "~/styles/AccountAdd";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global";
import { SaveConfirmModal, UptConfirmModal } from "~/components/Modal";

const validateMsgMap = {
  id_empty: '아이디를 입력하세요.',
  id_not_dbChek : '아이디 중복체크를 하세요.',
  id_exists: '동일한 아이디가 존재합니다.',
  id_valid: '사용가능한 아이디입니다.',
  id_inValid: '아이디는 영문, 숫자 조합 4자리 이상 30자 미만이어야 합니다.',
  grade_empty: '관리자 권한명을 입력해 주세요.',
  pwd_empty: '비밀번호를 입력해 주세요.',
  pwd_chek_empty: '비밀번호 확인을 입력해 주세요.',
  pwd_inValid: '비밀번호는 숫자,영문자,특수문자 조합 6자리 이상이어야 합니다.',
  phone_empty: '휴대폰 번호를 입력해 주세요.',
  email_empty: '이메일을 입력해 주세요.',
  ip_empty: 'IP를 입력해 주세요.',
}

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
    // pwdWorning:'',
    phoneWorning:'',
    emailWorning:'',
    ipWorning:'',

    idValidateMsg:'',
    gradeValidateMsg:'',
    pwdValidateMsg:'',

    phoneValidateMsg:'',
    emailValidateMsg:'',
    ipValidateMsg:'',
  });

  console.log(
    Object.values(validateMsgMap)
  )

  const onChange = (e) => {
    const { name, value, checked } = e.target;
    console.log('onChange name : ',name);

    
    // console.log(checked);

    // const newInfo = {
    //   ...userInfo,
    //   // [name]: name == "use_yn" ? !userInfo.use_yn : value, //e.target의 name과 value이다.
    //   [name]: name == "use_yn" ? (checked ? "Y" : "N") : value, //e.target의 name과 value이다.
    // };
    // setUserInfo(newInfo);

    setUserInfo((pre)=> {
      console.log(pre[`${name}ValidateMsg`])

      return {
        ...pre,
        [name]: name == "use_yn" ? (checked ? "Y" : "N") : value, //e.target의 name과 value이다.
        isIdDbChek: name == "id" && false,
        
        [`${name}Worning`]: name == "id" ? pre.idWorning : false,
        [`${name}ValidateMsg`]: validateMsgMap[`${name}_empty`] == pre[`${name}ValidateMsg`] ? '' : pre[`${name}ValidateMsg`],
        //  id_empty: '아이디를 입력하세요.',
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

    // if (userInfo.pwd != userInfo.chkPwd) {
    //   setPwdCheck(true)
    //   // setInvalid((pre) => {
    //   //   return { ...pre, [invalid.state]:true, [invalid.type]:'password' };
    //   // });
    //   // alert("비밀번호 확인을 해주세요.");
    //   return false;
    // }
    const newInfo = {
      ...userInfo,
      password: userInfo.pwd, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);

    // eslint-disable-next-line no-restricted-globals
    // if (confirm("저장 하시겠습니까?")) {
    // axios
    //   .post(
    //     `${g.base_url}api/admin/create`,
    //     {
    //       ...userInfo,
    //     },
    //     {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("access_token"),
    //       },
    //     }
    //   )
    //   .then(({ data }) => {
    //     console.log(data);
    //     openModal();
    //   });
    // }
  };

  const onConfirm = (e) => {
    e.preventDefault();

    // 아이디 중복체크 안했을시
    if (!userInfo.isIdDbChek) {
      setUserInfo((pre) => {
        return { ...pre, isSubmit:true, idWorning:true, idValidateMsg:validateMsgMap['id_not_dbChek'] };
      });
    }

    // 관리자 권한 값 없을시
    if (!userInfo.grade) {
      setUserInfo((pre) => {
        return { ...pre, isSubmit:true, gradeWorning:true, gradeValidateMsg:validateMsgMap['grade_empty'] };
      });
    }

    // 비밀번호 값 없을시
    if (!userInfo.pwd) {
      setUserInfo((pre) => {
        return { ...pre, isSubmit: true, pwdWorning:true, pwdValidateMsg:validateMsgMap['pwd_empty'] };
      });

    } else {

    }


    // 비밀번호 1차, 2차 다를시
    if (userInfo.pwd != userInfo.chkPwd) {

      setUserInfo((pre) => {
        return { ...pre, isSubmit: true,  };
      });
      return false;
    }

    // 비밀번호 확인 값 없을시

    // 전화번호 값 없을시
    
    // 이메일 값 없을시
    if (!userInfo.email) {
      setUserInfo((pre) => {
        return { ...pre, isSubmit:true, emailWorning:true, emailValidateMsg:validateMsgMap['email_empty'] };
      });
    }

    // 접속허가 ip 값 없을시


    // ?????? 이거뭐지 ?????????????????????????
    // setSaveConfirm(true);
  };

  // 아이디 중복체크
  const duplicationCheck = (e) => {
    e.preventDefault();
    let regId = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,30}$/;

    if (userInfo.id == "") {
      setUserInfo((pre) => {
        return { ...pre, isSubmit:true, isIdDbChek:false, idWorning:true, idValidateMsg:validateMsgMap['id_empty'] };
      });
    } else {
      // 영문, 숫자 조합 4자리 이상 30자 미만
      if (!regId.test(userInfo.id) ) { 
        setUserInfo((pre) => {
          return { ...pre, isSubmit:true, isIdDbChek:false, idWorning:true, idValidateMsg:validateMsgMap['id_inValid'] };
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
                return { ...pre, isSubmit:true, isIdDbChek:false, idWorning:true, idValidateMsg:validateMsgMap['id_exists'] };
              });
            } else {
              setUserInfo((pre) => {
                return { ...pre, isSubmit:true, isIdDbChek:true,  idWorning:false, idValidateMsg:validateMsgMap['id_valid'] };
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
              {userInfo.isSubmit && 
               <div className={classes.checkIconStyle}>
                {userInfo.isSubmit && userInfo.pwdWorning &&
                  <img src={images.icons.LOGIN_INFO}
                    alt="오류 아이콘"
                    className={classes.checkErrorIcon} />
                }
                  <span className={userInfo.pwdWorning ? classes.checkErrorText : classes.checkNormalText}>
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
