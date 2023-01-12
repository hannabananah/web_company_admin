import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding:'30px 50px',
    alignItems:'center',
    justifyContent:'space-between',
    "& h1, & button": {
      cursor:'pointer',
    },
    // background:'powderblue'
  },
  userInfoSection: {
    display:'flex',
    alignItems:'center',
    gap:'15px',
    justifyContent:'flex-end',
    paddingBottom:'30px'
  },
  user: {
    fontWeight:'bold',
    fontSize:"18px",
  },
  figure: {
    margin:'0',
    border:'1px solid rgba(188, 191, 204,0.8)',
    width:'34px',
    height:'34px',
    borderRadius:'50%',
    background:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    boxSizing:'border-box', 
    '& img': {
      width:'20px'
    }
  },

  
  // 나중에 지우기
  breadCrumbs: {
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
export default useStyles;