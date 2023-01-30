import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1320px",
  },
  userAccContainer: {
    maxWidth: "1320px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  titleSection: {
    position: "relative",
    "&:before": {
      content: `''`,
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      background: COLORS.COLOR.ANY_PURPLE,
      width: "5px",
      borderRadius: "15px",
    },
  },
  mainTitle: {
    fontSize: "20px",
    lineHeight: "25px",
    fontWeight: "600",
    marginLeft: "20px",
  },
  tableStyle: {
    width: "100%",
    // marginTop: "70px",
    borderCollapse: "separate",
    borderSpacing: "0px",
    backgroundColor: COLORS.COLOR.WHITE,
    // overflow: "hidden",
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
    boxShadow: "0 4px 22px 0 rgba(0, 0, 0, 0.05)",
  },
  contentInput: {
    boxSizing: "border-box",
    width: "100%",
    // minHeight: "64px",
    // height: "64px",
    display: "flex",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  editorInput: {
    boxSizing: "border-box",
    width: "100%",
    height: "450px",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
  },
  leftLayout: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "250px",
    minHeight: "64px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    borderRight: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    backgroundColor: "#FFF8F1",
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
  pickerLayout: {
    boxSizing: "border-box",
    marginLeft: "30px",
    display: "flex",
    alignItems: "center",
    height: "41px",
  },
  editorLayout: {
    boxSizing: "border-box",
    marginLeft: "30px",
    // display: "flex",
    // marginTop: "-35px",
  },
  inputStyle: {
    boxSizing: "border-box",
    width: "400px",
    height: "41px",
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
  contentStyle: {
    boxSizing: "border-box",
    display: "flex",
    alignItems:'center',
    fontSize: "14px",
    lineHeight: "150%",
    paddingLeft: "30px",
    width: "100%",
    color: "#272833 ",
    cursor: "default",
  },
  linkStyle: {
    boxSizing: "border-box",
    display: "flex",
    alignContent: "center",
    fontSize: "14px",
    lineHeight: "150%",
    paddingLeft: "30px",
    width: "100%",
    color: "#7C4DFF",
    cursor: "default",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
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
  inputNumStyle: {
    boxSizing: "border-box",
    width: "200px",
    height: "41px",
    display: "flex",
    alignContent: "center",
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "150%",
    color: COLORS.COLOR.BLACK,
    paddingLeft: "20px",
    "&:focus": {
      outline: "none",
    },
  },
  inputDash: {
    color: COLORS.STORKE.CONTENTS2,
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
    left: "10px",
    letterSpacing: "0.1px",
  },
  toggleText2: {
    position: "absolute",
    color: COLORS.COLOR.DARK_GRAY,
    fontSize: "10px",
    lineHeight: "100%",
    right: "8px",
    letterSpacing: "0.1px",
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
  editBtn: {
    boxSizing: "border-box",
    backgroundColor: COLORS.COLOR.MIDDLE_PURPLE,
    border: "none",
    fontSize: "14px",
    lineHeight: "150%",
    cursor: "pointer",
    color: COLORS.COLOR.BLACK,
    padding: "7.5px 47px",
    borderRadius: "8px",
    height: "36px",
    wordBreak: "keep-all",
    // border: `1px solid ${COLORS.COLOR.MIDDLE_PURPLE}`,
    // backgroundColor: "#FCFCFF",
    // // color: COLORS.COLOR.ANY_PURPLE,
  },
  deleteBtn: {
    boxSizing: "border-box",
    backgroundColor: "#fce8ed",
    border: "none",
    fontSize: "14px",
    lineHeight: "150%",
    cursor: "pointer",
    color: COLORS.COLOR.WRANING,
    padding: "7.5px 47px",
    borderRadius: "8px",
    height: "36px",
    wordBreak: "keep-all",
  },
  filterInput: {
    border: "1px solid #D1D1D1",
    borderRadius: "8px",
    height: "100%",
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
  radioBtnLayout1: {
    display: "flex",
    columnGap: "5px",
    marginRight: "40px",
    width: "120px",
  },
  radioBtnLayout2: {
    display: "flex",
    columnGap: "5px",
    marginRight: "40px",
    width: "fit-content",
  },
  radioBtn: {
    width: "24px",
    height: "auto",
    "&:checked": {
      accentColor: "#333",
    },
  },
  urgentText: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    padding: "21px 0",
    color: COLORS.COLOR.WRANING,
    lineHeight: "150%",
  },
});
export default useStyles;
