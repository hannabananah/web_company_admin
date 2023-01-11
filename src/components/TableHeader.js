import { useStyles } from "~/styles/TableHeader";

const TableHeader = (props) => {
  const classes = useStyles();
  
  return (
    <section className={classes.root}>
      <h2 className={classes.mainTitle}>{props.title}</h2>
    </section>
  )
}
export default TableHeader; 