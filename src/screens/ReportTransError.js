import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableHeader from "~/components/TableHeader";
import useStyles from "~/styles/Add";

const ReportTransError = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <TableHeader title="번역 이상 신고" />
    </div>
  );
};
export default ReportTransError;
