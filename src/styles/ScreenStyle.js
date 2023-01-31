import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1320px",
  },
  filterInput: {
    border: "1px solid #D1D1D1",
    borderRadius: "8px",
    padding: "0 20px",
    width: "100%",
    maxWidth: "170px",
    boxSizing: "border-box",
    height: "100%",
    "&:focus": {
      outline: "none",
    },
  },
  searchBtn: {
    boxSizing: "border-box",
    backgroundColor: "#E3E3E6",
    border: "none",
    fontSize: "14px",
    lineHeight: "150%",
    cursor: "pointer",
    color: COLORS.COLOR.BLACK,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "78px",
    borderRadius: "8px",
    height: "100%",
    wordBreak: "keep-all",
  },
  addBtn: {
    boxSizing: "border-box",
    fontSize: "14px",
    color: COLORS.COLOR.BLACK,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "120px",
    height: "100%",
    wordBreak: "keep-all",
    border: `1px solid ${COLORS.COLOR.ANY_PURPLE}`,
    backgroundColor: "#FCFCFF",
    color: COLORS.COLOR.ANY_PURPLE,
  },
  memberNum: {
    color: COLORS.COLOR.BLACK,
    fontSize: "14px",
    lineHeight: "150%",
    margin: "auto 0 0 20px",
  },
});
export default useStyles;
