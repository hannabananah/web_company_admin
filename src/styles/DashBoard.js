import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display:'flex',
    flexDirection:'column',
    gap:'70px',
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
    width:'100%', 
    maxWidth:'260px',

    "& > div": {
      padding:'30px 0',
      boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius:'8px' ,
      textAlign:'center',
      "& h3": {
        lineHeight:'27px'
      }
    },
    "&:nth-child(1) > div": {
      background:'rgba(124, 77, 255, 0.1)',
      "& span": {
        background: 'linear-gradient(91.28deg, #6730FF 0.81%, #B64DFF 98.6%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
        'text-fill-color': 'transparent',
      }
    },
    "&:nth-child(2) > div": {
      background:' rgba(0, 212, 149, 0.1)',
      "& span": {
        color: '#00D495'
      }
    },
    "&:nth-child(3) > div": {
      background:' rgba(255, 49, 74, 0.1)',
      "& span": {
      color: '#FF314A'
      }
    },
    "&:nth-child(4) > div": {
      background:'rgba(0, 0, 0, 0.1)',
    },     
  },
  memberCnt: {
    fontSize:'30px',
    lineHeight:'45px',
  },
  statusLabel: {
    fontSize: '14px',
    lineHeight:'21px',
    color:'#464646',
    marginBottom:'5px'
  },

})