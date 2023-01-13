import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import images from "~/assets/js/Images";
import "~/styles/Toggle.css";

const AddUserAccount = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inactive, setInactive] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);

  const onClickPrev = () => {
    // UserAccount.js
    navigate('/setting_admin/user_account')
  }

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
                name="name"
                id="name"
                minlength="4"
                maxlength="30"
                required
              />
              <input
                type="submit"
                value="중복체크"
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
                name="name"
                id="name"
                minLength="8"
                maxLength="16"
                required
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
                name="name"
                id="name"
                minLength="8"
                maxLength="16"
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
                className={classes.inputNumStyle}
                name="phone1"
                id="name"
                maxLength="3"
                required
              />
              <span className={classes.inputDash}>&nbsp;&ndash;&nbsp;</span>
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone2"
                id="name"
                maxLength="4"
                required
              />
              <span className={classes.inputDash}>&nbsp;&ndash;&nbsp;</span>
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone3"
                id="name"
                maxLength="4"
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
                name="name"
                id="name"
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
                name="name"
                id="name"
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
                  role="switch"
                  type="checkbox"
                  defaultChecked
                  onClick={() => setInactive(!inactive)}
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
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  )
}
export default AddUserAccount; 