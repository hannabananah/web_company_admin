import React from "react";
import { useLocation, useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { sidenav_data } from "~/util/sidenav_data";
import images from "~/assets/js/Images";

const BreadCrumbs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const pathMap = {};
  let currentLink = [];

  // 현재 path에 해당하는 sidenav data obj
  const targetObj = sidenav_data.filter((i)=>{
    return location.pathname.includes(i.path)
  })
  console.log('targetObj --------> ', targetObj)

  targetObj.map((item) => {
    const pathArr = [];
    const titleArr = [];

    //일단 무조건 path키가 있으니까 넣어줌
    pathArr.push(item.path);
    titleArr.push(item.title);

    if (item.subMenu) {
      let itemsMenu;
      itemsMenu = item.subMenu;

      // 서브메뉴가 있으면 일단 path를 다 넣어야 함.
      for (let i = 0; i < itemsMenu.length; i++) {
        pathArr.push(itemsMenu[i].path);
        titleArr.push(item.subMenu[i].title);
      }

      const currPath = location.pathname.split("/").filter((item) => {
        return item != "";
      });

      for (let i = 0; i < currPath.length - 1; i++) {
        itemsMenu.filter((item, index) => {
          if (item.subMenu) {
            itemsMenu = item.subMenu;
    
            for (let i=0; i<itemsMenu.length; i++) {
              pathArr.push(itemsMenu[i].path)
              titleArr.push(item.subMenu[i].title)
            }
          }
        });
        // console.log(`itemsMenu ${i}번째 출력 array ${itemsMenu.length}개 나와야함 --- >> `, itemsMenu)
      }
    } // if subMenu

    // console.log(pathArr)
    // console.log(titleArr)

    for (let i = 0; i < pathArr.length; i++) {
      pathMap[pathArr[i]] = titleArr[i];
    }
  })
 
  const newPathObj = [];
  // targetObj.map((item)=>{
  //   newPathObj.push(
  //     {
  //       path: item.path,
  //       title: item.title,
  //       linkTo: item.linkTo 
  //     }
  //   )

  //   if (item.subMenu) {    
  //     let subMenuItems
  //     subMenuItems = item.subMenu

  //     // 서브메뉴가 있으면 일단 path를 다 넣어야 함.    
  //     for (let i=0; i< subMenuItems.length; i++) {
  //       newPathObj.push(
  //         {
  //           path: subMenuItems[i].path,
  //           title: item.subMenu[i].title,
  //           linkTo: item.subMenu[i].linkTo
  //         }
  //       )
  //     }
  //     const currPath = location.pathname.split('/')
  //       .filter((item)=>{return item !=''})

  //     for (let i=0; i<currPath.length-1; i++){
  //       subMenuItems.filter((item,index)=>{
  //         if (item.subMenu) {
  //           subMenuItems = item.subMenu;
    
  //           for (let i=0; i<subMenuItems.length; i++) {
  //             newPathObj.push(
  //               {
  //                 path: subMenuItems[i].path,
  //                 title: item.subMenu[i].title,
  //                 linkTo: item.subMenu[i].linkTo
  //               }
  //             )
  //           }
  //         }
  //       })
  //       // console.log(`subMenuItems ${i}번째 출력 array ${subMenuItems.length}개 나와야함 --- >> `, subMenuItems)
  //     }
  //   } // if subMenu
  // })
 
  

  // var i = 0;
  // while (i < item.subMenu.length) {
  //   if (i > item.subMenu.length) {
  //     break;
  //   }
  //   console.log(i);
  //   i++;
  // }

  targetObj.map((item,index)=>{
    newPathObj.push(
      {
        path: item.path,
        title: item.title,
        linkTo: item.linkTo 
      }
    )

      const currPath = location.pathname.split('/')
      .filter((item)=>{return item !=''})
      // console.log('currPath.length -------->',currPath.length)  


    // 서브메뉴가 있으면 넣어주고, 그 아래 하위 서브메뉴가 또 있는지 찾음
    if (item.subMenu) {    
      // console.log('첫번째 submenu ----> ',item.subMenu) 
      for (let i=0; i< item.subMenu.length; i++) {
        newPathObj.push(
          {
            path: item.subMenu[i].path,
            title: item.subMenu[i].title,
            linkTo: item.subMenu[i].linkTo
          }
        )
      }
      // console.log('첫번째 submenu 넣어준 상태 ----> ',newPathObj)
      item.subMenu.filter((item,index)=>{



        if (item.subMenu) {
          // console.log('두번째 submenu ----> ',item.subMenu)
          for (let i=0; i< item.subMenu.length; i++) {
            newPathObj.push(
              {
                path: item.subMenu[i].path,
                title: item.subMenu[i].title,
                linkTo: item.subMenu[i].linkTo
              }
            )
          }
          // console.log('두번째 submenu 넣어준 상태 ----> ',newPathObj)
          item.subMenu.filter((item,index)=>{



            if (item.subMenu) {
              // console.log('세번째 subMenuItems ----> ',item.subMenu)
              for (let i=0; i< item.subMenu.length; i++) {
                newPathObj.push(
                  {
                    path: item.subMenu[i].path,
                    title: item.subMenu[i].title,
                    linkTo: item.subMenu[i].linkTo
                  }
                )
              }
              // console.log('세번째 submenu 넣어준 상태 ----> ',newPathObj)
              item.subMenu.filter((item,index)=>{






                // for (let i=0; i<currPath.length; i++) {
                //   console.log('네번째 subMenuItems ----> ',item.subMenu)
                //   item.subMenu.filter((item,index)=>{
                //     if (item.subMenu) {
                //       for (let i=0; i< item.subMenu.length; i++) {
                //         newPathObj.push(
                //           {
                //             path: item.subMenu[i].path,
                //             title: item.subMenu[i].title,
                //             linkTo: item.subMenu[i].linkTo
                //           }
                //         )
                //       }
                //       console.log('세번째 submenu 넣어준 상태 ----> ',newPathObj)
                //     } // if item.subMenu
                //   }) // filter
                // } // currPath.length 만큼 반복문




              })



            }
          })
        }
      })


      // const testObj = [];

      // targetObj.map((item, index) => {
        
      //   if (item.subMenu) {

      //     item.subMenu.filter((item, index) => {
      //       for (let i = 0; i < item.subMenu.length; i++) {
      //         testObj.push({
      //           path: item.subMenu[i].path,
      //           title: item.subMenu[i].title
      //         });
      //       }
      //       if (item.subMenu) {

      //         item.subMenu.filter((item, index) => {
      //           for (let i = 0; i < item.subMenu.length; i++) {
      //             testObj.push({
      //               path: item.subMenu[i].path,
      //               title: item.subMenu[i].title
      //             });
      //           }
      //           if (item.subMenu) {

      //             item.subMenu.filter((item, index) => {
      //               for (let i = 0; i < item.subMenu.length; i++) {
      //                 testObj.push({
      //                   path: item.subMenu[i].path,
      //                   title: item.subMenu[i].title
      //                 });
      //               }
      //               if (item.subMenu) {
        
        
      //                 item.subMenu.filter((item, index) => {
      //                   for (let i = 0; i < item.subMenu.length; i++) {
      //                     testObj.push({
      //                       path: item.subMenu[i].path,
      //                       title: item.subMenu[i].title
      //                     });
      //                   }
      //                   if (item.subMenu) {
            

      //                   }
      //                 });

      //               }
      //             });
    
                  
      //           }
      //         });

      //       }
      //     });

      //   } 
        
      // }); // map
     
// ======================================
      // for (let i=0; i<currPath.length-1; i++){
      //   subMenuItems.filter((item,index)=>{
      //     if (item.subMenu) {
      //       subMenuItems = item.subMenu;
    
      //       for (let i=0; i<subMenuItems.length; i++) {
      //         newPathObj.push(
      //           {
      //             path: subMenuItems[i].path,
      //             title: item.subMenu[i].title,
      //             linkTo: item.subMenu[i].linkTo
      //           }
      //         )
      //       }
      //     }
      //   })
        // console.log(`subMenuItems ${i}번째 출력 array ${subMenuItems.length}개 나와야함 --- >> `, subMenuItems)
      // }
    } // if subMenu
  })




  let arr = [];
  const hasSubMenu = (item) => {
    if (item.subMenu) {
      func(item.subMenu)
      item.subMenu.filter((item,index)=>{
        arr.push({
          title: item.title,
          path: item.path,
        })
      })
    } else {
      return;
    }
  } 
  const func = (subMenu) => {
    subMenu.map((item, index)=>{
      hasSubMenu(item)
    })
  }
  targetObj.map((item,index)=>{
    arr.push({
      title: item.title,
      path: item.path,
    })
    hasSubMenu(item)
  })
  console.log('__arr___________',arr)



  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

    const obj = newPathObj.filter((item)=>{
      return item.path == currentLink.join('')
    })
    // console.log('currentLink_______________________',currentLink)
    // console.log('newPathObj_______________________',newPathObj)
    // console.log('obj_______________________',obj)
    // console.log('currentLink.join("")_______________________',currentLink.join(''))

    return (
      <React.Fragment key={crumb}>
        {obj[0]?.title ? <img src={images.icons.ARROWRIGHT} alt="arrow right" /> : null}
        <Link to={obj[0]?.title ? currentLink.join('') : false} 
          className={classes.breadCrumbsLink}>
            {obj[0]?.title ? obj[0]?.title : null}
            {/* {crumb} */}
        </Link>
      </React.Fragment>
    )

    /////-------------- 2 번째 ( 404는 해결 했는데 crumb링크 클릭시 useLocation 의 state값이 초기화돼서 오류 ) --------------/////
    // sidenav_data path에 variable path지워야 제대로 작동
    // return (
    //   <React.Fragment key={crumb}>
    //     {obj[0]?.title ? <img src={images.icons.ARROWRIGHT} alt="arrow right" /> : null}
    //     <Link to={obj[0]?.linkTo == false ? false : currentLink.join('')} 
    //       className={classes.breadCrumbsLink}>
    //         {obj[0]?.title ? obj[0]?.title : null}
    //     </Link>
    //   </React.Fragment>
    // )

    /////-------------- 1 번째 ( 연결된 컴포넌트 없을경우 404 ) --------------/////
    // return (
    //   <React.Fragment key={crumb}>
    //     <img src={images.icons.ARROWRIGHT} alt="arrow right" />
    //     {/* <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{crumb}</Link> */}
    //     <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{pathMap[currentLink.join('')] ? pathMap[currentLink.join('')]:crumb}</Link>
    //   </React.Fragment>
    // )
  })

  // console.log('pathMap ------------>>>> ', pathMap)

  return (
    <div className={classes.root}>
      <Link to={'/dashboard'} className={classes.breadCrumbsLink}>홈</Link>
      {crumbs}
    </div>
  );
};
export default BreadCrumbs;

const useStyles = makeStyles({
  root: {
    cursor: "default",
    display: "flex",
    alignItems: "center",
    gap: "16.5px",
    fontSize: "14px",
    color: "#464646",
    lineHeight: "21px",
  },
  breadCrumbsLink: {
    display:'flex',
    alignItems:'center',
    gap:'16.5px',
    color:'#464646',
    textDecoration:'none'
  }
});

