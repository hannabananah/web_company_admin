import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  userAccContainer: {
    // maxWidth: "1200px",
    // minWidth:'1000px',
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tableStyle: {
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
  contentInput: {
    boxSizing: "border-box",
    width: "100%",
    // minHeight: "64px",
    // height: "64px",
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  editorInput: {
    boxSizing: "border-box",
    width: "100%",
    minHeight: "450px",
    display: "flex",
    // alignItems: "center",
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
  },
  leftLayout: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "250px",
    minHeight: "38px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    borderRight: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    backgroundColor: "#FFF8F1",
  },
  leftContentLayout: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "250px",
    minHeight: "450px",
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
    height: "28px",
  },
  editorLayout: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 30px 0",
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
});
export default useStyles;
