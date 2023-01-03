import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import { menu } from "../../util/sidenav_menu";
import useStyles from "../../styles/SideBar";
import "../../styles/SideBar.css";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  let isEmpty = false;

  const emptyList = ["/","/index.html"];

  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  const list = [
  ];

  const [currPath, setCurrPath] = useState(location.pathname);
  
  const subNavList = [
    "/setting_admin/user_account",
    "/setting_admin/my_account",
    "/setting_admin/history",
    "/member/member_status"
  ];


  

  useEffect(()=>{
    if(subNavList.includes(location.pathname)){
      let oneDepth = location.pathname.split('/')[1]
      // console.log(oneDepth)
      console.log(true)
    } else {
      console.log(false)
    }
    setCurrPath(location.pathname)
  },[location.pathname])
  

  const changePath = (itemId) => {
    navigate(itemId)// 화면 전환
    setCurrPath(itemId);
  }

  console.log('location.pathname ----------->',location.pathname)
  console.log('currPath ------------>',currPath);

  return (
    <>
    {isEmpty ? null :
      <div className={classes.root}>
      <Navigation
        // activeItemId={location.pathname}
        activeItemId={currPath}
        onSelect={({ itemId }) => {
          if (!list.includes(itemId)) {
            // navigate(itemId);
            changePath(itemId)
          }

          // setCurrPath(itemId);
        }}
        items={menu}
      />
    </div>
    }
    </>
  );
};
export default SideBar;