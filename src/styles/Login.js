import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

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
    width: "400px",
    height: "390px",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
  },
  loginTitleLayout: {
    textAlign: "center",
    marginTop: "73px",
  },
  loginTitle: {
    color: "#09273C",
    fontSize: "28px",
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
    width: "230px",
    height: "40px",
    border: "none",
    borderBottomStyle: "solid",
    borderBlockWidth: "1px",
    borderBottomColor: COLORS.COLOR.PLACEHOLDER_GRAY,
    "&::placeholder": {
      color: COLORS.COLOR.PLACEHOLDER_GRAY,
    },
  },
  loginBtn: {
    boxSizing: "border-box",
    padding: "10px 112px",
    backgroundColor: COLORS.COLOR.ANY_PURPLE,
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
  notiTextStyle: {
    position: "absolute",
    bottom: "60px",
    textAlign: "center",
  },
  notiText1: {
    fontWeight: "medium",
    fontSize: "14px",
    lineHeight: "120%",
    color: COLORS.COLOR.DARK_GRAY,
  },
  notiText2: {
    fontWeight: "regular",
    fontSize: "14px",
    lineHeight: "120%",
    color: COLORS.COLOR.DARK_GRAY,
  },
});
export default useStyles;
