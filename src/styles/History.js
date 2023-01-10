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
    padding:'0',
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
  }
  
});

export const datepickerSX = {
  '&.MuiFormControl-root.MuiTextField-root': {
    height:'100%',
  },
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
    height:'100%',
    maxHeight:'100%'
  },
  '& .MuiIconButton-edgeEnd.MuiIconButton-sizeMedium': {
    // background:'teal',
    borderRadius:'0',
    width:'100%',
    padding:'0',
    height:'100%',
    '& svg': {
      opacity:'0',
      visibility:'hidden'
    }
  }
}

export const formControlSX = {
  '&.MuiFormControl-root': {
    height:'100%',
    width:'180px',
    border:'1px solid #D1D1D1',
    borderRadius:'8px',
    overflow:'hidden',
    boxSizing:'border-box'
  }, 
  '& .MuiInputBase-root':{
    height:'100%'
  },
  '& .MuiOutlinedInput-notchedOutline':{
    border:'none',
  },
  '& .MuiSelect-select.MuiSelect-outlined': {
    lineHeight:'38px',
    padding:'0 40px 0 14px'
  }
}