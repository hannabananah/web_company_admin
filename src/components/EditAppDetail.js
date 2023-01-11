import { useEffect, useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";

const EditDetailAccount = ({ gobackstate, user }) => {
  const classes = useStyles();

  //user info state
  const [userInfo, setUserInfo] = useState({
    store: user.firstName,
    os: user.bloodGroup,
    recentVer: user.phone,
    minVer: user.email,
    uptType: user.gender,
    desc: user.gender,
    date: user.birthDate,
  });

  const { store, os, recentVer, minVer, uptType, desc, date } = userInfo;

  const onChange = (e) => {
    const { name, value, checked } = e.target;
    console.log("e.target.name:::::::", name);
    console.log("e.target.value:::::::::", value);
    console.log("e.target.checked:::::::::", checked);
    setUserInfo(userInfo);
  };

  return (
    <figure className={classes.userAccContainer}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>App 버전 수정</h2>
      </section>
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>스토어</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.store}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>OS</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최신 APP 버전</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.recentVer}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="recentVer"
                id="recentVer"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최소 APP 버전</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.minVer}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="minVer"
                id="minVer"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>업데이트 유형</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="radio"
                id="choice"
                name="update_type"
                value="choice"
                defaultChecked={userInfo.uptType == "female"}
              />
              <label for="choice">선택</label>
              <input
                type="radio"
                id="compulsion"
                name="update_type"
                value="compulsion"
                defaultChecked={userInfo.uptType == "male"}
              />
              <label for="compulsion">강제</label>
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.desc}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="description"
                id="description"
                maxLength={40}
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.date}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={gobackstate} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  );
};
export default EditDetailAccount;
