import { makeStyles } from "@mui/styles";
import images from "~/assets/js/Images";

const useStyles = makeStyles({
  root: {
    width: "270px",
    height: "100%",
    position: "sticky",
    bottom: 0,
    top: 0,
    borderRight: "1px solid rgba(188, 191, 204,0.8)",
  },
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  h1: {
    color: "#553C99",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "179px",
    margin: "0 auto",
    cursor: "pointer",
    // padding: "50px 0",
    padding: "40px 0",
    "& img": {
      width: "100%",
    },
  },
  menuContainer: {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,.15)",
      borderRadius: "10px",
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  },
  // ol
  subMenuWrap: {
    display: "flex",
    flexDirection: "column",
    // paddingBottom: "20px",
  },

  menu: {
    position: "relative",
    padding: "15px 36px",
    cursor: "pointer",
    color: "#A0A1BF",
    display: "flex",
    alignItems: "center",
    fontWeight:'bold',
  },
  activeMenu: {
    position: "relative",
    padding: "15px 36px",
    background: "#EFEFFE",
    cursor: "pointer",
    // color: "#7C4DFF",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "&:after": {
      content: `""`,
      width: "6px",
      height: "100%",
      background: "#7C4DFF",
      position: "absolute",
      right: "0",
      top: "0",
      bottom: "0",
    },
  },

  menuNoSub: {
    position: "relative",
    cursor: "pointer",
    fontWeight:'bold',
    "& a": {
      padding: "15px 36px",
      color: "#A0A1BF",
      display:'flex',
      alignItems:'center',
      textDecoration:'none'
    }
  },
  activeMenuNoSub: {
    position: "relative",
    cursor: "pointer",
    fontWeight:'bold',
    // background: "#EFEFFE",
    background: "#eee",
    "& a": {
      padding: "15px 36px",
      // color: "#7C4DFF",
      color: "#555",
      display:'flex',
      alignItems:'center',
      textDecoration:'none'
    },
    "&:after": {
      content: `""`,
      width: "6px",
      height: "100%",
      // background: "#7C4DFF",
      position: "absolute",
      right: "0",
      top: "0",
      bottom: "0",
    },
    "& a img": {
      // filter: 'invert(49%) sepia(74%) saturate(7493%) hue-rotate(245deg) brightness(105%) contrast(101%)',
    }
  },


  subMenuList: {
    // padding: "14px 0 14px 84px",
    // color: "#47485B",
    cursor: "pointer",
    fontSize: "13px",
    "& a": {
      display:'block',
      textDecoration:'none',
      color: "#595A6C",
      padding: "14px 0 14px 84px",
    }
  },
  activesubMenuList: {
    // padding: "14px 0 14px 84px",
    // color: "#7C4DFF",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight:'bold',
    position: "relative",
    // "&:after": {
    //   content: `""`,
    //   width: "6px",
    //   height: "100%",
    //   background: "#7C4DFF",
    //   position: "absolute",
    //   right: "0",
    //   top: "0",
    //   bottom: "0",
    // },
    "& a": {
      display:'block',
      textDecoration:'none',
      // color: "#7C4DFF",
      padding: "14px 0 14px 84px",
    },
  },

  details: {
    "& summary": {
      position: "relative",
    },
    "& summary::-webkit-details-marker, & summary::marker": {
      display: "none",
      content: `""`,
    },
    "& summary .expandMore": {
      margin: "0 12px 0 auto",
    },
    "&[open] summary .expandMore": {
      transform: "rotate(180deg)",
      margin: "0 12px 0 auto",
    },
    // "& summary:after" : {
    //   content: `" +"`,
    // },
    "&[open]": {
      // background:'#F8F8FF',
      borderBottom:'1px solid #EFEFFE'
    },
    "&[open] summary": {
      // background:'#EFEFFE',
      // color: "#7C4DFF",
      "& img": {
        // filter: 'invert(49%) sepia(74%) saturate(7493%) hue-rotate(245deg) brightness(105%) contrast(101%)',
      }
    },

    // "& summary.opened": {
    //   transition:'0.2s',
    //   "&:after": {
    //     content: `""`,
    //     width: "6px",
    //     height: "100%",
    //     background: "#7C4DFF",
    //     position: "absolute",
    //     right: "0",
    //     top: "0",
    //     bottom: "0",
    //   }
    // },

  },
  iconsWrap: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  },
  iconImg: {
    width: "20px",
    verticalAlign: "top",
  },
  activeBar:{
    width: "6px",
    position: "absolute",
    right: "0",
    top: "0",
    bottom: "0",
  }
});

export default useStyles;
