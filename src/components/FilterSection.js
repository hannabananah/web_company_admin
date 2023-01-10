import { useStyles } from "~/styles/FilterSection";

const FilterSection = (props) => {
  const {
    left,
    right
  } = props;
  const classes = useStyles();

	return (
    <section className={classes.root}>
      <div className={classes.filterUnit}> 
        {left}
      </div>
      <div className={classes.filterUnit}>
        {right}
      </div>
    </section>
	);
}

export default FilterSection;