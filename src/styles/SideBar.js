import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width:'200px', 
    position:'sticky', 
    bottom:0, 
    top:0 
  },
  container : {
    borderRight:'1px solid #ddd', 
    height:'100%',
    display:'flex', 
    flexDirection:'column', 
  },
  suvMenuWrap: {
    display:'flex', 
    flexDirection:'column', 
  },

  menu: {
    padding:'15px',
  },
  activeMenu: {
    padding:'15px',
    background:'teal'
  },
  suvMenuList: {
    padding:'10px 10px 10px 25px',
    color:'#999'
  },
  activesuvMenuList: {
    padding:'10px 10px 10px 25px',
    color:'#999',
    background:'teal'
  }
  
});
export default useStyles;