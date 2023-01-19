import React from "react";
import { useLocation, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { sidenav_data } from "~/util/sidenav_data";
import images from "~/assets/js/Images";

const BreadCrumbs = () => {
  const classes = useStyles();
  const location = useLocation();

  const pathMap = {};
  let currentLink = [];

  // 현재 path에 해당하는 sidenav data obj
  const targetObj = sidenav_data.filter((i) => {
    return location.pathname.includes(i.path);
  });
  console.log("targetObj --------> ", targetObj);

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

            for (let i = 0; i < itemsMenu.length; i++) {
              pathArr.push(itemsMenu[i].path);
              titleArr.push(item.subMenu[i].title);
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
  });
  // console.log('pathMap ----------- >>>>>>>', pathMap)

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

      return (
        <React.Fragment key={crumb}>
          <img src={images.icons.ARROWRIGHT} alt="arrow right" />
          {/* <Link to={currentLink.join('')} className={classes.breadCrumbsLink}>{crumb}</Link> */}
          <Link to={currentLink.join("")} className={classes.breadCrumbsLink}>
            {pathMap[currentLink.join("")]}
          </Link>
        </React.Fragment>
      );
    });

  return (
    <div className={classes.root}>
      <Link to={"/"} className={classes.breadCrumbsLink}>
        홈
      </Link>
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
    display: "flex",
    alignItems: "center",
    gap: "16.5px",
    color: "#464646",
    textDecoration: "none",
  },
});
