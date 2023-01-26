import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { dateFormat } from "~/util/global";
import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global"

const DetailIntroNoti = () => {
  const classes = useStyles();
  const user = useLocation().state;
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);

  const onClickPrev = () => {
    navigate(-1); // navigate('/notice/app_intro')
  };
  const onClickEdit = () => {
    // EditAppIntroNotice.js
    navigate("/notice/app_intro/details/edit", { state: fetchData });
  };

  useEffect(() => {
    axios
      .get(`${g.base_url}api/notice/${user.noti_idx}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        // data.use_yn = data.use_yn  === 'Y' ? true : false
        setFetchData(data);
        // console.log(userInfo.phone)
        console.log("+++++++++++", data);
      });
  }, []);

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
            <td className={classes.contentStyle}>{fetchData.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 유형</label>
            </th>
            <td className={classes.contentStyle}>
              <span
                className={
                  fetchData.noti_type == "urgent" ? classes.urgentText : null
                }
              >
                {fetchData.noti_type}
              </span>
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 노출 기간</label>
            </th>
            <td className={classes.contentStyle}>
              {dateFormat(fetchData.noti_start_dttm)}~
              {dateFormat(fetchData.noti_end_dttm)}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 제목</label>
            </th>
            <td className={classes.contentStyle}>{fetchData.noti_title}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 내용</label>
            </th>
            <td
              className={classes.contentStyle}
              dangerouslySetInnerHTML={{ __html: fetchData.noti_content }}
            />
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.contentStyle}>{fetchData.remark}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.contentStyle}>
              {dateFormat(fetchData.createdAt)}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록자</label>
            </th>
            <td className={classes.contentStyle}>{fetchData.reg_id}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>수정일</label>
            </th>
            <td className={classes.contentStyle}>
              {dateFormat(fetchData.updatedAt)}
            </td>
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
  );
};
export default DetailIntroNoti;
