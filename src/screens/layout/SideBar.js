import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import { Resizable } from "re-resizable";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { sidenav_data, allPaths } from "~/util/sidenav_data";
import images from "~/assets/js/Images";
import "~/styles/SideBar.css";
import useStyles from "~/styles/SideBar";

const pathsArr = (idx) => {
  let List = sidenav_data.filter((item, index) => {
    return index == idx;
  });
  let paths;
  if (List[0].subMenu) {
    paths = List[0].subMenu.map((i, index) => {
      return i.path;
    });
    paths.unshift(List[0]["path"]);
  } else {
    paths = List[0]["path"];
  }
  return paths;
};

const RenderIcons = ({ title }) => {
  const classes = useStyles();
  let imgSrc;

  switch (title) {
    case "관리자 설정":
      imgSrc = images.icons.SETTINGS_ADMIN;
      break;
    case "회원 관리":
      imgSrc = images.icons.MANAGEMANT_MEMBER;
      break;
    case "서비스 관리":
      imgSrc = images.icons.MANAGEMANT_SERVICE;
      break;
    case "통계 관리":
      imgSrc = images.icons.MONITORING;
      break;
    case "공지 관리":
      imgSrc = images.icons.NOTICE;
      break;
    case "시스템 설정":
      imgSrc = images.icons.SETTINGS;
      break;
  }
  return (
    <div className={classes.iconsWrap}>
      <img src={imgSrc} alt={title} className={classes.iconImg} />
    </div>
  );
};

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  let isEmpty = false;
  const emptyList = ["/", "/index.html"];

  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  const onClickMenuItems = (path) => {
    if (window.location.pathname == path) {
      window.location.reload(true);
    }
  } 

  // 투뎁스 메뉴 안의 서브 메뉴
  const renderMenuItems = (subMenu) => {
    return subMenu.map((item, index) => {
      return (
        <li
          key={index}
          className={
            window.location.pathname.startsWith(item.path)
              ? classes.activesubMenuList
              : classes.subMenuList
          }
        >
          <Link to={item.path} onClick={()=>onClickMenuItems(item.path)}>{item.title}</Link>
        </li>
      );
    });
  };

  // 뒤로 가기
  useEffect(() => {
    const details = document.querySelectorAll("details");
    const collapseNavs = sidenav_data.filter((item) => {
      return item["subMenu"];
    });

    collapseNavs.map((item, index) => {
      if (window.location.pathname != "/") {
        if (window.location.pathname.startsWith(item.path)) {
          details[index].setAttribute("open", true);
        } else {
          details[index].removeAttribute('open');
        }
      }
    });

  }, [window.location.pathname]);

  // 로고 클릭시 dashboard 페이지로 이동
  const onClickLogo = () => {
    navigate("/dashboard");
    const openedDetails = document.querySelectorAll("details[open]");
    for (let i = 0; i < openedDetails.length; i++) {
      openedDetails[i].removeAttribute("open");
    }
  };

  // 투뎁스 메뉴 클릭 ( details 눌렀을 때 )
  const onToggle = (e, path) => {
  }

  // 원뎁스 메뉴 클릭시 현재 details 열려 있다면 접기
  const onClickOneDepthMenu = () => {
    if (document.querySelectorAll('details[open]')) {
      const openedDetails = document.querySelectorAll('details[open]');
  
      openedDetails.forEach((item) => {
        item.removeAttribute('open')
      });
    }
  }

  return (
    <>
      {isEmpty ? null : (
        <div className={classes.root}>
          <div className={classes.container}>
            <h1 className={classes.h1} onClick={onClickLogo}>
              <img src={images.icons.ANYCHAT_LOGO} alt="anychat 관리시스템" />
              <span>관리시스템</span>
            </h1>

            <div className={classes.menuContainer}>
              {sidenav_data.map((item, index) => {
                if (item.title != "대시보드") {
                  if (item.subMenu) {
                    return (
                      <details
                        key={index}
                        className={`${classes.details} details`}
                        onToggle={onToggle}
                        // open={window.location.pathname.startsWith(item.path)}
                      >
                        <summary
                          className={
                            window.location.pathname === item.path
                            // window.location.pathname.includes(item.path)
                              ? classes.activeMenu
                              : classes.menu
                          }
                          // onClick={()=> {
                          //   window.location.href = item.subMenu[0].path
                          // }}
                        >
                          <RenderIcons title={item.title} />
                          {item.title}
                          <img
                            src={images.icons.EXPAND_MORE}
                            className="expandMore"
                            alt="메뉴 열기"
                          />
                        </summary>
                        <ol className={classes.subMenuWrap}>
                          {renderMenuItems(item.subMenu)}
                        </ol>
                      </details>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className={
                          item.path == window.location.pathname
                            ? classes.activeMenuNoSub
                            : classes.menuNoSub
                        }
                      >
                        <Link to={item.path} onClick={onClickOneDepthMenu}>
                          <RenderIcons title={item.title} />{item.title}
                        </Link>
                      </div>
                    );
                  }
                }
              })}
            </div>

          </div>
        </div>
      )}

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
