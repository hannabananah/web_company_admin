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
    <figure className={classes.reportDetailContainer}>
      <TableHeader title="번역 이상 신고" />
      <table className={classes.detailTable}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.detailContentStyle}>
            <th className={classes.titleLayout}>원문 텍스트 상세 내용</th>
            <td className={classes.detailContent}>{user.send_msg}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtn}>
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
    <figure className={classes.reportDetailContainer}>
      <TableHeader title="번역 이상 신고" />
      <table className={classes.detailTable}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.detailContentStyle}>
            <th className={classes.titleLayout}>
              1차 번역 영어 텍스트 상세 내용
            </th>
            <td className={classes.detailContent}>{user.en_msg}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtn}>
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
    <figure className={classes.reportDetailContainer}>
      <TableHeader title="번역 이상 신고" />
      <table className={classes.detailTable}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.detailContentStyle}>
            <th className={classes.titleLayout}>번역 텍스트 상세 내용</th>
            <td className={classes.detailContent}>
              <div>{user.receive_msg}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtn}>
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
      </div>
    </figure>
  );
};
