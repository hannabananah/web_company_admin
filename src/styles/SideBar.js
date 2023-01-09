import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import images from "~/assets/js/Images";

const useStyles = makeStyles({
  root: {
    width: "300px",
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
    fontSize: "28px",
    lineHeight: "28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    margin: "0 auto",
    cursor: "pointer",
    padding: "40px 0",
    "& img": {
      width: "100%",
    },
  },

  // ol
  subMenuWrap: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "20px",
  },

  menu: {
    position:'relative',
    padding: "15px",
    cursor: "pointer",
    color: "#A0A1BF",
    display:'flex', 
    alignItems:'center'
  },
  activeMenu: {
    position:'relative',
    padding: "15px",
    background: "#EFEFFE",
    cursor: "pointer",
    color: "#7C4DFF",
    fontWeight: "bold",
    display:'flex', 
    alignItems:'center',
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

  subMenuList: {
    padding: "15px 10px 15px 60px",
    color: "#A0A1BF",
    cursor: "pointer",
    fontSize: "13px",
  },
  activesubMenuList: {
    padding: "15px 10px 15px 60px",
    color: "#7C4DFF",
    cursor: "pointer",
    fontSize: "13px",
  },

  details: {
    "& summary": {
      position: "relative",
    },
    "& summary::-webkit-details-marker, & summary::marker": {
      display: "none",
      content: `""`,
    },
    // "& summary:after" : {
    //   content: `" +"`,
    // },
  },
  iconsWrap: {
    width:'30px', 
    height:'30px',
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center',
    marginRight:'14px',
  },
  iconImg: {
    width:'20px', 
    verticalAlign:'top'
  },
  arrowUp: {
    transform:'rotateX(180deg)',
    margin:'0 30px 0 auto',
  },
  arrowDown: {
    margin:'0 30px 0 auto',
  },
  logoutBtn: {
    color: "#FF314A",
    margin: "auto 0 40px",
    background: "transparent",
    border: "none",
    lineHeight: "28px",
    padding: "18px 40px",
    background: "#FCFCFF",
    boxShadow: "0px 15px 18px rgba(0, 0, 0, 0.05), 0px -14px 15px #FFFFFF",
    borderRadius: "10px",
    alignSelf:'center',
    display:'flex',
    alignItems:'center',
    gap:'15px'
  },

  /* offset-x | offset-y | blur-radius | color */
  // box-shadow: 10px 5px 5px black;
});

export default useStyles;
