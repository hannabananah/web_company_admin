import { useState } from "react";
import useStyles from "~/styles/AddUserAccount";
import "~/styles/Toggle.css";
import EditDetailMyAccount from "~/components/EditDetailMyAccount";

const MyAccountContent = ({ backState }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const onEdit = () => {
    setEdit(true);
  };

  return (
    <div style={{ width: "100%" }}>
      {edit ? (
        <EditDetailMyAccount />
      ) : (
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
                <td className={classes.contentStyle}>나의 admin</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>관리자 권한</label>
                </th>
                <td className={classes.contentStyle}>시스템 관리자</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>전화번호</label>
                </th>
                <td className={classes.contentStyle}>000-0000-0000</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>이메일</label>
                </th>
                <td className={classes.contentStyle}>ab@ggg.co.kr</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>접속허가 IP</label>
                </th>
                <td className={classes.contentStyle}>000.000.000.0</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>사용여부</label>
                </th>
                <td className={classes.contentStyle}>사용</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>등록일</label>
                </th>
                <td className={classes.contentStyle}>0000-00-00 00:00</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>등록자</label>
                </th>
                <td className={classes.contentStyle}>홍길동</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftbodyext}>수정일</label>
                </th>
                <td className={classes.contentStyle}>0000-00-00 00:00</td>
              </tr>
            </tbody>
          </table>
          <div className={classes.submitBtns}>
            <button onClick={backState} className={classes.backBtn}>
              이전
            </button>
            <button onClick={onEdit} className={classes.editBtn}>
              수정
            </button>
          </div>
        </figure>
      )}
    </div>
  );
};
export default MyAccountContent;
