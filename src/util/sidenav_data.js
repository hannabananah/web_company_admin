// import images from "~/assets/js/Images";

export const sidenav_data = [
  {
    id: 0,
    title: "관리자 설정",
    path: "/setting_admin",
    linkTo: false,
    subMenu: [
      {
        title: "계정 관리",
        path: "/setting_admin/user_account",
        subMenu: [
          {
            title: "계정 상세",
            path: "/setting_admin/user_account/details",
            linkTo: false,
          },
          {
            title: "계정 정보 수정",
            path: "/setting_admin/user_account/edit",
            linkTo: false,
          },
          {
            title: "사용자 추가",
            path: "/setting_admin/user_account/add",
          },
        ],
      },
      {
        title: "내 계정 관리",
        path: "/setting_admin/my_account",
        subMenu: [
          {
            title: "수정",
            path: "/setting_admin/my_account/edit",
          },
        ],
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
    linkTo: false,
    subMenu: [
      {
        title: "회원 현황",
        path: "/member/member_status",
      },
      {
        title: "신고 대상 회원",
        path: "/member/subject_report",
      },
      {
        title: "블랙리스트",
        path: "/member/black_list",
      },
    ],
  },
  {
    id: 2,
    title: "서비스 관리",
    path: "/service",
    linkTo: false,
    subMenu: [
      {
        title: "App 버전 관리",
        path: "/service/app_version",
        subMenu: [
          {
            title: "상세",
            path: "/service/app_version/details",
            subMenu: [
              {
                title: "수정",
                path: "/service/app_version/details/edit",
              },
            ],
          },
          {
            title: "등록",
            path: "/service/app_version/add",
          },
        ],
      },
      {
        title: "번역 이상 신고",
        path: "/service/report_translation_error",
        subMenu: [
          {
            title: "원문 텍스트 상세",
            path: "/service/report_translation_error/orgin_contents_details",
          },
          {
            title: "1차 번역 영어 텍스트 상세",
            path: "/service/report_translation_error/english_contents_details",
          },
          {
            title: "번역 텍스트 상세",
            path: "/service/report_translation_error/translation_contents_details",
          },
        ],
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
    linkTo: false,
    subMenu: [
      {
        title: "App Intro 공지",
        path: "/notice/app_intro",
        subMenu: [
          {
            title: "상세",
            path: "/notice/app_intro/details",
            subMenu: [
              {
                title: "수정",
                path: "/notice/app_intro/details/edit",
              },
            ],
          },
          {
            title: "등록",
            path: "/notice/app_intro/add",
          },
        ],
      },
      {
        title: "App 설정 공지",
        path: "/notice/app_setting",
        subMenu: [
          {
            title: "상세",
            path: "/notice/app_setting/details",
            subMenu: [
              {
                title: "수정",
                path: "/notice/app_setting/details/edit",
              },
            ],
          },
          {
            title: "등록",
            path: "/notice/app_setting/add",
          },
        ],
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
    linkTo: false,
  },
  {
    id: 6,
    title: "대시보드",
    path: "/dashboard",
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

sidenav_data.filter((item) => {
  return item["path"];
});

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
  "/setting_admin": [
    {
      title: "관리자 설정",
      // path:'/setting_admin',
      path: false,
    },
  ],
  "/setting_admin/user_account": [
    {
      title: "관리자 설정",
      // path:'/setting_admin',
      path: false,
    },
    {
      title: "계정 관리",
      path: "/setting_admin/user_account",
    },
  ],
  "/setting_admin/my_account": [
    {
      title: "관리자 설정",
      // path:'/setting_admin',
      path: false,
    },
    {
      title: "내 계정 관리",
      path: "/setting_admin/my_account",
    },
  ],
  "/setting_admin/history": [
    {
      title: "관리자 설정",
      // path:'/setting_admin',
      path: false,
    },
    {
      title: "관리 이력",
      path: "/setting_admin/history",
    },
  ],
  "/member": [
    {
      title: "회원 관리",
      // path:'/member',
      path: false,
    },
  ],
  "/member/member_status": [
    {
      title: "회원 관리",
      // path:'/member',
      path: false,
    },
    {
      title: "회원 현황",
      path: "/member/member_status",
    },
  ],
  "/service": [
    {
      title: "서비스 관리",
      path: "/service",
    },
  ],
  "/service/app_version": [
    {
      title: "서비스 관리",
      // path:'/service'
      path: false,
    },
    {
      title: "App 버전 관리",
      path: "/service/app_version",
    },
  ],
  "/statistics": [
    {
      title: "통계 관리",
      path: "/statistics",
    },
  ],
  "/notice": [
    {
      title: "공지 관리",
      path: "/notice",
    },
  ],
  "/notice/app_intro": [
    {
      title: "공지 관리",
      path: false,
    },
    {
      title: "App Intro 공지",
      path: "/notice/app_intro",
    },
  ],
  "/notice/app_viewmore": [
    {
      title: "공지 관리",
      path: false,
    },
    {
      title: "App 더보기 공지",
      path: "/notice/app_viewmore",
    },
  ],
  "/notice/user_email": [
    {
      title: "공지 관리",
      path: false,
    },
    {
      title: "사용자 이메일 공지",
      path: "/notice/user_email",
    },
  ],
  "/system_settings": [
    {
      title: "시스템 설정",
      path: "/system_settings",
    },
  ],
};
// console.log(breadcrumbNameMap)
// console.log(breadcrumbNameMap[window.location.pathname])

// console.log('sidenav_data----------->>',sidenav_data)

// ================================================================================
const Obj = (title, path) => {
  return {
    [title]: [
      {
        title: title,
        path: path,
      },
    ],
  };
};
// let new_obj = Obj('타이틀','/title_path')
// ================================================================================
export const breadCrumbsObj = {};

sidenav_data.map((item) => {
  breadCrumbsObj[item.path] = [
    {
      title: item.title,
      path: item.path,
    },
  ];
  // 서브 메뉴가 몇개든 커버 해야함..
  if (item.subMenu) {
    for (let i = 0; i < item.subMenu.length; i++) {
      // console.log(item.subMenu[i].path)
      breadCrumbsObj[item.subMenu[i].path] = [
        {
          title: item.title,
          path: false,
        },
        {
          title: item.subMenu[i].title,
          path: item.subMenu[i].path,
        },
      ];
    }
  }
});
// console.log('breadCrumbsObj ----------->>>',breadCrumbsObj)

// ================================================================================
sidenav_data.map((item) => {
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
});

// ================================================================================
sidenav_data.map((i) => {
  // console.log('Object.keys(i)', Object.keys(i))
  // console.log('Object.values(i)', Object.values(i))
  if (Object.keys(i).includes("subMenu")) {
  }
});
// ================================================================================

console.log("sidenav_data ------ >>>> ", sidenav_data);

// 현재 path '/setting_admin/user_account'
const currPath = window.location.pathname;
// 현재 path에서 / 기준으로 나눔   ['', 'setting_admin', 'user_account']
const splitedPathArrOrigin = currPath.split("/");
// 첫번째 공백 제거
const splitedPathArr = splitedPathArrOrigin.filter(
  (element, index) => index > 0
);
// console.log(' 첫번째 공백이 제거된 path 배열 ---- >>>', splitedPathArr)

// path depth 개수 확인
// const pathItemsLength = currPath.split('/').length -1
// const pathItemsLength = splitedPathArr.length;
// console.log(' count ---- >>>', pathItemsLength ,'번 들어감')

// 각 path마다 슬래시 붙이기
// for(let i=0; i<splitedPathArr.length;i++){
//   console.log(`/${splitedPathArr[i]}`)
// }

// 현재 path에 해당하는 sidenav data obj
const targetObj = sidenav_data.filter((i) => {
  return `/${splitedPathArr[0]}`.includes(i.path);
});
// console.log(targetObj)

//   '/notice(3)/app_intro(2)/add(1)'

targetObj.map((item) => {
  if (item.subMenu) {
    // console.log(item.subMenu) // 3 개
    item.subMenu.map((i) => {
      // console.log(i.title)
      // console.log(i.path)
    });

    for (let i = 0; i < item.subMenu.length; i++) {
      if (item.subMenu[i].subMenu) {
        // console.log(item.subMenu[i].subMenu) // 2 개
        item.subMenu[i].subMenu.map((i) => {
          // console.log(i.title)
          // console.log(i.path)
        });

        for (let c = 0; c < item.subMenu[i].subMenu.length; c++) {
          if (item.subMenu[i].subMenu[c].subMenu) {
            // console.log(item.subMenu[i].subMenu[c].subMenu) // 1 개
            item.subMenu[i].subMenu[c].subMenu.map((i) => {
              // console.log(i.title)
              // console.log(i.path)
            });
          }
        }
      }
    }
  }
});

// let DATA = {
//   "el" : [
//     {
//       "name" : "Joe",
//       "age" : "20"
//     },
//     {
//       "name" : "Mary",
//       "age" : "27",
//       "book" : [
//         {
//           "name" : "Blow",
//           "age" : "15"
//         },
//         {
//           "name" : "Blow",
//           "age" : "15",
//           "book" : [
//             {
//               "name" : "kelly",
//               "age" : "29"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

// function objByName(data, name){
//   let result
//   for(let i = 0; i < data.length; i++){
//     if(data[i].name === name){
//       data = JSON.stringify(json[i])
//       result = JSON.parse(data)
//       return result
//     }
//     if(data[i].hasOwnProperty('book')){
//       return objByName(data[i].book, name)
//     }
//   }
// }

// console.log(  objByName( DATA,'name') )

// const depthOf = (object) => {
//   var level = 1;// w w w .  ja v  a 2 s.  co m
//   var key;
//   for(key in object) {
//     if (!object.hasOwnProperty(key)) continue;

//     if(typeof object[key] == 'object'){
//       var depth = depthOf(object[key]) + 1;
//       level = Math.max(depth, level);
//     }
//   }
//   return level;
// }
// console.log(depthOf(targetObj))
