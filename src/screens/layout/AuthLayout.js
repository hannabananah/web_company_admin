import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
// import Cookies from "js-cookie";
import useStyles from "~/styles/AuthLayout";

const AuthLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // if (!Cookies.get("id")) {
    if ( !localStorage.getItem("access_token") ) { // 토큰 없으면
      navigate("/", { state: pathname });

    } else {  // 토큰 있으면

      
    }

    if (pathname == "/index.html" || pathname == "/index.html/") {
      navigate("/");
    }
  }, []);

  return (
    <div className={classes.outletRoot}>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
