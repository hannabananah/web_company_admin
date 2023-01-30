import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  outletRoot: {
    display:'flex',
    // justifyContent:'center',
    paddingTop:'50px',
    marginLeft:'80px',
    paddingBottom:'100px',
    // padding:'0 100px',
    "& > div" :{
      width: '100%',
      // margin:'0 auto',
      maxWidth: '1320px',
    }
  },
});
export default useStyles;