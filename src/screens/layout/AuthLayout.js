import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
// import Cookies from "js-cookie";

import useStyles from "~/styles/AuthLayout";

const path = [
  "/index.html",
  "/index.html/",
  "/setting_admin/user_account",
  "/setting_admin/user_account/",
  "/setting_admin/my_account",
  "/setting_admin/my_account/",
  "/setting_admin/history",
  "/setting_admin/history/",
  "/member/member_status",
  "/member/member_status/",
  "/service",
  "/service/",
  "/statistics",
  "/statistics/",
  "/notice",
  "/notice/",
  "/system_settings",
  "/system_settings/",
];

const AuthLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // let pathname = window.location.pathname;

  useEffect(() => {
    // if (!Cookies.get("id")) {
    // if ( !localStorage.getItem("token") && path.includes(pathname) ) { // 토큰 없으면
    //   navigate("/", { state: pathname });
    // }

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
