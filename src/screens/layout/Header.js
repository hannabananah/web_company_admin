import useStyles from "~/styles/Header";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { allPaths, breadcrumbNameMap, breadCrumbsObj } from "../../util/sidenav_data";
import images from "~/assets/js/Images";
import React from "react";

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
      {/* {allPaths.includes(window.location.pathname) &&  */}
      {isEmpty ? null : 
      <header className={classes.root}>

        <div className={classes.userInfoSection}>
          <figure className={classes.figure}>
            <img src={images.icons.ANYCHAT_CI_HEADER} alt="anychat logo"/>
          </figure>
          <span className={classes.user}>{}님</span>안녕하세요!
        </div>

        <div className={classes.breadCrumbs}>  
          <Link to={'/'} className={classes.breadCrumbsLink}>홈</Link>
          {/* {breadCrumbsObj[window.location.pathname].map((item, index)=>{
            return (
              <React.Fragment key={index}> 
                <Link to={item.path} className={classes.breadCrumbsLink}>
                  <img src={images.icons.ARROWRIGHT} alt="arrow right" />
                  {item.title}
                </Link> 
              </React.Fragment>
            )
          })} */}
        </div>
      </header>
      }
    </>
    
  )
}
export default Header;