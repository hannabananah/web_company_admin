import { useStyles } from "~/styles/DashBoard";
import TableHeader from "~/components/TableHeader";
import LineChart from "~/components/chart/LineChart";

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.statusSection}>
        <h2 className={classes.displayNone}>가입 및 탈퇴 현황</h2>
        <TableHeader title="가입 및 탈퇴 현황" />
        <div className={classes.boxsWrapper}>
          <figure className={classes.statusBoxs}>
            <figcaption className={classes.statusLabel}>당일 기준</figcaption>
            <div>
              <h3>총 회원 수</h3>
              <span className={classes.memberCnt}>1,523,231</span>
            </div>
          </figure>

          <figure className={classes.statusBoxs}>
            <figcaption className={classes.statusLabel}>전일 기준</figcaption>
            <div>
              <h3>신규 가입자 수</h3>
              <span className={classes.memberCnt}>9,123</span>
            </div>
          </figure>

          <figure className={classes.statusBoxs}>
            <figcaption className={classes.statusLabel}>전일 기준</figcaption>
            <div>
              <h3>신규 탈퇴자 수</h3>
              <span className={classes.memberCnt}>0</span>
            </div>
          </figure>

          <figure className={classes.statusBoxs}>
            <figcaption className={classes.statusLabel} style={{textIndent:'-9999em'}}>전일 기준</figcaption>
            <div>
              <h3>휴면 회원 수</h3>
              <span className={classes.memberCnt}>9</span>
            </div>
          </figure>
        </div>
      </section>

      <section>
        <h2 className={classes.displayNone}>그래프</h2>
        <LineChart />
      </section>

      {/* <section>
        <h2 className={classes.displayNone}>데이터</h2>
        <div>
          <TableHeader title="데이터" />
        </div>
        <div>
          <TableHeader title="데이터" />
        </div>
      </section> */}
    </div>
  );
};
export default DashBoard;
