import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { dateFormat } from "~/util/global";
import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global"

const AppDetail = () => {
  const classes = useStyles();
  const user = useLocation().state;
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);

  const onClickPrev = () => {
    navigate(-1);
  };
  const onClickEdit = () => {
    // EditAppVer.js
    navigate("/service/app_version/details/edit", { state: user });
  };

  useEffect(() => {
    axios
      .get(`${g.base_url}api/version/${user.version_idx}`, {
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
      <TableHeader title="App 버전 상세" />
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
            <td className={classes.contentStyle}>{fetchData.store}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>OS</label>
            </th>
            <td className={classes.contentStyle}>{fetchData.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최신 APP 버전</label>
            </th>
            <td className={classes.contentStyle}>
              {fetchData.late_app_version}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최소 APP 버전</label>
            </th>
            <td className={classes.contentStyle}>
              {fetchData.min_app_version}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>업데이트 유형</label>
            </th>
            <td className={classes.contentStyle}>{fetchData.update_type}</td>
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
export default AppDetail;
