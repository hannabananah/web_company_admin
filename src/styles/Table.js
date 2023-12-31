import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  root: {
    border: "1px solid rgba(188,191,204,0.4)",
    borderRadius: "8px",
    boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
  },
  tableStyle: {
    width: "100%",
  },
  tHeadtrStyle: {
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    backgroundColor: "#F7FCF8",
  },
  th_td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "14px",
    fontWeight: "600",
    color: "#000",
    lineHeight: "150%",
    wordBreak: "keep-all",
    boxSizing: "border-box",
    width: "100%",
    height: "40px",
    verticalAlign: "middle",
    borderRight: `1px solid ${COLORS.COLOR.WHITE}`,
    "&:last-child": {
      border: "none",
    },
  },
  td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    color: "#000",
    lineHeight: "150%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    wordBreak: "break-all",
    boxSizing: "border-box",
    height: "38px",
    verticalAlign: "middle",
    borderTop: `1px solid ${COLORS.BORDER.TITLE}`,
    borderRight: `1px solid ${COLORS.BORDER.TITLE}`,
    "&:last-child": {
      borderRight: "none",
    },
  },
  idLink: {
    cursor: "pointer",
    color: COLORS.COLOR.ANY_PURPLE,
    width: "100%",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  uptActiveRed: {
    boxSizing: "border-box",
    backgroundColor: "transparent",
    borderRadius: "3px",
    cursor: "pointer",
    width: "64px",
    height: "22px",
    border: "1px solid #ffafb7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  uptActiveRedText: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "100%",
    color: COLORS.COLOR.WRANING,
  },
  uptActiveBlue: {
    boxSizing: "border-box",
    backgroundColor: "transparent",
    borderRadius: "3px",
    cursor: "pointer",
    width: "64px",
    height: "22px",
    border: "1px solid #98B5FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  uptActiveBlueText: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "100%",
    color: "#316BFF",
  },
  uptInactive: {
    boxSizing: "border-box",
    padding: "10px",
    color: COLORS.COLOR.INFORMATION_GRAY,
    backgroundColor: COLORS.COLOR.BACKGROUND_GRAY,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    borderRadius: "8px",
    cursor: "pointer",
  },
  noDataText: {
    width: "100%",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "150%",
    color: COLORS.COLOR.INFORMATION_GRAY,
    padding: "21.5px 0",
  },
  useBtn: {
    padding: "3px 12px",
    fontSize: "13px",
    lineHeight: "150%",
    borderRadius: "2px",
    backgroundColor: COLORS.COLOR.WHITE,
    color: "#2E5AAC",
    border: "1px solid #89A7E0",
  },
  unuseBtn: {
    padding: "3px 12px",
    fontSize: "13px",
    lineHeight: "150%",
    borderRadius: "2px",
    backgroundColor: COLORS.COLOR.WHITE,
    color: COLORS.COLOR.DARK_GRAY,
    border: `1px solid ${COLORS.COLOR.INFORMATION_GRAY}`,
  },
  activeLive: {
    backgroundColor: "transparent",
    borderRadius: "3px",
    cursor: "pointer",
    border: "1px solid #FFAFB7",
    display: "flex",
    width: "64px",
    height: "22px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  activeLiveText: {
    color: COLORS.COLOR.WRANING,
    fontWeight: "500",
    fontSize: "14px",
    // lineHeight: "100%",
  },
  activeLiveBtn: {
    color: COLORS.COLOR.WRANING,
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "100%",
    backgroundColor: "transparent",
    borderRadius: "3px",
    cursor: "pointer",
    border: "1px solid #FFAFB7",
    display: "flex",
    width: "64px",
    height: "22px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  inactiveLive: {
    padding: "8px 20px",
    color: COLORS.COLOR.INFORMATION_GRAY,
    backgroundColor: COLORS.COLOR.BACKGROUND_GRAY,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
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
