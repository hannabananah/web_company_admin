import useStyles from "~/styles/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { allPaths } from "../../util/sidenav_data";

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
        <h1>ANYCHAT 관리자시스템</h1>
        <button>로그아웃</button>
      </header>
      }
    </>
    
  )
}
export default Header;