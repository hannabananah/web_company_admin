import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    height: "35px",
    justifyContent: "space-between",
    padding: "0 0 20px",
    "& button": {
      cursor: "pointer",
    },
  },
  filterUnit: {
    height: "100%",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  // 나중에 지우기
  searchBtn: {
    border: "none",
    background: "#E3E3E6",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "10px 25px",
    height: "100%",
  },
  input: {
    border: "1px solid #D1D1D1",
    lineHeight: "35px",
    borderRadius: "8px",
    height: "35px",
    padding: "0 10px",
    width: "100%",
    maxWidth: "220px",
    boxSizing: "border-box",
  },
});
