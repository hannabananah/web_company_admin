import images from "~/assets/js/Images";
import { useStyles } from "~/styles/button/SelectArrow";

const SelectArrow = (props)=> {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <img src={images.icons.ARROWRIGHT} alt="expand select" className={classes.expandSelect}/>
    </span>
  )
}
export default SelectArrow;