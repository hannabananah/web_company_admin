import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display:'flex',
    flexDirection:'column'
  },
  displayNone: {
    display:'none'
  }, 
  statusSection: {
    background:'#FCFCFF',
    boxShadow:'0px 15px 24px rgba(0, 0, 0, 0.06), 0px -14px 15px #FFFFFF', 
    borderRadius: '30px',
    padding:'55px 50px',
    cursor:'default',
  },
  boxsWrapper: {
    display:'flex', 
    justifyContent:'center',
    gap:'40px', 
    marginTop:'58px',
  },
  statusBoxs: {
    // margin:'0', 
    width:'100%', 
    maxWidth:'260px',

    "& > div": {
      padding:'30px 0',
      boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius:'8px' ,
      textAlign:'center',
    },
    "&:nth-child(1) > div": {
      background:'rgba(124, 77, 255, 0.1)',
    },
    "&:nth-child(2) > div": {
      background:' rgba(0, 212, 149, 0.1)',
      // color: '#00D495'
    },
    "&:nth-child(3) > div": {
      background:' rgba(255, 49, 74, 0.1)',
      // color: '#FF314A'
    },
    "&:nth-child(4) > div": {
      background:'rgba(0, 0, 0, 0.1)',
    },     
  },
  statusLabel: {
    fontSize: '14px',
    lineHeight:'21px',
    color:'#464646',
  },
})