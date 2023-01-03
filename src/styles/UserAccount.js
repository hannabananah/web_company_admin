import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentInput: {
    boxSizing: "border-box",
    width: "100%",
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  leftLayout: {
    width: 80,
    paddingTop: 7,
    paddingRight: 24,
    marginRight: -14,
  },
  leftText: {
    wordBreak: "keep-all",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "19px",
    letterSpacing: -0.42,
  },
  inputLayout: {
    boxSizing: "border-box",
    maxWidth: 918,
    width: "100%",
    height: 34,
    alignContent: "center",
    paddingRight: 15,
    paddingLeft: 15,
    borderStyle: "solid",
    borderColor: "#999",
    borderWidth: 1,
    fontSize: 18,
    lineHeight: "19px",
    letterSpacing: -0.42,
    "&:focus": {
      outline: "#999",
      borderColor: "#999",
    },
  },
});
export default useStyles;
