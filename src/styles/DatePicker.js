import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    maxWidth: "190px",
    height: "100%",
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      position: "relative",
      padding: "0",
      height: "100%",
      borderRadius: "8px",
    },
  },
});

export const datepickerSX = {
  "& .MuiFormControl-root.MuiTextField-root": {
    height: "100%",
    background: "#fff",
  },
  "& .MuiInputBase-input": {
    padding: "0",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    color: COLORS.COLOR.BLACK,
    fontSize: "14px",
    height: "100%",
    padding: "11.5px 0",
  },
  "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "0",
    height: "100%",
    maxHeight: "100%",
  },
  "& .MuiIconButton-edgeEnd.MuiIconButton-sizeMedium": {
    borderRadius: "0",
    width: "100%",
    padding: "0",
    height: "100%",
    "& svg": {
      opacity: "0",
      visibility: "hidden",
    },
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${COLORS.STORKE.CONTENTS2}`,
    borderRadius: "8px",
  },
};
