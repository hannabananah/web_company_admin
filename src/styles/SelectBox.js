import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {},
});

export const formControlSX = {
  "&.MuiFormControl-root": {
    height: "100%",
    width: "170px",
    border: "1px solid #D1D1D1",
    borderRadius: "8px",
    overflow: "hidden",
    boxSizing: "border-box",
    background: "#fff",
  },
  "& .MuiInputBase-root": {},
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select.MuiSelect-outlined": {
    lineHeight: "35px",
    padding: "0 40px 0 14px",
  },
};
