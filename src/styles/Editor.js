import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  wrapper: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "1000px",
    height: "330px !important",
  },
  editor: {
    boxSizing: "border-box !important",
    height: "100% !important",
    border: "1px solid #d0d1d6 !important",
    padding: "15px 20px !important",
    overflowY: "auto !important",
  },
  toolbar: {
    boxSizing: "border-box !important",
    width: "100% !important",
    fontSize: "0.8em !important",
    border: "1px solid #d0d1d6 !important",
    borderBottom: "none !important",
    backgroundColor: "#F0F0F0 !important",
    padding: "2px 10px !important",
    margin: "0 !important",
    borderRadius: "0 !important",
  },
});
export default useStyles;
