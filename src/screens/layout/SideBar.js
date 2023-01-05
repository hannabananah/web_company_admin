import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navigation } from "react-minimal-side-navigation";
import { menu } from "../../util/sidenav_menu";
import useStyles from "../../styles/SideBar";
import "../../styles/SideBar.css";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import SVG_NAV_ICON_1ST from "../../assets/images/icon_navi_1.svg";
import images from "../../assets/js/Images";

// var me = 
// {
//   name:"KMJ",
//   contact:"hi.minjungkim@gmail.com",
//   location:"Seoul",
//   "what I like": {
//     food: [{
//           name: "맥도날드",
//             price: 5600
//         }, {
//           name: "밀크티",
//           price: 4000
//         }],
//         things: ["돈", "집"]
//     }
// };
// // console.log(me["what I like"].food[1].name)
// console.log(me.name)


const sideNavData = [
  {
    id:0,
    title:"관리자 설정",
    path:"/setting_admin",
    suvMenu: [
      {
        title:"계정 관리",
        path:"/setting_admin/user_account"
      },
      {
        title:"내 계정 관리",
        path:"/setting_admin/my_account"
      },
      {
        title:"관리 이력",
        path:"/setting_admin/history"
      }
    ]
  },
  {
    id:1,
    title:"회원 관리",
    path:"/member",
    suvMenu: [
      {
        title:"회원 현황",
        path:"/member/member_status"
      },
    ]
  },
  {
    title:"서비스 관리",
    path:"/service"
  },
  {
    title:"통계 관리",
    path:"/statistics"
  },
  {
    title:"공지 관리",
    path:"/notice"
  },
  {
    title:"시스템 설정",
    path:"/system_settings"
  },
]

const pathsArr = (index) => {
  let List = sideNavData.filter((item)=>{ return item.id == index })
  let paths;
  if ( List[0].suvMenu ) {
    paths = List[0].suvMenu.map((i,index)=>{ return i.path });
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

  const renderMenuItems = (suvMenu) => {
    console.log(suvMenu)
    return (
      suvMenu.map((item,index)=>{
        return (
          // <MenuItem key={index}
          //   active={window.location.pathname === item.path}
          //   routerLink={<Link to={item.path} />}> {item.title} 
          // </MenuItem>
          <li key={index} onClick={()=>navigate(item.path)}>{item.title}</li>
          
        )  
      })
    )
  }

  const onClickNav = (path) => {
    navigate(path)
  }
  
  // const [isOpen, setIsOpen] = useState({
  //   index:'',
  //   isOpen: false
  // })
  const [isOpen, setIsOpen] = useState(false)
  console.log('isOpen ------->',isOpen)

  sideNavData.map((item,index)=>{
    const menu = []
    menu.push(
  
    )
  })
  

  

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
      } 
    } 
    
  },[window.location.pathname])

  return (
    <>
    {isEmpty ? null : 
      <div style={{width:'200px', position:'sticky', bottom:0, top:0 }}>

        <div style={{borderRight:'1px solid #ddd', height:'100%',padding:'15px', display:'flex', flexDirection:'column', gap:'20px'}}>
          {sideNavData.map((item,index)=>{
            if(item.suvMenu) {
              return (
                <details key={index} style={{cursor:'pointer'}}>
                  <summary>{item.title}</summary>
                  <ol style={{padding:'15px 15px 0', display:'flex', flexDirection:'column', gap:'10px'}}>
                    {renderMenuItems(item.suvMenu)}
                  </ol>
                </details>
              )
            } else {
              return (
                <div key={index} 
                  className={item.path == window.location.pathname ? 'activeMenu' : null}
                  onClick={()=>navigate(item.path)} style={{cursor:'pointer'}}>
                  {item.title}
                </div>
              )
            }
          })}
        </div>

      </div>
    }
    </>
  );
};
export default SideBar;