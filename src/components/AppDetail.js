import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";

const AppDetail = ({ user, backState }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const onEdit = () => {
    setEdit(true);
  };
  const gobackstate = () => {
    setEdit(false);
  };

  const onClickPrev = () => {
    // 
    navigate(-1)
  }
  const onClickEdit = () => {
    // EditAppVer.js
    navigate('/service/app_version/details/edit', { state : user })
  }

  return (
    <figure className={classes.userAccContainer}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>App 버전 상세</h2>
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
            <td className={classes.contentStyle}>{user.store}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>OS</label>
            </th>
            <td className={classes.contentStyle}>{user.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최신 APP 버전</label>
            </th>
            <td className={classes.contentStyle}>{user.late_app_version}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최소 APP 버전</label>
            </th>
            <td className={classes.contentStyle}>{user.min_app_version}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>업데이트 유형</label>
            </th>
            <td className={classes.contentStyle}>{user.update_type}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.contentStyle}>{user.remark}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.contentStyle}>{user.reg_dttm}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록자</label>
            </th>
            <td className={classes.contentStyle}>{user.reg_id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>수정일</label>
            </th>
            <td className={classes.contentStyle}>{user.upt_dttm}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        {/* <button onClick={backState} className={classes.backBtn}> */}
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
        {/* <button onClick={() => onEdit(true)} className={classes.editBtn}> */}
        <button onClick={onClickEdit} className={classes.editBtn}>
          수정
        </button>
      </div>
    </figure>
  );
};
export default AppDetail;
