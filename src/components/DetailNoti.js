import { useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import EditAppIntroNotice from "~/components/EditAppIntroNotice";
import { useNavigate } from "react-router-dom";

const DetailNoti = ({ user, backState }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // 계정수정 페이지로
  const [edit, setEdit] = useState(false);
  const onEdit = () => {
    setEdit(true);
  };
  const gobackstate = () => {
    setEdit(false);
  };
  const onClickEdit = () => {
    navigate('/notice/app_intro/details/edit', { state : user })
  }
  const onClickPrev = () => {
    navigate('/notice/app_intro')
  }

  return (
    <>
      {edit ? (
        <EditAppIntroNotice user={user} gobackstate={gobackstate} />
      ) : (
        <figure className={classes.userAccContainer}>
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
                <td className={classes.contentStyle}>{user.os}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 유형</label>
                </th>
                <td className={classes.contentStyle}>
                  <span
                    className={
                      user.gender == "male" ? classes.urgentText : null
                    }
                  >
                    {user.noti_type}
                  </span>
                </td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 노출 기간</label>
                </th>
                <td className={classes.contentStyle}>{user.noti_start_dttm}~{user.noti_end_dttm}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 제목</label>
                </th>
                <td className={classes.contentStyle}>{user.eyeColor}</td>
              </tr>
              <tr className={classes.contentInput}>
                <th className={classes.leftLayout}>
                  <label className={classes.leftText}>공지 내용</label>
                </th>
                <td className={classes.contentStyle}>{user.noti_title}</td>
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
                <td className={classes.contentStyle}>{user.createdAt}</td>
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
                <td className={classes.contentStyle}>{user.updatedAt}</td>
              </tr>
            </tbody>
          </table>
          <div className={classes.submitBtns}>
            <button onClick={onClickPrev} className={classes.backBtn}>
              이전
            </button>
            {/* <button onClick={() => onEdit(true)} className={classes.editBtn}> */}
            <button onClick={onClickEdit} className={classes.editBtn}>
              수정
            </button>
          </div>
        </figure>
      )}
    </>
  );
};
export default DetailNoti;
