import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  tableStyle: {
    // border: "1px solid #ccc",
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
    color: "#000",
    textDecoration: "underline",
  },
});
export default useStyles;
