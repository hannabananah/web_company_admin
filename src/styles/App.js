import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    overflowY:'auto',
  },
  routesContainer: {
    flex: 1, 
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column'
  }
  
});
export default useStyles;