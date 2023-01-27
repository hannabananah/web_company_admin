import React from "react";
import useStyles from "~/styles/Table";
import ColumnHeaderTable from "~/components/table/ColumnHeaderTable";
import { dateFormat, renderBirth } from "~/util/global";

const ReportTable = ({fetchData, isLoaded}) => {
  const classes = useStyles();
  console.log('fetchData------>',fetchData)

  const theadData = [
    {name:'전화번호',width:'40px',},{name:'계정',width:'150px',},{name:'OS',width:'80px',},{name:'신고 유형',width:'100px',},{name:'신고 내용',width:'100px',},{name:'신고일',width:'100px',},{name:'처리',width:'100px',},
  ];

  const table_header = theadData.map((item,index)=>{
    return (
      <React.Fragment key={index}>
        <td className={classes.th_td} style={{width:item.width}}>{item.name}</td>
      </React.Fragment>
    )
  })

  const table_data = fetchData?.map((i, index) => {
    return (
      <tr key={index} className={classes.tableTr}>
        {/* 번호 */}
        <td className={classes.td}>{}</td>
        {/* 계정 */}
        <td className={classes.td}>{i.user_id}</td>
        {/* OS */}
        <td className={classes.td}>{i.device_type}</td>
        {/* 신고 유형 */}
        <td className={classes.td}>{}</td>
        {/* 신고 내용 */}
        <td className={classes.td}>{}</td>
        {/* 신고일 */}
        <td className={classes.td}>{i.warning_dt}</td>
        {/* 처리 */}
        <td className={classes.td}>{}</td>
      </tr>
    );
  })

  return (
    <ColumnHeaderTable 
      table_header={table_header} 
      table_data={table_data}
    />
  )
}
export default ReportTable;