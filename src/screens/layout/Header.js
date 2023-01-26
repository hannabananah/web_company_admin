import { useLocation, useNavigate } from "react-router-dom";
import {
  allPaths,
  breadcrumbNameMap,
  breadCrumbsObj,
} from "../../util/sidenav_data";
import images from "~/assets/js/Images";
import useStyles from "~/styles/Header";
import BreadCrumbs from "~/components/BreadCrumbs";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  // const params = useLocation()?.state;
  // const params = useLocation()?.state?.urlParam;
  // console.log('______params______',params)

  let isEmpty = false;

  const emptyList = ["/", "/index.html"];
  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  const logOut = () => {
    navigate("/");
    // localStorage.removeItem("id");
    // localStorage.removeItem("adminKey");
    // localStorage.removeItem("access_token");
  };

  return (
    <>
      {/* {allPaths.includes(window.location.pathname) &&  */}
      {isEmpty ? null : (
        <header className={classes.root}>
          <div className={classes.userInfoSection}>

            <span className={classes.user}>{localStorage.getItem("id")}님</span>
            안녕하세요!
            <button className={classes.logoutBtn} onClick={logOut}>
              로그아웃
            </button>
          </div>
          <BreadCrumbs />
        </header>
      )}
    </>
  );
};
export default Header;
