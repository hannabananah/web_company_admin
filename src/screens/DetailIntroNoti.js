import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TableHeader from "~/components/TableHeader";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";

const DetailIntroNoti = () => {
  const user = useLocation().state;
  const classes = useStyles();
  const navigate = useNavigate();
  // console.log('user---->', user)

  const onClickEdit = () => {
    // EditAppIntroNotice.js
    navigate('/notice/app_intro/details/edit', { state : user })
  }
  const onClickPrev = () => {
    navigate('/notice/app_intro')
  }

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="App Intro 공지 상세" /> 
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
            <td className={classes.contentStyle}>{user.ip}</td>
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
                {user.gender}
              </span>
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 노출 기간</label>
            </th>
            <td className={classes.contentStyle}>{user.phone}</td>
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
            <td className={classes.contentStyle}>{user.ip}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.contentStyle}>{user.userAgent}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.contentStyle}>{user.firstName}</td>
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
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
        <button onClick={onClickEdit} className={classes.editBtn}>
          수정
        </button>
      </div>
    </figure>
  )
}
export default DetailIntroNoti