import { makeStyles } from "@mui/styles";
// import useStyles from "~/styles/SearchInput";

const SearchInput = ({ handleNameChange }) => {
  const classes = useStyles();

  return <input className={classes.root} onChange={handleNameChange} />;
};
export default SearchInput;

const useStyles = makeStyles({
  root: {
    border: "1px solid #D1D1D1",
    lineHeight: "35px",
    borderRadius: "8px",
    height: "35px",
    padding: "0 20px",
    width: "100%",
    maxWidth: "170px",
    boxSizing: "border-box",
    "&:focus": {
      outline: "none",
    },
  },
});
