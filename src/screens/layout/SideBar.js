import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navigation } from "react-minimal-side-navigation";
import { sidenav_data, allPaths } from "../../util/sidenav_data";
import useStyles from "../../styles/SideBar";
import "../../styles/SideBar.css";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import SVG_NAV_ICON_1ST from "../../assets/images/icon_navi_1.svg";
import images from "../../assets/js/Images";

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
    console.log(subMenu)
    return (
      subMenu.map((item,index)=>{
        return (
          <li 
            key={index} 
            className={
              item.path == window.location.pathname 
              ? classes.activesubMenuList 
              : classes.subMenuList} 
            onClick={()=>navigate(item.path)}>{item.title}
          </li>
        )  
      })
    )
  }

  const onClickNav = (path) => {
    navigate(path)
  }

  useEffect(()=>{
  //   const subMenuRoots = document.querySelectorAll('.ps-submenu-root');
  //   const subMenuContents = document.querySelectorAll('.ps-submenu-content');

  //   if ( window.location.pathname === "/setting_admin/user_account" ) {
  //   // if ( pathsArr(0).includes(window.location.pathname) ) {
  //     for(let i=0; i<subMenuRoots.length; i++) {
  //       subMenuRoots[0].classList.add('ps-open');
  //       subMenuContents[0].style.display = 'block';
  //     } 
  //   } 

    const details = document.querySelectorAll('details');
    const summarys = document.querySelectorAll('summary');
    // if ( pathsArr(0).includes(window.location.pathname) ) {
    //   for(let i=0; i<details.length; i++) {
    //     details[0].setAttribute('open',true);
    //   } 
    // } else if ( pathsArr(1).includes(window.location.pathname) ) {
    //   for(let i=0; i<details.length; i++) {
    //     details[1].setAttribute('open',true);
    //   } 
    // } 
    for(let i=0; i<details.length; i++) {
        if ( pathsArr(i).includes(window.location.pathname) ) {
        details[i].setAttribute('open',true);
        summarys[i].classList.add('activeMenu')
      } else {
        summarys[i].classList.remove('activeMenu')
      } 
    } 
    
  },[window.location.pathname])

  return (
    <>
    {allPaths.includes(window.location.pathname) && 
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