import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width:'100%',
    maxWidth:'600px', 
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    gap:'50px',
    paddingTop:'120px'
  },
  img: {
    width:'100%'
  },
  heading: {
    fontSize:'28px',
    fontWeight:'bold'
  }
});
export default useStyles;