import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  outletRoot: {
    display:'flex',
    // justifyContent:'center',
    paddingTop:'50px',
    marginLeft:'80px',
    paddingBottom:'100px',
    // padding:'0 100px',
    "& > div, & > figure" :{
      width: '100%',
      // margin:'0 auto',
      maxWidth: '1200px',
      minWidth:'1000px',
      
    }
  },
});
export default useStyles;