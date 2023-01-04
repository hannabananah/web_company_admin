import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    overflowY:'scroll'
  },
  routesContainer: {
    flex: 1, 
    display: 'flex',
    justifyContent: 'center',
  }
  
});
export default useStyles;