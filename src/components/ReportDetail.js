import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "~/styles/Toggle.css";
import useStyles from "~/styles/report";
import TableHeader from "~/components/TableHeader";

export const OriginDetail = () => {
  const classes = useStyles();
  const user = useLocation().state.state;
  const navigate = useNavigate();

  const onClickPrev = () => {
    navigate(-1);
  };

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="번역 이상 신고" />
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.detaileContent}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>원문 텍스트 상세 내용</label>
            </th>
            <td className={classes.contentStyle}>{user.receive_msg}</td>
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
  const user = useLocation().state.state;
  const navigate = useNavigate();

  const onClickPrev = () => {
    navigate(-1);
  };

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="번역 이상 신고" />
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.detaileContent}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>
                1차 번역 영어 텍스트 상세 내용
              </label>
            </th>
            <td className={classes.contentStyle}>{user.en_msg}</td>
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
  const user = useLocation().state.state;
  const navigate = useNavigate();

  const onClickPrev = () => {
    navigate(-1);
  };

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="번역 이상 신고" />
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.detaileContent}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>번역 텍스트 상세 내용</label>
            </th>
            <td className={classes.contentStyle}>
              {user.send_msg}
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </td>
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
