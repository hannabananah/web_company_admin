import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    overflowY:'auto',
    background:'#FCFCFF',
    "& *": {
      fontFamily: 'Noto Sans, sans-serif'
    },
  },
  routesContainer: {
    flex: 1, 
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column'
  }
});
export default useStyles;