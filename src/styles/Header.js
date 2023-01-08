import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding:'40px 50px',
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
    gap:'15px',
    justifyContent:'flex-end'
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