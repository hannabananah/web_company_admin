import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  editAccContainer: {
    maxWidth: "1320px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tableStyle: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0px",
    backgroundColor: COLORS.COLOR.WHITE,
    overflow: "hidden",
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
    boxShadow: "0 4px 22px 0 rgba(0, 0, 0, 0.05)",
  },
  contentInput: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  leftLayout: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "250px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    borderRight: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    backgroundColor: "#f8f8ff",
  },
  leftText: {
    wordBreak: "keep-all",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#272833",
  },
  fixedLayout: {
    boxSizing: "border-box",
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    lineHeight: "150%",
    color: COLORS.COLOR.INFORMATION_GRAY,
  },
  inputLayout: {
    boxSizing: "border-box",
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
  },
  inputStyle: {
    boxSizing: "border-box",
    width: "400px",
    height: "28px",
    display: "flex",
    alignContent: "center",
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "150%",
    paddingLeft: "20px",
    color: "#272833 ",
    "&:focus": {
      outline: "none",
    },
  },
  userToggle: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    position: "relative",
  },
  toggleText1: {
    position: "absolute",
    color: COLORS.COLOR.WHITE,
    fontSize: "10px",
    lineHeight: "100%",
    left: "4px",
    letterSpacing: "0.06px",
  },
  toggleText2: {
    position: "absolute",
    color: COLORS.COLOR.DARK_GRAY,
    fontSize: "10px",
    lineHeight: "100%",
    right: "2px",
    letterSpacing: "0.06px",
  },
  submitBtns: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    flexDirection: "row",
    columnGap: "30px",
  },
  backBtn: {
    boxSizing: "border-box",
    backgroundColor: "transparent",
    fontSize: "14px",
    cursor: "pointer",
    color: COLORS.COLOR.BLACK,
    borderRadius: "8px",
    width: "120px",
    height: "36px",
    wordBreak: "keep-all",
    border: `1px solid ${COLORS.COLOR.BLACK}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtn: {
    boxSizing: "border-box",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "14px",
    lineHeight: "150%",
    cursor: "pointer",
    color: COLORS.COLOR.ANY_PURPLE,
    borderRadius: "8px",
    width: "120px",
    height: "36px",
    wordBreak: "keep-all",
    border: `1px solid ${COLORS.COLOR.ANY_PURPLE}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default useStyles;
