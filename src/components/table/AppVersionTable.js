import useStyles from "~/styles/Table";

const AppVersionTable = (props) => {
  const { openModal, fetchData, isLoaded, onClickTarget } = props;
  const classes = useStyles();

  console.log(fetchData);
  console.log(isLoaded);

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr style={{ borderBottom: "1px solid rgba(188, 191, 204, 0.2)" }}>
            <td className={classes.th_td} style={{ width: "30px" }}>
              번호
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              등록일
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              스토어
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              OS
            </td>
            <td className={classes.th_td} style={{ width: "80px" }}>
              최신 APP 버전
            </td>
            <td className={classes.th_td} style={{ width: "100px" }}>
              최소 앱 버전
            </td>
            <td className={classes.th_td} style={{ width: "150px" }}>
              업데이트 유형
            </td>
            <td className={classes.th_td} style={{ width: "140px" }}>
              업데이트
            </td>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            fetchData?.map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  {/* 번호 */}
                  <td className={classes.td}>{i.version_idx}</td>
                  {/* 등록일 */}
                  <td className={classes.td}>{i.reg_dttm}</td>
                  {/* 스토어 */}
                  <td className={classes.td}>{i.store}</td>
                  {/* OS */}
                  <td className={classes.td}>{i.os}</td>
                  {/* 최신 APP 버전 */}
                  <td
                    className={`${classes.td} + ${classes.idLink}`}
                    onClick={() => onClickTarget(i)}
                  >
                    {i.late_app_version}
                  </td>
                  {/* 최소 APP 버전 */}
                  <td className={classes.td}>{i.min_app_version}</td>
                  {/* 업데이트 유형 */}
                  <td className={classes.td}>{i.update_type}</td>
                  {/* 업데이트 */}
                  <td className={classes.td}>
                    <span
                      id="appTable"
                      onClick={openModal}
                      className={
                        i.status !== "N" ? i.update_type === "choice" ?  classes.uptActiveBlue : classes.uptActiveRed :classes.uptInactive                       

                        // i.status == "N"
                        //   ? classes.uptInactive
                        //   : i.update_type === "choice"
                        //   ? classes.uptActiveBlue
                        //   : classes.uptActiveRed
                      }
                    >
                      Update
                    </span>
                  </td>
                </tr>
              );
            })}
          {/* 검색결과가 없습니다. */}
          {/* <tr>
            <td colSpan="8" className={classes.noDataText}>
              검색 결과가 없습니다.
            </td>
          </tr> */}
        </tbody>
      </table>
    </figure>
  );
};

export default AppVersionTable;
