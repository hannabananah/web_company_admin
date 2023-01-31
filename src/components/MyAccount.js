import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { dateFormat } from "~/util/global";
import "~/styles/Toggle.css";
import useStyles from "~/styles/MyAccount";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global";

const MyAccountContent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [admin, setAdmin] = useState({});

  const onEdit = () => {
    setEdit(true);
  };
  useEffect(() => {
    getAdmin();
  }, []);
  const getAdmin = () => {
    axios
      .get(`${g.base_url}api/admin/${localStorage.getItem("id")}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
        setAdmin(data);
      });
  };

  const onClickEdit = () => {
    // EditDetailMyAccount.js
    navigate(`/setting_admin/my_account/edit`, { state: admin });
  };

  const onClickMailTo = (mail) => {
    return (window.location.href = `mailto:${mail}`);
  };

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="내 계정 관리" />
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
            <td
              className={classes.linkStyle}
              onClick={() => onClickMailTo(admin.email)}
            >
              {admin.email}
            </td>
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
            <td className={classes.contentStyle}>
              {admin.use_yn == "N" ? "미사용" : "사용"}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.contentStyle}>
              {dateFormat(admin.createdAt)}
            </td>
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
            <td className={classes.contentStyle}>
              {dateFormat(admin.updatedAt)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={onClickEdit} className={classes.editBtn}>
          수정
        </button>
      </div>
    </figure>
  );
};
export default MyAccountContent;
