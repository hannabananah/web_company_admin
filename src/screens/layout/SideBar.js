import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import { menu } from "../../util/sidenav_menu";
import useStyles from "../../styles/SideBar";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  let isEmpty = false;

  const emptyList = ["/","/index.html"];

  emptyList.map((url) => {
    if (url == location.pathname) isEmpty = true;
  });

  const list = [
  ];

  return (
    <>
    {isEmpty ? null :
      <div className={classes.root}>
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          if (!list.includes(itemId)) {
            navigate(itemId);
          }
          // setClicked(itemId);
        }}
        items={menu}
      />
    </div>
    }
    </>
  );
};
export default SideBar;