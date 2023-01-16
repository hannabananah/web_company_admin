import { useStyles } from "~/styles/TableHeader";

const TableHeader = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h2 className={classes.mainTitle}>{props.title}</h2>
    </div>
  )
}
export default TableHeader; 