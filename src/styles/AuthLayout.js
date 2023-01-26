import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  outletRoot: {
    display:'flex',
    justifyContent:'center',
    paddingTop:'50px',
    "& > div" :{
      width: '100%',
      maxWidth: '1320px',
    }
  },
});
export default useStyles;