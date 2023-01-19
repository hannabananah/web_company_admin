import React from "react";
import { useLocation, useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { sidenav_data } from "~/util/sidenav_data";
import images from "~/assets/js/Images";

const BreadCrumbs = () => {
  const classes = useStyles();
  const location = useLocation();
  // const params = useParams();
  const params = useLocation()?.state?.urlParam;

  const pathMap = {};
  let currentLink = []

  // 현재 path에 해당하는 sidenav data obj
  const targetObj = sidenav_data.filter((i)=>{
    return location.pathname.includes(i.path)
  })
  console.log('targetObj --------> ', targetObj)

  targetObj.map((item)=>{
    const pathArr = []
    const titleArr = []

    //일단 무조건 path키가 있으니까 넣어줌
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

      const currPath = location.pathname.split('/')
        .filter((item)=>{return item !=''})

      for (let i=0; i<currPath.length-1; i++){
        itemsMenu.filter((item,index)=>{
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
        })
        // console.log(`itemsMenu ${i}번째 출력 array ${itemsMenu.length}개 나와야함 --- >> `, itemsMenu)
      }
    } // if subMenu

    // console.log(pathArr)
    // console.log(titleArr)

    for(let i=0; i<pathArr.length; i++){
      pathMap[pathArr[i]] = titleArr[i]
    }
  })
 

  // const removeParmas = () => {

    // key 가져올 때 1
    // for (let key in pathMap) {
    //   console.log('key ----- >', pathMap[key])
    // }
    // key 가져올 때 2
    // for (let key of Object.keys(pathMap)) {
    //   console.log('key ----- >', key)
    // }
    // value 가져올 때
    // for (let value of Object.values(pathMap)) {
    //   console.log('value ----- >', value)
    // }

    // key value 다 가져올 때
    // for (let [key, value] of Object.entries(pathMap)) {
    //   console.log('key value ----- >', key + ':' + value)
    // }

    
  // }

  
  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
    currentLink.push(`/${crumb}`)

    console.log('currentLink,,,,,,,,,,,,,',currentLink) // ['/setting_admin', '/user_account', '/details', '/cosmos']

    // console.log('findIndex,,,,,,,,,,,,,',currentLink.findIndex((item,index)=> item === (`/${params}`))) 


    // const renderLinks = (param) => {
    //   let link;
    //   let LinkTo;
    //   let findIndex;

    //   if (currentLink.includes(`/${params}`)) {
    //     findIndex = currentLink.findIndex((item,index)=> item === (`/${params}`)) 

    //     currentLink[findIndex-1]
    //     currentLink[findIndex]

    //     LinkTo = 
    //   } else {
    //     LinkTo = currentLink.join('')
    //   }


    //   return LinkTo
    // }




    // console.log('useLocation().state.urlParam---------------- >>>> ',`/${params}`)
    // console.log("currentLink.join('')________________:::",currentLink.join(''))
    // console.log('pathMap ----------- >>>>>>>', pathMap)


    const removeParam = (param) => {
      let pathKo;
      if (currentLink.join('').includes(`/${param}`)) {
        pathKo = pathMap[currentLink.join('').split(`/${param}`)[0]] 
        // console.log(currentLink.join('').split(`/${param}`)[0])
      } else {
        pathKo = pathMap[currentLink.join('')]
      }
      return pathKo;
    }
    
    return (
      <React.Fragment key={crumb} >
        <img src={images.icons.ARROWRIGHT} alt="arrow right" />
        <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{crumb}</Link>
        {/* <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{pathMap[currentLink.join('')]}</Link> */}
        {/* <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{removeParam(params)}</Link> */}
      </React.Fragment>
    )
  })

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