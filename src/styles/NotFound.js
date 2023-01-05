import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    // alignItems:'center'
    paddingTop:'50px',
    justifyContent:'center'
  },
  contents: {
    width:'100%',
    maxWidth:'550px',
  },
  img: {
    width:'100%'
  },
  text: {
    textAlign:'center',
    paddingTop:'50px',
    display:'flex',
    flexDirection:'column',
    gap:'15px',
    alignItems:'center',
    fontSize:'28px',
    cursor:'default',
  },
  goBackBtn: {
    padding:'10px 50px',
    border:'none',
    borderRadius:'10px',
    backgroundImage: 'linear-gradient(to right, #ffd3ec, #f7d4f3, #edd5f8, #e2d7fd, #d7d9ff, #cfdeff, #c9e2ff, #c5e6ff, #c7edff, #cdf4fe, #d4fafd, #defffd)'
  }

});
export default useStyles;