import { makeStyles } from '@mui/styles';
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    width:'100%',
    maxWidth:'1320px',
  },
  titleSection: {
    position:'relative',
    // margin:'30px 0 70px',
    "&:before": {
      content:`''`,
      position:'absolute',
      left:'0',
      top:'0',
      bottom:'0',
      background:'#7C4DFF',
      width:'5px',
      borderRadius:'15px'
    }
  },
  mainTitle: {
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight:'bold',
    marginLeft:'20px',
  },
  filterSection: {
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
  datePickerRoot: {
    maxWidth:'190px',
    height:'100%',
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
      position:'relative',
      padding:'0',
      height:'100%',
      borderRadius:'8px'
    }
  },
  arrowBox: {
    width:'40px',
    background:'#464646', 
    position:'absolute',
    right:0,
    top:0,
    bottom:0,    
    height:'100%', 
    pointerEvents:'none',
    cursor:'pointer'
  },
  expandSelect: {
    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(194deg) brightness(108%) contrast(102%)',
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:'rotate(90deg) translate(-50%,-50%)',
    transformOrigin:'0% 0%',

  }
  
});