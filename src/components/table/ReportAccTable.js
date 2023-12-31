import React from "react";
import useStyles from "~/styles/Table";
import ColumnHeaderTable from "~/components/table/ColumnHeaderTable";
import { dateFormat, renderBirth } from "~/util/global";

const ReportAccTable = (props) => {
  const {
    fetchData,
    isLoaded,
    totalUser,
    currentPage,
    postsPerPage,
    onClickDormancy,
  } = props;
  const classes = useStyles();
  console.log("fetchData------>", fetchData);

  const theadData = [
    { name: "번호", width: "40px" },
    { name: "계정", width: "150px" },
    { name: "OS", width: "80px" },
    { name: "신고 유형", width: "100px" },
    { name: "신고 내용", width: "100px" },
    { name: "신고일", width: "100px" },
    { name: "계정 휴면", width: "100px" },
  ];

  const table_header = theadData.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <td className={classes.th_td} style={{ width: item.width }}>
          {item.name}
        </td>
      </React.Fragment>
    );
  });

  const table_data = fetchData?.map((i, index) => {
    return (
      <tr key={index} className={classes.tableTr}>
        {/* 번호 */}
        <td className={classes.td}>
          {totalUser - index - (currentPage - 1) * postsPerPage}
        </td>
        {/* 계정 */}
        <td className={classes.td}>{i.user_id}</td>
        {/* OS */}
        {/* <td className={classes.td}>{i.device_type}</td> */}
        <td className={classes.td}>Android</td>
        {/* 신고 유형 */}
        <td className={classes.td}>{i.warning_gbn}</td>
        {/* 신고 내용 */}
        <td className={classes.td}>
          {i.warning_gbn == "기타" ? "주식투자 권유" : "-"}
        </td>
        {/* 신고일 */}
        <td className={classes.td}>{renderBirth(i.warning_dt)}</td>
        {/* 처리 */}
        <td className={classes.td}>
          {i.state == 0 ? (
            <button
              className={classes.activeLiveBtn}
              onClick={() => onClickDormancy(i)}
            >
              처리하기
            </button>
          ) : i.state == 2 ? (
            "2022-01-23"
          ) : (
            "해제"
          )}
        </td>
      </tr>
    );
  });

  return (
    <ColumnHeaderTable table_header={table_header} table_data={table_data} />
  );
};
export default ReportAccTable;
