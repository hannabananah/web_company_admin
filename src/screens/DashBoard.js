import { useStyles } from "~/styles/DashBoard";
import TableHeader from "~/components/TableHeader";

const DashBoard = () => {
  const classes = useStyles();

  return (
    <div>
      <section>
        <h2 className={classes.displayNone}>가입 및 탈퇴 현황</h2>
        <TableHeader title="가입 및 탈퇴 현황"/>
      </section>

      <section>
        <h2 className={classes.displayNone}>그래프</h2>
      </section>

      <section>
        <h2 className={classes.displayNone}>데이터</h2>
        <div>
          <TableHeader title="데이터"/>
        </div>
        <div>
          <TableHeader title="데이터"/>
        </div>
      </section>
    </div>
  )
}
export default DashBoard;