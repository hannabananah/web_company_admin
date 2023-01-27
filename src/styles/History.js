import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    // width:'100%',
    // maxWidth:'1320px',
  },
  filterSection: {
    display: "flex",
    alignItems: "center",
    height: "40px",
    justifyContent: "space-between",
    padding: "0 0 20px",
  },
  filterUnit: {
    height: "100%",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  searchBtn: {
    border: "none",
    background: "#E3E3E6",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "10px 25px",
    height: "100%",
  },

  // 나중에 지우기
  titleSection: {
    position: "relative",
    // margin:'30px 0 70px',
    "&:before": {
      content: `''`,
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      background: "#7C4DFF",
      width: "5px",
      borderRadius: "15px",
    },
  },
  mainTitle: {
    fontSize: "20px",
    lineHeight: "25px",
    fontWeight: "bold",
    marginLeft: "20px",
  },
  input: {
    border: "1px solid #D1D1D1",
    lineHeight: "35px",
    height: "35px",
    borderRadius: "8px",
    height: "100%",
    padding: "0 10px",
    width: "100%",
    maxWidth: "170px",
    boxSizing: "border-box",
  },
});
