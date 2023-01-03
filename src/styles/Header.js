import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding:'20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    "& h1, & button": {
      cursor:'pointer',
    },
    background:'powderblue'
  },
  
});
export default useStyles;