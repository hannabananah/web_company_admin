import React from "react";
import { useLocation, useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { sidenav_data } from "~/util/sidenav_data";
import images from "~/assets/js/Images";

const BreadCrumbs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  // const params = useParams();
  const params = useLocation()?.state?.urlParam;




  const pathMap = {};
  let currentLink = [];

  // 현재 path에 해당하는 sidenav data obj
  const targetObj = sidenav_data.filter((i)=>{
    return location.pathname.includes(i.path)
  })
  // console.log('targetObj --------> ', targetObj)

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


              // if (itemsMenu[i].path.includes('/:')) {
              //   // console.log('있음',itemsMenu[i])
              //   // console.log(itemsMenu[i].path.split('/:')[0])
                
              //   pathArr.push(itemsMenu[i].path.split('/:')[0])
              // } else {
              //   // console.log('없음',itemsMenu[i])
              //   pathArr.push(itemsMenu[i].path)
              // }


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
 
  const newPathObj = []
  targetObj.map((item)=>{

    newPathObj.push(
      {
        path: item.path,
        title: item.title,
        linkTo: item.linkTo 
      }
    )

    if (item.subMenu) {    
      let itemsMenu
      itemsMenu = item.subMenu

      // 서브메뉴가 있으면 일단 path를 다 넣어야 함.    
      for (let i=0; i< itemsMenu.length; i++) {
        newPathObj.push(
          {
            path: itemsMenu[i].path,
            title: item.subMenu[i].title,
            linkTo: item.subMenu[i].linkTo
          }
        )
      }

      const currPath = location.pathname.split('/')
        .filter((item)=>{return item !=''})

      for (let i=0; i<currPath.length-1; i++){
        itemsMenu.filter((item,index)=>{
          if (item.subMenu) {
            itemsMenu = item.subMenu;
    
            for (let i=0; i<itemsMenu.length; i++) {
              newPathObj.push(
                {
                  path: itemsMenu[i].path,
                  title: item.subMenu[i].title,
                  linkTo: item.subMenu[i].linkTo
                }
              )
            }
          }
        })
        // console.log(`itemsMenu ${i}번째 출력 array ${itemsMenu.length}개 나와야함 --- >> `, itemsMenu)
      }
    } // if subMenu
    
  })
  // console.log('newPathObj__________________',newPathObj)

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

    const obj = newPathObj.filter((item)=>{
      return item.path == currentLink.join('')
    })
    // console.log('currentLink_______________________',currentLink)
    console.log('newPathObj_______________________',newPathObj)
    // console.log('obj_______________________',obj)
    

    // obj[0]?.linkTo == false ? false
    return (
      <React.Fragment key={crumb}>
        <img src={images.icons.ARROWRIGHT} alt="arrow right" />

        <sapn onClick={()=>{navigate(false)}} 
          className={classes.breadCrumbsLink}>{obj[0]?.title ? obj[0]?.title : crumb}</sapn>

      </React.Fragment>
    )

    /////-------------- 2 번째 ( 404는 해결 했는데 crumb링크 클릭시 useLocation 의 state값이 초기화돼서 오류 ) --------------/////
    // return (
    //   <React.Fragment key={crumb}>
    //     <img src={images.icons.ARROWRIGHT} alt="arrow right" />
    //     <Link to={obj[0]?.linkTo == false ? false : currentLink.join('')} 
    //       className={classes.breadCrumbsLink}>
    //         {obj[0]?.title ? obj[0]?.title : crumb}
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

