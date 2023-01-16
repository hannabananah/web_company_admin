import { useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import { UptConfirmModal } from "~/components/Modal";

const EditDetailMyAccount = ({ goBackState }) => {
  const classes = useStyles();

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
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>내 계정 정보 수정</h2>
      </section>
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
            <td className={classes.fixedLayout}>
              나의 계정 관리, 나의 아이디입니다
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
                name="auth"
                id="myAccount"
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
                id="myAccount"
                maxLength="3"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone2"
                id="myAccount"
                maxLength="4"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone3"
                id="myAccount"
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
                name="email"
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
          onClick={openModal}
          className={classes.saveBtn}
        />
      </div>
      <UptConfirmModal open={modalOpen} close={closeModal} header="저장 완료">
        <main>저장했습니다.</main>
      </UptConfirmModal>
    </figure>
  );
};
export default EditDetailMyAccount;
