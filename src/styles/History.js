import { makeStyles } from '@mui/styles';
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    
  },
  titleSection: {
    position:'relative',
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
    height:'40px'
  },
  input: {
    border:'1px solid #D1D1D1',
    // lineHeight:'40px',
    borderRadius:'8px',
    height:'100%',
    padding:'0',
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

    }
  }
  
});

export const datepickerSX = {


  '& .MuiInputBase-input':{
    padding:'0',
    cursor:'pointer',
    width:'100%',
    textAlign:'center',
    color:'#D1D1D1',
    fontSize:'14px',


    height:'100%',


    // background:'salmon',
  },
  '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
    position:'absolute',
    left:'0',
    right:'0',
    top:'0',
    bottom:'0',
    margin:'0',
    height:'100%'
  },
  '& .MuiIconButton-edgeEnd.MuiIconButton-sizeMedium': {
    // background:'teal',
    borderRadius:'0',
    width:'100%',
    padding:'0',
    '& svg': {
      opacity:'0',
      visibility:'hidden'
    }
  }
}