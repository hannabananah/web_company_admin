import useStyles from "~/styles/Table";
import { dateFormat } from "~/util/global";

const NoticeSettingTable = (props) => {
  const { fetchData, isLoaded, onClickTarget, totalUser, currentPage,  postsPerPage } = props;

  const classes = useStyles();

  console.log(fetchData);
  console.log(isLoaded);

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead>
          <tr
            style={{
              borderBottom: "1px solid rgba(188, 191, 204, 0.2)",
              backgroundColor: "#FFF8F1",
            }}
          >
            <td className={classes.th_td} style={{ width: "40px" }}>
              번호
            </td>

            <td
              className={classes.th_td}
              style={{
                width: "100px",
              }}
            >
              공지 등록일
            </td>

            <td className={classes.th_td} style={{ width: "100px" }}>
              OS
            </td>
            <td className={classes.th_td} style={{ width: "400px" }}>
              공지 제목
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  {/* 번호 */}
                  <td className={classes.td}>{ ((totalUser - index) - ((currentPage - 1) * postsPerPage)) }</td>
                  {/* 공지 등록일 */}
                  <td className={classes.td}>{dateFormat(i.reg_dttm)}</td>
                  {/* OS */}
                  <td className={classes.td}>{i.os}</td>
                  {/* 공지 제목 */}
                  <td className={classes.td}>
                    <span
                      onClick={() => onClickTarget(i)}
                      className={classes.idLink}
                    >
                      {i.noti_title}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </figure>
  );
};

export default NoticeSettingTable;
