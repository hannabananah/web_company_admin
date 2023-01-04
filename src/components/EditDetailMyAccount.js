import { useState } from "react";
import useStyles from "~/styles/AddUserAccount";
import "~/styles/Toggle.css";

const EditDetailMyAccount = ({ backState }) => {
  const classes = useStyles();

  return (
    <figure className={classes.userAccContainer}>
      <table
        style={{ borderCollapse: "collapse", borderSpacing: 0 }}
        className={classes.tableStyle}
      >
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>아이디</label>
            </th>
            <td className={classes.contentStyle}>
              나의 계정 관리, 나의 아이디입니다
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>관리자 권한</label>
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
              <label className={classes.leftbodyext}>비밀번호</label>
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
              <label className={classes.leftbodyext}>비밀번호 확인</label>
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
              <label className={classes.leftbodyext}>전화번호</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone1"
                id="name"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone2"
                id="name"
                required
              />
              &nbsp;-&nbsp;
              <input
                type="tel"
                className={classes.inputNumStyle}
                name="phone3"
                id="name"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftbodyext}>이메일</label>
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
              <label className={classes.leftbodyext}>접속허가 IP</label>
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
              <label className={classes.leftbodyext}>사용여부</label>
            </th>
            <td className={classes.inputLayout}>
              <label className={`auggleToggle ${classes.userToggle}`}>
                {/* <label className="auggleToggle"> */}
                <input role="switch" type="checkbox" />
                <span className={classes.toggleText}>알람</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={backState} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  );
};
export default EditDetailMyAccount;
