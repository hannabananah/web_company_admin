import { useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import EditAppDetail from "~/components/EditAppDetail";

const AppDetail = ({ user, backState }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const onEdit = () => {
    setEdit(true);
  };
  const gobackstate = () => {
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <EditAppDetail user={user} gobackstate={gobackstate} />
      ) : (
        <figure className={classes.userAccContainer}>
          <section className={classes.titleSection}>
            <h2 className={classes.mainTitle}>APP 버전 상세</h2>
          </section>
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
                <td className={classes.contentStyle}>{user.firstName}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>관리자 권한</label>
                </th>
                <td className={classes.contentStyle}>{user.bloodGroup}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>전화번호</label>
                </th>
                <td className={classes.contentStyle}>{user.phone}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>이메일</label>
                </th>
                <td className={classes.contentStyle}>{user.email}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>접속허가 IP</label>
                </th>
                <td className={classes.contentStyle}>{user.ip}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>사용여부</label>
                </th>
                <td className={classes.contentStyle}>{user.gender}</td>
              </tr>

              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>등록일</label>
                </th>
                <td className={classes.contentStyle}>{user.birthDate}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>등록자</label>
                </th>
                <td className={classes.contentStyle}>{user.username}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>수정일</label>
                </th>
                <td className={classes.contentStyle}>{user.birthDate}</td>
              </tr>
            </tbody>
          </table>
          <div className={classes.submitBtns}>
            <button onClick={backState} className={classes.backBtn}>
              이전
            </button>
            <button onClick={() => onEdit(true)} className={classes.editBtn}>
              수정
            </button>
          </div>
        </figure>
      )}
    </>
  );
};
export default AppDetail;
