import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  userAccContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tableStyle: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #999",
  },
  contentInput: {
    boxSizing: "border-box",
    width: "100%",
    height: "32px",
    display: "flex",
    alignItems: "center",
  },
  leftLayout: {
    boxSizing: "border-box",
    width: 280,
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    border: "1px solid #999",
    backgroundColor: "#f9f9f9",
  },
  leftText: {
    wordBreak: "keep-all",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "16px",
    letterSpacing: -0.42,
  },
  inputLayout: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    paddingLeft: "10px",
    border: "1px solid #999",
    display: "flex",
    alignItems: "center",
  },
  contentStyle: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    paddingLeft: "10px",
    border: "1px solid #999",
    display: "flex",
    alignItems: "center",
  },
  inputStyle: {
    boxSizing: "border-box",
    width: "180px",
    height: "18px",
    display: "flex",
    alignContent: "center",
    border: "1px solid #999",
    fontSize: 16,
    lineHeight: "19px",
    letterSpacing: -0.42,
    "&:focus": {
      outline: "#999",
      borderColor: "#999",
    },
  },
  checkBtnStyle: {
    boxSizing: "border-box",
    width: "60px",
    height: "18px",
    fontSize: "10px",
    textAlign: "center",
    backgroundColor: "#666",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "200",
    marginLeft: "10px",
  },
  inputNumStyle: {
    boxSizing: "border-box",
    width: "48px",
    height: "18px",
    display: "flex",
    alignContent: "center",
    border: "1px solid #999",
    fontSize: 16,
    lineHeight: "19px",
    letterSpacing: -0.42,
    "&:focus": {
      outline: "#999",
      borderColor: "#999",
    },
  },
  userToggle: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
  },
  toggleText: {
    position: "absolute",
    color: "#fff",
    fontSize: 9,
    // left: "50%",
    transform: "translateX(73%)",
  },
  submitBtns: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    flexDirection: "row",
    columnGap: "12px",
  },
  backBtn: {
    boxSizing: "border-box",
    backgroundColor: "#fff",
    border: "1px solid #333",
    fontSize: "12px",
    width: "40px",
    cursor: "pointer",
    color: "#000",
  },
  saveBtn: {
    boxSizing: "border-box",
    backgroundColor: "#333",
    border: "1px solid #333",
    fontSize: "12px",
    width: "40px",
    color: "#fff",
    cursor: "pointer",
  },
  editBtn: {
    boxSizing: "border-box",
    backgroundColor: "#333",
    border: "1px solid #333",
    fontSize: "12px",
    width: "40px",
    cursor: "pointer",
    color: "#fff",
  },
  deleteBtn: {
    boxSizing: "border-box",
    backgroundColor: "#333",
    border: "1px solid #333",
    fontSize: "12px",
    width: "40px",
    cursor: "pointer",
    color: "#fff",
  },
});
export default useStyles;
