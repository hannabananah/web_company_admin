import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  adminAccContainer: {
    maxWidth: "1320px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  adminTableStyle: {
    width: "100%",
    // marginTop: "70px",
    borderCollapse: "separate",
    borderSpacing: "0px",
    backgroundColor: COLORS.COLOR.WHITE,
    overflow: "hidden",
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
    boxShadow: "0 4px 22px 0 rgba(0, 0, 0, 0.05)",
  },
  adminContentInput: {
    boxSizing: "border-box",
    width: "100%",
    height: "38px",
    display: "flex",
    alignItems: "center",
  },
  adminLeftLayout: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "250px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRight: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    backgroundColor: "#f8f8ff",
  },
  leftText: {
    wordBreak: "keep-all",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#272833",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  inputLayout: {
    boxSizing: "border-box",
    paddingLeft: "30px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
  },
  adminInputStyle: {
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
  checkBtnStyle: {
    boxSizing: "border-box",
    fontSize: "14px",
    lineHeight: "150%",
    textAlign: "center",
    backgroundColor: COLORS.COLOR.BACKGROUND_GRAY,
    border: "none",
    borderRadius: "8px",
    color: COLORS.COLOR.BLACK,
    cursor: "pointer",
    marginLeft: "30px",
    padding: "4.5px 54px",
  },
  checkIconStyle: {
    marginLeft: "30px",
    display: "flex",
    alignContent: "center",
  },
  checkNormalText: {
    color: COLORS.COLOR.BLACK,
    fontSize: "14px",
    lineHeight: "200%",
    textAlign: "center",
    marginLeft: "6px",
  },
  checkErrorText: {
    color: COLORS.COLOR.WRANING,
    fontSize: "14px",
    lineHeight: "200%",
    textAlign: "center",
    marginLeft: "6px",
  },
  userToggle: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    position: "relative",
  },
  adminToggleText1: {
    position: "absolute",
    color: COLORS.COLOR.WHITE,
    fontSize: "5.63px",
    letterSpacing: "0.06px",
    // lineHeight: "100%",
    left: "4px",
  },
  adminToggleText2: {
    position: "absolute",
    color: COLORS.COLOR.DARK_GRAY,
    fontSize: "5.63px",
    letterSpacing: "0.06px",
    // lineHeight: "100%",
    right: "2px",
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
