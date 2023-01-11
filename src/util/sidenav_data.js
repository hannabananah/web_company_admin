// import images from "~/assets/js/Images";

export const sidenav_data = [
  {
    id: 0,
    title: "관리자 설정",
    path: "/setting_admin",
    subMenu: [
      {
        title: "계정 관리",
        path: "/setting_admin/user_account",
      },
      {
        title: "내 계정 관리",
        path: "/setting_admin/my_account",
      },
      {
        title: "관리 이력",
        path: "/setting_admin/history",
      },
    ],
  },
  {
    id: 1,
    title: "회원 관리",
    path: "/member",
    subMenu: [
      {
        title: "회원 현황",
        path: "/member/member_status",
      },
    ],
  },
  {
    id: 2,
    title: "서비스 관리",
    path: "/service",
    subMenu: [
      {
        title: "App 버전 관리",
        path: "/service/app_version",
      },
    ],
  },
  {
    id: 3,
    title: "통계 관리",
    path: "/statistics",
  },
  {
    id: 4,
    title: "공지 관리",
    path: "/notice",
    subMenu: [
      {
        title: "App Intro 공지",
        path: "/notice/app_intro",
      },
      {
        title: "App 더보기 공지",
        path: "/notice/app_viewmore",
      },
      {
        title: "사용자 이메일 공지",
        path: "/notice/user_email",
      },
    ],
  },
  {
    id: 5,
    title: "시스템 설정",
    path: "/system_settings",
  },
];

export const allPaths = [];

sidenav_data.map((item, index) => {
  if (item.subMenu) {
    allPaths.push(item.path);
    for (let i = 0; i < item.subMenu.length; i++) {
      allPaths.push(item.subMenu[i].path);
    }
  } else {
    allPaths.push(item.path);
  }
});
// console.log('allPaths ------->',allPaths)

// ================================================================================
// const breadcrumbNameMap = {
//   '/setting_admin': '관리자 설정',
//   '/setting_admin/user_account': '계정 관리',
//   '/setting_admin/my_account': '내 계정 관리',
//   '/setting_admin/history': '관리 이력',
//   '/member': '회원 관리',
//   '/service': '서비스 관리',
//   '/service/app_version': 'App 버전 관리',
//   '/statistics': '통계 관리',
//   '/notice': '공지 관리',
//   '/system_settings': '시스템 설정',
// };
// console.log(breadcrumbNameMap['/setting_admin'])

export const breadcrumbNameMap = {
  '/setting_admin': [
    {
      title:'관리자 설정',
      // path:'/setting_admin',
      path: false,
    }
  ],
  '/setting_admin/user_account': [
    {
      title:'관리자 설정',
      // path:'/setting_admin',
      path: false,
    },
    {
      title:'계정 관리',
      path:'/setting_admin/user_account'
    }
  ],
  '/setting_admin/my_account': [
    {
      title:'관리자 설정',
      // path:'/setting_admin',
      path: false,
    },
    {
      title:'내 계정 관리',
      path:'/setting_admin/my_account'
    },
  ],
  '/setting_admin/history': [
    {
      title:'관리자 설정',
      // path:'/setting_admin',
      path: false,
    },
    {
      title:'관리 이력',
      path:'/setting_admin/history'
    },
  ],
  '/member': [
    {
      title:'회원 관리',
      // path:'/member',
      path: false,
    },
  ],
  '/member/member_status': [
    {
      title:'회원 관리',
      // path:'/member',
      path: false,
    },
    {
      title:'회원 현황',
      path:'/member/member_status'
    },
  ],
  '/service': [
    {
      title:'서비스 관리',
      path:'/service'
    },
  ],
  '/service/app_version': [
    {
      title:'서비스 관리',
      // path:'/service'
      path: false,
    },
    {
      title:'App 버전 관리',
      path:'/service/app_version'
    },
  ],
  '/statistics': [
    {
      title:'통계 관리',
      path:'/statistics'
    },
  ],
  '/notice': [
    {
      title:'공지 관리',
      path:'/notice'
    },
  ],
  '/notice/app_intro': [
    {
      title:'공지 관리',
      path: false,
    },
    {
      title: "App Intro 공지",
      path: "/notice/app_intro",
    },
  ],
  '/notice/app_viewmore': [
    {
      title:'공지 관리',
      path: false,
    },
    {
      title: "App 더보기 공지",
      path: "/notice/app_viewmore",
    },
  ],
  '/notice/user_email': [
    {
      title:'공지 관리',
      path: false,
    },
    {
      title: "사용자 이메일 공지",
      path: "/notice/user_email",
    },
  ],
  '/system_settings': [
    {
      title:'시스템 설정',
      path:'/system_settings'
    },
  ],
};
console.log(breadcrumbNameMap)
// console.log(breadcrumbNameMap[window.location.pathname])

// console.log('sidenav_data----------->>',sidenav_data)

// ================================================================================
const Obj = (title, path) => {
  return (
    {
      [title] : [
        {
          title : title,
          path: path
        }
      ],
    }
  )
};
// let new_obj = Obj('타이틀','/title_path')
// ================================================================================
export const breadCrumbsObj = {}

sidenav_data.map((item)=>{
  breadCrumbsObj[item.path] = [
    {
      title : item.title,
      path : item.path,
    }
  ]
  // 서브 메뉴가 몇개든 커버 해야함..
  if ( item.subMenu ) {
    for(let i=0; i<item.subMenu.length; i++) {
      // console.log(item.subMenu[i].path)
      breadCrumbsObj[item.subMenu[i].path] = [
        {
          title : item.title,
          path : false,
        },
        {
          title : item.subMenu[i].title,
          path : item.subMenu[i].path,
        }
      ]
    }
  }
})
// console.log('breadCrumbsObj ----------->>>',breadCrumbsObj)

// ================================================================================
sidenav_data.map((item)=>{
  // 서브 메뉴가 몇개든 커버 해야함
  // if ( item.subMenu ) {
  //   console.log(item.subMenu)
  //   for(let i=0; i<item.subMenu.length; i++) {
  //     console.log(item.subMenu[i].path)
  //   }
  // }
  // if ( item.subMenu ) {
  //   console.log('item has a sub menu -----> ',item)
  // } else {
  //   console.log('item dose not have sub menu -----> ',item)
  // }
})
// ================================================================================
// const aa = {}
// aa['a'] = 'a'
// aa['b'] = 'b'
// console.log(aa)