import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import TableHeader from "~/components/TableHeader";
import axios from "axios";
import { dateFormat } from "~/util/global";
import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import { DeleteModal } from "~/components/Modal";
import { g } from "~/util/global";

const UserAccountDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const location = useLocation();
  const user = useLocation()?.state?.state;
  // console.log(location)
  // console.log(user)
  const params = useParams();
  // console.log("params :", params )
  const { id } = useParams();
  // console.log("id :", id )

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
    navigate(`/setting_admin/user_account/edit/${userData.id}`, {
      state: { state: userData, urlParam: userData.id },
    });
  };

  const onClickConfirm = () => {
    // axios
    //   .post(
    //     `${g.base_url}api/admin/delete`,
    //     { id: user.id },
    //     {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("access_token"),
    //       },
    //     }
    //   )
    //   .then(({ data }) => {
    //     console.log(data);
    //     setModalOpen(false)
    //     // UserAccount.js
    //     navigate("/setting_admin/user_account");
    //   });
  };
  const onClickCancel = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    axios
      // .get(`${g.base_url}api/admin/${user.id}`, {
      .get(`${g.base_url}api/admin/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        // data.use_yn = data.use_yn ? true : false
        setUserData(data);
      });
  }, []);

  const onClickMailTo = (mail) => {
    return (window.location.href = `mailto:${mail}`);
  };

  return (
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
            <td
              className={classes.linkStyle}
              onClick={() => onClickMailTo(userData.email)}
            >
              {userData.email}
            </td>
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
            <td className={classes.contentStyle}>
              {userData.use_yn == "N" ? "미사용" : "사용"}
            </td>
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
            <td className={classes.contentStyle}>{userData.reg_id}</td>
            {/* <td className={classes.contentStyle}>{params.id}</td> */}
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>수정일</label>
            </th>
            <td className={classes.contentStyle}>
              {dateFormat(userData.updatedAt)}
            </td>
            {/* <td className={classes.contentStyle}>{userData.updatedAt}</td> */}
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
        open={modalOpen}
        close={closeModal}
        onClickConfirm={onClickConfirm}
        onClickCancel={onClickCancel}
        header="계정 삭제"
      >
        <main>해당 계정을 삭제하시겠습니까?</main>
      </DeleteModal>
    </figure>
  );
};
export default UserAccountDetails;
