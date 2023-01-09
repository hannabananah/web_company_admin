import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  root: {},
  tableStyle: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: COLORS.STORKE.CONTENTS2,
  },
  td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    padding: "10px 0",
  },
  idLink: {
    cursor: "pointer",
    color: COLORS.COLOR.BLACK,
    textDecoration: "underline",
  },
});
export default useStyles;
