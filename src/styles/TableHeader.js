import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    position:'relative',
    cursor:'default',
    marginBottom:'30px',
    // margin:'30px 0 70px',
    "&:before": {
      content:`''`,
      position:'absolute',
      left:'0',
      top:'0',
      bottom:'0',
      background:'#7C4DFF',
      width:'5px',
      borderRadius:'15px',
    }
  },
  mainTitle: {
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight:'bold',
    marginLeft:'20px',
  },

});
