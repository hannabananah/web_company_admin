import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";
import images from "~/assets/js/Images";

const useStyles = makeStyles({
  container: {
    // width: "100%",
    // height: "100vh",
    display: "flex",
    flex: "1",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: `url(${images.LOGIN_BG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  loginContentStyle: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginLogo: {
    margin: "0 auto",
    marginBottom: "30px",
  },
  loginContainer: {
    boxSizing: "border-box",
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
    margin: "36px 32px",
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
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
  loginInputGroup: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  loginIcon1: {
    position: "absolute",
    top: "5px",
    left: "5px",
  },
  loginIcon2: {
    position: "absolute",
    left: "0",
  },
  loginInput: {
    width: "230px",
    height: "40px",
    border: "none",
    color: COLORS.COLOR.BLACK,
    borderBottomStyle: "solid",
    borderBlockWidth: "1px",
    paddingLeft: "53px",
    borderBottomColor: COLORS.COLOR.PLACEHOLDER_GRAY,
    "&::placeholder": {
      color: COLORS.COLOR.PLACEHOLDER_GRAY,
    },
    "&:focus": {
      outline: "none !important",
      borderBottom: "1px solid transparent",
      borderImage: COLORS.GRADIENT.MAGENTA_PURPLE,
      borderImageSlice: "1",
      width: "100%",
    },
  },
  loginErrorIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
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
    fontWeight: "600",
    margin: "47px 0 35px",
  },
  loginAlertMsgStyle: {
    width: "100%",
    position: "absolute",
    top: "50%",
    marginTop: "20",
    left: "50%",
    transform: "translateX(-50%)",
  },
  loginAlertMsg: {
    fontSize: "12px",
    textAlign: "center",
    color: COLORS.COLOR.WRANING,
  },
  loginTextStyle: {
    textAlign: "center",
  },
  loginText: {
    fontSize: "12px",
    lineHeight: "106%",
    color: COLORS.COLOR.INFORMATION_GRAY,
  },
  notiTextStyle: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "20px 0",
  },
  notiText1: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "120%",
    color: COLORS.COLOR.DARK_GRAY,
  },
  notiText2: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "120%",
    color: COLORS.COLOR.DARK_GRAY,
  },
});
export default useStyles;
