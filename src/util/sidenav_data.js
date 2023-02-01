// import images from "~/assets/js/Images";

export const sidenav_data = [
  {
    id: 0,
    title: "관리자 설정",
    path: "/setting_admin",
    activeTextColor: '#7C4DFF',
    activeMainBg: '#EFEFFE',
    activeSubBg: '#F8F8FF',
    activeBarColor:'#7C4DFF',
    // activeIconColor:'invert(70%) sepia(93%) saturate(7166%) hue-rotate(243deg) brightness(100%) contrast(102%)',
    activeIconColor: 'invert(49%) sepia(74%) saturate(7493%) hue-rotate(245deg) brightness(105%) contrast(101%)',
    linkTo: false,
    subMenu: [
      {
        title: "계정 관리",
        path: "/setting_admin/user_account",
        activeTextColor: '#7C4DFF',
        activeBarColor:'#7C4DFF',
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
        activeTextColor: '#7C4DFF',
        activeBarColor:'#7C4DFF',
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
        activeTextColor: '#7C4DFF',
        activeBarColor:'#7C4DFF',
      },
    ],
  },
  {
    id: 1,
    title: "회원 관리",
    path: "/member",
    activeTextColor: '#459B5E',
    activeMainBg: '#EBFCF0',
    activeSubBg: '#F7FCF8',
    activeBarColor:'#33904E',
    activeIconColor:'invert(50%) sepia(10%) saturate(2521%) hue-rotate(84deg) brightness(91%) contrast(87%)',
    linkTo: false,
    subMenu: [
      {
        title: "회원 현황",
        path: "/member/member_status",
        activeTextColor: '#459B5E',
        activeBarColor:'#33904E',
      },
      {
        title: "신고 대상 회원",
        path: "/member/subject_report",
        activeTextColor: '#459B5E',
        activeBarColor:'#33904E',
      },
      {
        title: "블랙리스트",
        path: "/member/black_list",
        activeTextColor: '#459B5E',
        activeBarColor:'#33904E',
      },
    ],
  },
  {
    id: 2,
    title: "서비스 관리",
    path: "/service",
    activeTextColor: '#172466',
    activeMainBg: '#EBF0FF',
    activeSubBg: '#F4F6FF',
    activeBarColor:'#2D3975',
    activeIconColor:'invert(100%) sepia(50%) saturate(1500%) hue-rotate(204deg) brightness(40%) contrast(95%)',
    linkTo: false,
    subMenu: [
      {
        title: "App 버전 관리",
        path: "/service/app_version",
        activeTextColor: '#2D3975',
        activeBarColor:'#2D3975',
        subMenu: [
          {
            title: "상세",
            path: "/service/app_version/details/:version_idx",
            linkTo: false,
            subMenu: [
              {
                title: "수정",
                path: "/service/app_version/details/:version_idx/edit",
                linkTo: false,
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
        activeTextColor: '#2D3975',
        activeBarColor:'#2D3975',
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
    activeTextColor: '#F68621',
    activeMainBg: '#FFEFE1',
    activeSubBg: '#FFF8F1',
    activeBarColor:'#F68621',
    activeIconColor:'invert(61%) sepia(32%) saturate(3241%) hue-rotate(347deg) brightness(101%) contrast(93%)',
    linkTo: false,
    subMenu: [
      {
        title: "App Intro 공지",
        path: "/notice/app_intro",
        activeTextColor: '#F68621',
        activeBarColor:'#F68621',
        subMenu: [
          {
            title: "상세",
            path: "/notice/app_intro/details",
            linkTo: false,
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
        activeTextColor: '#F68621',
        activeBarColor:'#F68621',
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
        activeTextColor: '#F68621',
        activeBarColor:'#F68621',
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
