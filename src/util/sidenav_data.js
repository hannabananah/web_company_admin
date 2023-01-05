// import images from "~/assets/js/Images";

export const sidenav_data = [
  {
    id: 0,
    title:"관리자 설정",
    path:"/setting_admin",
    subMenu: [
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
    id: 1,
    title:"회원 관리",
    path:"/member",
    subMenu: [
      {
        title:"회원 현황",
        path:"/member/member_status"
      },
    ]
  },
  {
    id: 2,
    title:"서비스 관리",
    path:"/service"
  },
  {
    id: 3,
    title:"통계 관리",
    path:"/statistics"
  },
  {
    id: 4,
    title:"공지 관리",
    path:"/notice"
  },
  {
    id: 5,
    title:"시스템 설정",
    path:"/system_settings"
  },
];

export const allPaths = [];

sidenav_data.map((item,index)=>{  
  if(item.subMenu) {
    allPaths.push(item.path)
    for(let i=0; i<item.subMenu.length; i++) {
      allPaths.push(item.subMenu[i].path)
    }
  } else {
    allPaths.push(item.path)
  }
})  

// console.log('allPaths ------->',allPaths)