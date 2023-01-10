import { makeStyles } from '@mui/styles';
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    display:'flex',
    alignItems:'center',
    height:'40px',
    justifyContent:'space-between',
    padding:"40px 0 20px"
  },
  filterUnit: {
    height:'100%',
    display:'flex',
    gap:'10px',
    alignItems:'center'
  },
  input: {
    border:'1px solid #D1D1D1',
    // lineHeight:'40px',
    borderRadius:'8px',
    height:'100%',
    padding:'0 10px',
    width:'100%',
    maxWidth:'170px',
    boxSizing:'border-box'
  },
  searchBtn: {
    border:'none',
    background:'#E3E3E6',
    borderRadius:'8px',
    fontSize:'14px',
    padding:'10px 25px',
    height:'100%',
  },
});