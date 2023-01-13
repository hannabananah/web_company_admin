import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  wrapper: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "1000px",
    height: "374px",
    marginTop: "10px",
  },
  editor: {
    height: "330px !important",
    border: "1px solid #d0d1d6 !important",
    padding: "5px 20px !important",
    overflowY: "hidden",
  },
  toolbar: {
    boxSizing: "border-box",
    width: "100%",
    fontSize: "0.8em",
    border: "1px solid #d0d1d6 !important",
    borderBottom: "none !important",
    backgroundColor: COLORS.COLOR.BACKGROUND_GRAY,
    padding: "2px 10px",
    margin: "0",
    borderRadius: "0 !important",
  },
});
export default useStyles;
