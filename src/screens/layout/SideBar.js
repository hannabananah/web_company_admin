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
  // side bar width
  // const [width, setWidth] = useState(300);
  const style = {
    borderRight: "1px solid rgba(188, 191, 204,0.8)",
  };
  const enable_option = {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  };

  let isEmpty = false;

  const emptyList = ["/", "/index.html"];

  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  // document.querySelectorAll('summary').forEach((i)=>{
  //   i.addEventListener("click", (event) => {
  //     i.classList.add('opened')
  //   });
  // })

  const onClickMenu = (path) => {
    // console.log(path);
    window.location.href = path;
    // document.querySelectorAll('summary').forEach((item)=>{
    //   item.classList.remove('opened')
    // })
  }

  const renderMenuItems = (subMenu) => {
    return subMenu.map((item, index) => {
      return (
        <li
          key={index}
          className={
            // item.path == window.location.pathname
            window.location.pathname.includes(item.path)
              ? classes.activesubMenuList
              : classes.subMenuList
          }
          // onClick={() => navigate(item.path)}
          onClick={()=>onClickMenu(item.path)}
        >
          {item.title}
        </li>
      );
    });
  };

  // details 눌렀을 때
  // document.querySelectorAll('details').forEach(function(item){
  //     item.addEventListener("toggle", event => {
  //     let toggled = event.target;
  //     if (toggled.attributes.open) {/* 열었으면 */
  //       item.classList.add('opened')
  //       /* 나머지 다른 열린 아이템을 닫음 */
  //       document.querySelectorAll('details[open]').forEach(function(opened){
  //         if(toggled != opened) /* 현재 열려있는 요소가 아니면 */
  //           opened.removeAttribute('open'); /* 열림 속성 삭제 */
  //           // opened.classList.remove('opened')
  //       });
  //     }
  //   })
  // });

  // 뒤로 가기
  useEffect(() => {
    const details = document.querySelectorAll("details");
    const collapseNavs = sidenav_data.filter((item) => {
      return item["subMenu"];
    });

    collapseNavs.map((item, index) => {
      if (window.location.pathname != "/") {
        if (window.location.pathname.includes(item.path)) {
          details[index].setAttribute("open", true);
        } else {
          // details[index].removeAttribute('open');
        }
      }
    });
    // for(let i=0; i<details.length; i++) {
    //   if ( pathsArr(i).includes(window.location.pathname) ) {
    //     details[i].setAttribute('open',true);
    //   } else {
    //     details[i].removeAttribute('open');
    //   }
    // }
  }, [window.location.pathname]);

  const onClickLogo = () => {
    navigate("/dashboard");
    const openedDetails = document.querySelectorAll("details[open]");
    for (let i = 0; i < openedDetails.length; i++) {
      openedDetails[i].removeAttribute("open");
    }
  };

  return (
    <>
      {/* {allPaths.includes(window.location.pathname) &&  */}
      {isEmpty ? null : (
        // <Resizable
        //   style={style}
        //   size={{ width }}
        //   minWidth={200}
        //   maxWidth={500}
        //   enable={enable_option}
        //   onResizeStop={(e, direction, ref, d) => {
        //     setWidth(width + d.width);
        //   }}
        // >
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
                          onClick={()=>navigate(item.subMenu[0].path)}
                        >
                          <summary
                            className={
                              window.location.pathname === item.path
                              // window.location.pathname.includes(item.path)
                                ? classes.activeMenu
                                : classes.menu
                            }
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
                              ? classes.activeMenu
                              : classes.menu
                          }
                          onClick={() => navigate(item.path)}
                        >
                          <RenderIcons title={item.title} />
                          {item.title}
                        </div>
                      );
                    }
                  }
                })}
              </div>

            </div>
          </div>
        // </Resizable>
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
