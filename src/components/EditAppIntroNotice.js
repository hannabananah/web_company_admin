import { useEffect, useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";

const EditAppIntroNotice = ({ gobackstate, user }) => {
  const classes = useStyles();

  //user info state
  const [userInfo, setUserInfo] = useState({
    os: user.ip,
    type: user.gender,
    period: user.phone,
    title: user.eyeColor,
    content: user.ip,
    desc: user.userAgent,
  });

  const { os, type, period, title, content, desc } = userInfo;

  const onChange = (e) => {
    console.log("onchange!!!!!!!!!!!");
    const { name, value, checked } = e.target;
    console.log("e.target.name:::::::", name);
    console.log("e.target.value:::::::::", value);
    console.log("e.target.checked:::::::::", checked);

    const newInfo = {
      ...userInfo,
      [name]: name == "type" ? !userInfo.type : value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  console.log("userInfo ----------->", userInfo);
  console.log("userInfo.use_yn ----------->", userInfo.type);

  return (
    <figure className={classes.userAccContainer}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>App Intro 공지 수정</h2>
      </section>
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>OS</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 유형</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.type}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="type"
                id="introNoti"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 노출 기간</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.period}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="period"
                id="introNoti"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 제목</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.title}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="title"
                id="introNoti"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 내용</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="tel"
                value={userInfo.content}
                onChange={onChange}
                className={classes.inputNumStyle}
                name="content"
                id="introNoti"
                maxLength="3"
                required
              />
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
                name="desc"
                id="introNoti"
              />
            </td>
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
export default EditAppIntroNotice;
