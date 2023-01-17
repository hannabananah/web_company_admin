import {useEffect, useState} from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import EditDetailMyAccount from "~/components/EditDetailMyAccount";
import axios from "axios";

const MyAccountContent = () => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [admin, setAdmin] = useState({});
  const onEdit = () => {
    setEdit(true);
  };
  useEffect(() => {
    getAdmin();
  },[]);
  const getAdmin = () => {
    axios
        .get(`http://localhost:3001/api/admin/${localStorage.getItem('id')}`, {
          headers: {
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
          },
        })
        .then(({data}) => {
          console.log(data);
          setAdmin(data);
        });
  }


  const goBackState = () => {
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <EditDetailMyAccount goBackState={goBackState} admin={admin} />
      ) : (
        <figure className={classes.userAccContainer}>
          <section className={classes.titleSection}>
            <h2 className={classes.mainTitle}>내 계정 관리</h2>
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
                <td className={classes.contentStyle}>{admin.id}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>관리자 권한</label>
                </th>
                <td className={classes.contentStyle}>{admin.grade}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>전화번호</label>
                </th>
                <td className={classes.contentStyle}>{admin.phone}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>이메일</label>
                </th>
                <td className={classes.contentStyle}>{admin.email}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>접속허가 IP</label>
                </th>
                <td className={classes.contentStyle}>{admin.allow_remote_ip}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>사용여부</label>
                </th>
                <td className={classes.contentStyle}>{admin.use_yn}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>등록일</label>
                </th>
                <td className={classes.contentStyle}>{admin.createdAt}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>등록자</label>
                </th>
                <td className={classes.contentStyle}>{admin.reg_id}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>수정일</label>
                </th>
                <td className={classes.contentStyle}>{admin.updatedAt}</td>
              </tr>
            </tbody>
          </table>
          <div className={classes.submitBtns}>
            <button onClick={onEdit} className={classes.editBtn}>
              수정
            </button>
          </div>
        </figure>
      )}
    </>
  );
};
export default MyAccountContent;
