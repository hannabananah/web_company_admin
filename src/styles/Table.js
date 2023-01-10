import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

const useStyles = makeStyles({
  root: {
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius:'8px', 
    boxShadow:"0px 4px 22px rgba(0, 0, 0, 0.05)"
  },
  tableStyle: {
    width:'100%',
  },
    th_td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    padding: "21px 0",
    fontWeight: 'bold',
  },
  td: {
    textAlign: "center",
    cursor: "default",
    fontSize: "12px",
    padding: "21px 0",
  },
  idLink: {
    cursor: "pointer",
    color: COLORS.COLOR.BLACK,
    textDecoration: "underline",
  },
});
export default useStyles;
