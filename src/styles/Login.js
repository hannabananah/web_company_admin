import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginContainer: {
    width: "580px",
    height: "570px",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
  },
  //완료
  loginTitleLayout: {
    textAlign: "center",
    marginTop: "73px",
  },
  //완료
  loginTitle: {
    color: "#09273C",
    fontSize: "40px",
    fontWeight: "bold",
    lineHeight: "150%",
  },
  formLayout: {
    width: "100%",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "16px 0",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
  loginInputGroup: {
    display: "flex",
    flexDirection: "row",
  },
  loginInput: {
    width: "200px",
    "&::placeholder": {
      color: "#d1d1d1",
    },
  },
  //완료
  loginBtn: {
    boxSizing: "border-box",
    padding: "15px 197px",
    backgroundColor: "#7C4DFF",
    cursor: "pointer",
    border: "none",
    color: "white",
    borderRadius: "8px",
    lineHeight: "150%",
    fontSize: "20px",
    fontWeight: "semiBold",
  },
  loginText1: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
  },
  loginText2: {
    display: "flex",
    justifyContent: "center",
    columnGap: "10px",
    padding: "10px 0",
  },
});
export default useStyles;
