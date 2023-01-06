import useStyles from "~/styles/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { allPaths } from "../../util/sidenav_data";
import images from "~/assets/js/Images";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  let isEmpty = false;

  const emptyList = ["/","/index.html"];
  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  return (
    <>
      {allPaths.includes(window.location.pathname) && 
      <header className={classes.root}>
        <div className={classes.userInfoSection}>
          <figure className={classes.figure}>
            <img src={images.icons.ANYCHAT_CI_HEADER} alt="anychat logo"/>
          </figure>
          <span className={classes.user}>{}님</span>안녕하세요!
        </div>
        <div>bread crumbs</div>
      </header>
      }
    </>
    
  )
}
export default Header;