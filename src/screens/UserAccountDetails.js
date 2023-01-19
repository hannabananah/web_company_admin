import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { dateFormat } from "~/util/global";
import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import { DeleteModal } from "~/components/Modal";
// import EditDetailAccount from "~/components/EditDetailAccount";

const UserAccountDetails = () => {
  const user = useLocation().state;
  const token = localStorage.getItem("access_token");
  const classes = useStyles();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  // 계정삭제 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const onClickPrev = () => {
    // UserAccount.js
    navigate(-1);
  };
  const onClickEdit = () => {
    // UserAccountEdit.js
    // navigate('/setting_admin/user_account/edit', { state : user })
    navigate("/setting_admin/user_account/edit", { state: userData });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/admin/${user.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        // data.use_yn = data.use_yn ? true : false
        setUserData(data);
      });
  }, []);

  return (
    // <div>
    //   <TableHeader title="계정 상세" />
    //   <DetailAccount user={user} />
    // </div>
    <figure className={classes.userAccContainer}>
      <TableHeader title="계정 상세" />
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
            <td className={classes.contentStyle}>{userData.id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>관리자 권한</label>
            </th>
            <td className={classes.contentStyle}>{userData.grade}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>전화번호</label>
            </th>
            <td className={classes.contentStyle}>{userData.phone}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>이메일</label>
            </th>
            <td className={classes.contentStyle}>{userData.email}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>접속허가 IP</label>
            </th>
            <td className={classes.contentStyle}>{userData.allow_remote_ip}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>사용여부</label>
            </th>
            <td className={classes.contentStyle}>{userData.use_yn}</td>
          </tr>

          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.contentStyle}>
              {dateFormat(userData.createdAt)}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록자</label>
            </th>
            <td className={classes.contentStyle}>{user.id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>수정일</label>
            </th>
            {/* <td className={classes.contentStyle}>{dateFormat(userData.updatedAt)}</td> */}
            <td className={classes.contentStyle}>{userData.updatedAt}</td>
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
        <button onClick={openModal} className={classes.deleteBtn}>
          삭제
        </button>
      </div>
      <DeleteModal
        id={user.id}
        open={modalOpen}
        close={closeModal}
        header="계정 삭제"
      >
        <main>해당 계정을 삭제하시겠습니까?</main>
      </DeleteModal>
    </figure>
  );
};
export default UserAccountDetails;
