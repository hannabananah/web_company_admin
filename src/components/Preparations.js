import images from "~/assets/js/Images";
import useStyles from "~/styles/Preparations";

const Preparations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>준비중입니다.</h3>
      <img src={images.SVG_PREPARATIONS} className={classes.img} alt="서비스 관리 페이지, 준비중입니다."  />
    </div>
  )
}
export default Preparations;