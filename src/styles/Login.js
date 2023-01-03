import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginContainer: {
    width: "450px",
    height: "250px",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginTitleLayout: {
    textAlign: "center",
    marginBottom: "30px",
  },
  loginTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  formLayout: {
    width: "100%",
  },
  loginForm: {
    display: "flex",
    flexDirection: "row",
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
  loginLabel: {
    width: "70px",
    display: "flex",
    alignItems: "center",
  },
  loginInput: {
    width: "200px",
  },
  loginBtn: {
    padding: "20px 10px",
    backgroundColor: "beige",
    cursor: "pointer",
    border: "none",
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
