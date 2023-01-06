import { makeStyles } from '@mui/styles';
import images from "~/assets/js/Images";

const useStyles = makeStyles({
  root: {
    width:'300px', 
    position:'sticky', 
    bottom:0, 
    top:0,
    borderRight:'1px solid rgba(188, 191, 204,0.8)',
    paddingTop:'40px'
  },
  container : {
    height:'100%',
    display:'flex', 
    flexDirection:'column', 
  },
  h1 : {
    color:'#553C99',
    fontWeight:'bold',
    fontSize:'28px',
    lineHeight:'28px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'250px',
    margin:'0 auto',
    cursor:'pointer',
    "& img": {
      width:'100%'
    }
  },

  subMenuWrap: {
    display:'flex', 
    flexDirection:'column', 
  },

  menu: {
    padding:'15px',
    cursor:'pointer',
  },
  activeMenu: {
    padding:'15px',
    background:'teal',
    cursor:'pointer',
  },
  subMenuList: {
    padding:'10px 10px 10px 25px',
    color:'#999',
    cursor:'pointer',
  },
  activesubMenuList: {
    padding:'10px 10px 10px 25px',
    color:'#999',
    background:'teal',
    cursor:'pointer',
  },


  details : {
    "& summary" : {
      position: 'relative',
    },
    "& summary::-webkit-details-marker, & summary::marker" : {
      display: 'none',
      content: `""`,
    },
    "& summary:after" : {
      content: `" +"`,
    },
    "&[open] > summary:after" : {
      content: `" -"`,
    },
  }
});


export default useStyles;