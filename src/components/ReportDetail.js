import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "~/styles/Toggle.css";
import useStyles from "~/styles/Add";
import TableHeader from "~/components/TableHeader";

export const OriginDetail = () => {
  const classes = useStyles();
  const user = useLocation().state;
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);

  const onClickPrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/error/${user.version_idx}`, {
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
      <TableHeader title="번역 이상 신고" />
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
            <td className={classes.contentStyle}>{fetchData.receive_msg}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
      </div>
    </figure>
  );
};
export const EnDetail = () => {
  const classes = useStyles();
  const user = useLocation().state;
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);

  const onClickPrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/error/${user.version_idx}`, {
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
      <TableHeader title="번역 이상 신고" />
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
            <td className={classes.contentStyle}>{fetchData.en_msg}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
      </div>
    </figure>
  );
};
export const TransDetail = () => {
  const classes = useStyles();
  const user = useLocation().state;
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);

  const onClickPrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/error/${user.version_idx}`, {
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
      <TableHeader title="번역 이상 신고" />
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
            <td className={classes.contentStyle}>{fetchData.send_msg}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
      </div>
    </figure>
  );
};
