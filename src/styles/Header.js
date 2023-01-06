import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding:'20px',
    alignItems:'center',
    justifyContent:'space-between',
    "& h1, & button": {
      cursor:'pointer',
    },
    background:'powderblue'
  },
  userInfoSection: {
    display:'flex',
    alignItems:'center',
    gap:'15px'
  },
  user: {
    fontWeight:'bold',
    fontSize:"18px",
  },
  figure: {
    margin:'0',
    border:'1px solid rgba(188, 191, 204,0.8)',
    width:'50px',
    height:'50px',
    borderRadius:'50%',
    background:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
  
});
export default useStyles;