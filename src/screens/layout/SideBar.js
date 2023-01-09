import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import { sidenav_data, allPaths } from "~/util/sidenav_data";
import useStyles from "~/styles/SideBar";
import "~/styles/SideBar.css";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import SVG_NAV_ICON_1ST from "~/assets/images/icon_navi_1.svg";
import images from "~/assets/js/Images";

const pathsArr = (index) => {
  let List = sidenav_data.filter((item)=>{ return item.id == index })
  let paths;
  if ( List[0].subMenu ) {
    paths = List[0].subMenu.map((i,index)=>{ return i.path });
    paths.unshift(List[0]['path'])
  } else {
    paths = List[0]['path']
  }
  return paths;
}

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  let isEmpty = false;

  const emptyList = ["/","/index.html"];

  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  const renderMenuItems = (subMenu) => {
    // console.log(subMenu)
    return (
      subMenu.map((item,index)=>{
        return (
          <li key={index} 
            className={
              item.path == window.location.pathname 
              ? classes.activesubMenuList 
              : classes.subMenuList} 
            onClick={()=>navigate(item.path)}>- {item.title}
          </li>
        )  
      })
    )
  }

  useEffect(()=>{
    const details = document.querySelectorAll('details');
    const summarys = document.querySelectorAll('summary');

    for(let i=0; i<details.length; i++) {
        if ( pathsArr(i).includes(window.location.pathname) ) {
        details[i].setAttribute('open',true);
        // summarys[i].classList.add('activeMenu')
      } else {
        // summarys[i].classList.remove('activeMenu')
      } 
    } 
  },[window.location.pathname])

  const logOut = () => {
    navigate('/')
  }

  return (
    <>
    {allPaths.includes(window.location.pathname) && 
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.h1}>
            <img src={images.icons.ANYCHAT_LOGO} alt="anychat 관리시스템" />
            <span>관리시스템</span>
          </h1>
          {sidenav_data.map((item,index)=>{
            if(item.subMenu) {
              return (
                <details key={index} className={`${classes.details} details`}>
                  <summary className={classes.menu}>{item.title}</summary>
                  <ol className={classes.subMenuWrap}>
                    {renderMenuItems(item.subMenu)}
                  </ol>
                </details>
              )
            } else {
              return (
                <div key={index} 
                  className={
                    item.path == window.location.pathname 
                    ? classes.activeMenu 
                    : classes.menu}
                  onClick={()=>navigate(item.path)}>
                  {item.title}
                </div>
              )
            }
          })}
          <button style={{marginTop:'auto'}} onClick={logOut}>로그아웃</button>
        </div>
      </div>
    }

    {/* {isEmpty ? null : 
      <div className={classes.root}>

        <div className={classes.container}>
          {sidenav_data.map((item,index)=>{
            if(item.subMenu) {
              return (
                <details key={index} style={{cursor:'pointer'}}>
                  <summary className={classes.menu}>{item.title}</summary>
                  <ol className={classes.subMenuWrap}>
                    {renderMenuItems(item.subMenu)}
                  </ol>
                </details>
              )
            } else {
              return (
                <div key={index} 
                  className={item.path == window.location.pathname ?  classes.activeMenu : classes.menu}
                  onClick={()=>navigate(item.path)} style={{cursor:'pointer'}}>
                  {item.title}
                </div>
              )
            }
          })}
        </div>

      </div>
    } */}
    </>
  );
};
export default SideBar;