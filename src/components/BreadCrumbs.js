import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { sidenav_data } from "~/util/sidenav_data";
import images from "~/assets/js/Images";

const BreadCrumbs = () => {
  const classes = useStyles();
  const location = useLocation();

  const pathMap = {};
  let currentLink = []

  // 현재 path에 해당하는 sidenav data obj
  const targetObj = sidenav_data.filter((i)=>{
    return location.pathname.includes(i.path)
  })

  console.log('targetObj --------> ', targetObj)

  targetObj.map((item)=>{
    pathMap[item.path] = item.title;

    if (item.subMenu) {
      // console.log(item.subMenu) // 3 개
      item.subMenu.map((i)=>{
        pathMap[i.path] = i.title
      })
  
        for (let i=0; i<item.subMenu.length; i++){
          if (item.subMenu[i].subMenu) {
            // console.log(item.subMenu[i].subMenu) // 2 개
            item.subMenu[i].subMenu.map((i)=>{
              pathMap[i.path] = i.title
            })
    
            for (let c=0; c<item.subMenu[i].subMenu.length; c++){
              if (item.subMenu[i].subMenu[c].subMenu) {
                // console.log(item.subMenu[i].subMenu[c].subMenu) // 1 개
                item.subMenu[i].subMenu[c].subMenu.map((i)=>{
                  pathMap[i.path] = i.title
                })
              }
            }
    
    
          }
        }
  
  
    }
  });




  // targetObj.map((item)=>{
  //   pathMap[item.path] = item.title;

  //   if (item.subMenu) { 

  //     // currentLink 개수 만큼 반복 해야함
  //     for (let loop=0; loop<currentLink.length; loop++) {

              
// ================================================
              // 0번 째 item.subMenu
              // 1번 쨰 item.subMenu[].subMenu  
              // 2번 째 item.subMenu[].subMenu[].subMenu  

              // [loop]만큼 [].subMenu 증가

              // let target = item.subMenu;
              // target + [].subMenu
// ================================================
  //       //currentLink 개수(뎁스)만큼 [?].subMenu 늘어남
  //       for (let ?=0; ?<().length; ?++){
  //         if ( () ) {
  //           ().map((i)=>{
  //             pathMap[i.path] = i.title
  //           })
  //         }
  //       }
  

  //     }
  //   }



  //   if (item.subMenu) {
  //     // console.log(item.subMenu) // 3 개
  //     item.subMenu.map((i)=>{
  //       pathMap[i.path] = i.title
  //     })
  
  //       for (let i=0; i<item.subMenu.length; i++){
  //         if (item.subMenu[i].subMenu) {
  //           // console.log(item.subMenu[i].subMenu) // 2 개
  //           item.subMenu[i].subMenu.map((i)=>{
  //             pathMap[i.path] = i.title
  //           })
    
  //           for (let c=0; c<item.subMenu[i].subMenu.length; c++){
  //             if (item.subMenu[i].subMenu[c].subMenu) {
  //               // console.log(item.subMenu[i].subMenu[c].subMenu) // 1 개
  //               item.subMenu[i].subMenu[c].subMenu.map((i)=>{
  //                 pathMap[i.path] = i.title
  //               })
  //             }
  //           }
    
    
  //         }
  //       }
  
  
  //   }
  // });




//  let company = { // 동일한 객체(간결성을 위해 약간 압축함)
//     sales: [
//       {
//         name: 'John', 
//         salary: 1000
//       }, 
//       {
//         name: 'Alice', 
//         salary: 1600 
//       }
//     ],
//     development: {
//       sites: [
//         {
//           name: 'Peter', 
//           salary: 2000
//         }, 
//         {
//           name: 'Alex', 
//           salary: 1800 
//         }
//       ],
//       internals: [
//         {
//           name: 'Jack', 
//           salary: 1300
//         }
//       ]
//     }
//   };

  // 급여 합계를 구해주는 함수
  // function sumSalaries(department) {
  //   if (Array.isArray(department)) { // 첫 번째 경우
  //     console.log(department.reduce((prev, current) => prev + current.salary, 0)); // 배열의 요소를 합함
  //     return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함

  //   } else { // 두 번째 경우
  //     let sum = 0;
  //     for (let subdep of Object.values(department)) {
  //       sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
  //     }
  //     return sum;
  //   }
  // }
  // console.log(sumSalaries(company)); // 7700
// =====================================================
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// printList(list);
// =====================================================

  const tgtObj = [
    {
      id:0,
      title:'관리자 설정',
      path:'/setting_admin',
      subMenu : [
        {
          title:'계정 관리',
          path:'/setting_admin/user_account',
        },
        {
          title:'내 계정 관리',
          path:'/setting_admin/my_account',
        },  
        {
          title: '관리 이력', 
          path: '/setting_admin/history',
        }
      ]
    }
  ]

  const paymentMap = {
    "/setting_admin" : "관리자 설정",
    "/setting_admin/user_account" : "계정 관리",
    "/setting_admin/my_account" : "내 계정 관리",
    "/setting_admin/history" : "관리 이력",
  }
// =====================================================
// const aaa = [
//   {
//     id: "1111111111",
//     title: "가즈아가즈아",
//     other: [
//       {
//         id: "2222222222",
//         title: "배고프다",
//       },
//     ]
//   }
// ]
// const arr = []

// let sum = 0;
// for (let subdep of Object.values(aaa[0].other[0])) {
//   // console.log(subdep)
//   arr.push(subdep)
// }
// // return sum;

// console.log(arr)
// [ '1111111111', '2222222222', '3333333333', '4444444444' ]
// =====================================================
// const objj = [{ name: "david"}, { age: "20" }, {name: "sara"} ];

// var result = objj.flatMap(Object.keys)

// console.log(result)
// =====================================================




targetObj.map((item)=>{
  const pathArr = []
  const titleArr = []

  pathArr.push(item.path)
  titleArr.push(item.title)
  
  if (item.subMenu) {    
    let itemsMenu
    itemsMenu = item.subMenu

    // 서브메뉴가 있으면 일단 path를 다 넣어야 함.    
    for (let i=0; i< itemsMenu.length; i++) {
      pathArr.push(itemsMenu[i].path)
      titleArr.push(item.subMenu[i].title)
    }
    // console.log('itemsMenu 1번째 출력 array 3개 나와야함 --- >> ', itemsMenu)

    // itemsMenu.filter((item,index)=>{
    //   if (item.subMenu) {
    //     itemsMenu = item.subMenu

    //     for (let i=0; i< itemsMenu.length; i++) {
    //       pathArr.push(itemsMenu[i].path)
    //       // titleArr.push(item.subMenu[i].title)
    //     }
    //   }
    // })
    // console.log('itemsMenu 2번째 출력 array 2개 나와야함 --- >> ', itemsMenu)

    // itemsMenu.filter((item,index)=>{
    //   if (item.subMenu) {
    //     itemsMenu = item.subMenu;

    //     for (let i=0; i<itemsMenu.length; i++) {
    //       pathArr.push(itemsMenu[i].path)
    //       // titleArr.push(item.subMenu[i].title)
    //     }
    //   }
    // })
    // console.log('itemsMenu 3번째 출력 array 1개 나와야함 --- >> ', itemsMenu)
    
    const currPath = location.pathname.split('/')
      .filter((item)=>{return item !=''})

    for (let i=0; i<currPath.length-1; i++){
      itemsMenu.filter((item,index)=>{
        if (item.subMenu) {
          itemsMenu = item.subMenu;
  
          for (let i=0; i<itemsMenu.length; i++) {
            pathArr.push(itemsMenu[i].path)
            titleArr.push(item.subMenu[i].title)
          }
        }
      })
      console.log(`itemsMenu ${i}번째 출력 array ${itemsMenu.length}개 나와야함 --- >> `, itemsMenu)
    }
  } // if subMenu

  console.log(pathArr)
  console.log(titleArr)


  const objMap = {}
  for(let i=0; i<pathArr.length; i++){
    objMap[pathArr[i]] = titleArr[i]
  }
  console.log('objMap ----------- >>>>>>>', objMap)
})
// =====================================================
const drinksObj = [
  {
    name:'음료',
    path:'/drinks',
    subMenu: [
      {
        name:'쥬스',
        path:'/drinks/juice',
        subMenu: [
          {
            name:'망고 쥬스',
            path:'/drinks/juice/mango/',
          },
          {
            name:'키위 쥬스',
            path:'/drinks/juice/kiwi',
          },  
        ]
      },
      {
        name:'커피',
        path:'/drinks/coffee',
        subMenu: [
          {
            name:'아메리카노',
            path:'/drinks/coffee/americano',
          }  
        ]
      }
    ]
  }
]
// console.log('drinksObj -----> ',drinksObj)
drinksObj.map((item)=>{
  const nameArr = []
  let itemsMenu
 //일단 무조건 name키가 있으니까 넣어줌
  nameArr.push(item.name)

  if (item.subMenu) {    
    itemsMenu = item.subMenu;

    for(let i=0;i<itemsMenu.length; i++){
      nameArr.push(itemsMenu[i].name)  
    }
    // console.log('itemsMenu ----> 1번째 출력 ', itemsMenu)

    itemsMenu.filter((item)=>{
      if (item.subMenu) {
        itemsMenu = item.subMenu;

        for (let i=0; i<itemsMenu.length; i++) {
          nameArr.push(itemsMenu[i].name)
        }
      }
    })
    // console.log('itemsMenu ----> 2번째 출력 ', itemsMenu)
  }
  // console.log(nameArr)
})
// =====================================================
// let arr = ['first', 'second', 'third'];

// let obj = arr.reduce((accumulator, value, index) => {
//   return {...accumulator, [arr[index]]: value};
// }, {});

// console.log(obj);
// {first: 'first', second: 'second', third: 'third'}   
// =====================================================
  // console.log('pathMap -----> ', pathMap)

  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
    currentLink.push(`/${crumb}`)

    return (
      <React.Fragment key={crumb} >
        <img src={images.icons.ARROWRIGHT} alt="arrow right" />
        {/* <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{crumb}</Link> */}
        <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{pathMap[currentLink.join('')]}</Link>
      </React.Fragment>
    )
  })

  console.log(' count ---- >>>', currentLink.length ,'번 들어감')

  return (
    <div className={classes.root}>
      <Link to={'/'} className={classes.breadCrumbsLink}>홈</Link>
      {crumbs}
    </div>
  )
}
export default BreadCrumbs;

const useStyles = makeStyles({
  root: {
    cursor:'default',
    display:'flex',
    alignItems:'center',
    gap:'16.5px',
    fontSize:'14px',
    color:'#464646',
    lineHeight:'21px',
  },
  breadCrumbsLink: {
    display:'flex',
    alignItems:'center',
    gap:'16.5px',
    color:'#464646',
    textDecoration:'none'
  }
});