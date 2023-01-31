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
    minHeight: "38px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    borderRight: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    backgroundColor: "#FFF8F1",
  },
  leftDetailContentLayout: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "250px",
    minHeight: "400px",
    height: "100%",
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
  contentStyle: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    lineHeight: "150%",
    paddingLeft: "30px",
    width: "100%",
    color: "#272833 ",
    cursor: "default",
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
  editBtn: {
    boxSizing: "border-box",
    backgroundColor: "transparent",
    fontSize: "14px",
    lineHeight: "150%",
    cursor: "pointer",
    color: COLORS.COLOR.BLACK,
    padding: "7.5px 47px",
    borderRadius: "8px",
    height: "36px",
    wordBreak: "keep-all",
    border: `1px solid ${COLORS.COLOR.ANY_PURPLE}`,
    color: COLORS.COLOR.ANY_PURPLE,
  },
  urgentText: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    color: COLORS.COLOR.WRANING,
    lineHeight: "150%",
  },
});
export default useStyles;
