import { makeStyles } from '@mui/styles';
import { COLORS } from '~/assets/colors/colors';


export const SearchBtn = () => {
  const classes = useStyles();
  return (
    <button className={classes.searchBtn}>검색</button>
  )
};
export const SaveBtn = () => {
  const classes = useStyles();
  return (
    <button className={classes.saveBtn}>등록</button>
  )
};

const useStyles = makeStyles({
  searchBtn: {
    border:'none',
    background:'#E3E3E6',
    fontSize:'14px',
    borderRadius:'8px',
    padding:'10px 25px',
    height:'100%',
  },
  saveBtn: {
    border: "none",
    backgroundColor: COLORS.COLOR.MIDDLE_PURPLE,
    fontSize: "14px",
    borderRadius: "8px",
    padding: "10px 47px",
    height:'100%',
    boxSizing: "border-box",
    color: COLORS.COLOR.BLACK,
  },
});
