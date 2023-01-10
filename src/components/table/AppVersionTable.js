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
            fetchData?.users?.slice(0, 10).map((i, index) => {
              return (
                <tr key={index} className={classes.tableTr}>
                  <td className={classes.td}>{i.id}</td>
                  <td className={classes.td}>{i.birthDate}</td>
                  <td className={classes.td}>{i.bloodGroup}</td>
                  <td className={classes.td}>{i.eyeColor}</td>
                  <td
                    className={`${classes.td} + ${classes.idLink}`}
                    onClick={() => onClickTarget(i)}
                  >
                    {i.ein}
                  </td>
                  <td className={classes.td}>{i.gender}</td>
                  <td className={classes.td}>{i.ein}</td>
                  <td className={classes.td}>
                    <span onClick={openModal} className={classes.uptActiveRed}>
                      Update
                    </span>
                  </td>
                </tr>
              );
            })}
          {/* 검색결과가 없습니다. */}
          {/* <tr>
            <td colSpan="8" className={classes.noDataText}>
              검색결과가 없습니다.
            </td>
          </tr> */}
        </tbody>
      </table>
    </figure>
  );
};

export default AppVersionTable;
