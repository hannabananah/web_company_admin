import { makeStyles } from "@mui/styles";
import images from "~/assets/js/Images";

const useStyles = makeStyles({
  root: {
    width: "300px",
    maxWidth: "500px",
    minWidth: "200px",
    position: "sticky",
    bottom: 0,
    top: 0,
    borderRight: "1px solid rgba(188, 191, 204,0.8)",

    resize: 'horizontal',
    overflow: 'auto',
    "&::-webkit-resizer": {
      background:'red',
      boxShadow: '0 0 10px 10px blue',
      outline: '2px solid yellow',


      position:'absolute !important',
      // top:'0',
      // bottom:'0',
      // right:'0',
    }
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
    maxWidth: "250px",
    minWidth: "200px",
    margin: "0 auto",
    cursor: "pointer",
    padding: "50px 0",
    "& img": {
      width: "100%",
    },
  },
  menuContainer: {
    overflowY:"auto",
    '&::-webkit-scrollbar': {
      width:'12px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(0,0,0,.15)',
      borderRadius: '10px',
      backgroundClip: 'padding-box',
      border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',

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
    "& summary .expandMore": {
      margin:'0 30px 0 auto',
    },
    "&[open] summary .expandMore": {
      transform:'rotate(180deg)',
      margin:'0 30px 0 auto',
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
});

export default useStyles;
