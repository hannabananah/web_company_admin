import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  root: {
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
    boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.05)",
    background: "#fff",
  },
  tableStyle: {
    width: "100%",
  },
  tHeadtrStyle: {
    borderBottom: `1px solid ${COLORS.STORKE.CONTENTS2}`
  },
  th_td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "14px",
    padding: "21px 0",
    fontWeight: "600",
    color: "#000",
    lineHeight: "150%",
    wordBreak: "keep-all",
  },
  td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    padding: "21px 0",
    color: "#000",
    lineHeight: "150%",
  },
  idLink: {
    cursor: "pointer",
    color: COLORS.COLOR.ANY_PURPLE,
    
    padding: "16px",
    "&:hover": {
      textDecoration: "underline",
    }
  },
  uptActiveRed: {
    boxSizing: "border-box",
    padding: "10px",
    color: COLORS.COLOR.WRANING,
    backgroundColor: "rgba(255,49,74,0.1)",
    fontWeight: "Medium",
    fontSize: "14px",
    lineHeight: "100%",
    borderRadius: "8px",
    cursor: "pointer",
  },
  uptActiveBlue: {
    boxSizing: "border-box",
    padding: "10px",
    color: "#89a7e0",
    backgroundColor: "rgba(137,167,224,0.1)",
    fontWeight: "Medium",
    fontSize: "14px",
    lineHeight: "100%",
    borderRadius: "8px",
    cursor: "pointer",
  },
  uptInactive: {
    boxSizing: "border-box",
    padding: "10px",
    color: COLORS.COLOR.INFORMATION_GRAY,
    backgroundColor: COLORS.COLOR.BACKGROUND_GRAY,
    fontWeight: "Medium",
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
    padding: "8px 20px",
    color: COLORS.COLOR.WRANING,
    backgroundColor: "rgba(255,49,74,0.1)",
    fontWeight: "Medium",
    fontSize: "14px",
    lineHeight: "100%",
    borderRadius: "8px",
    cursor: "pointer",
  },
  inactiveLive: {
    padding: "8px 20px",
    color: COLORS.COLOR.INFORMATION_GRAY,
    backgroundColor: COLORS.COLOR.BACKGROUND_GRAY,
    fontWeight: "Medium",
    fontSize: "14px",
    lineHeight: "100%",
    borderRadius: "8px",
    cursor: "pointer",
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
