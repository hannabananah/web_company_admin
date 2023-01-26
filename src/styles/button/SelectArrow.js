import { makeStyles } from "@mui/styles";
import { COLORS } from "~/assets/colors/colors";

export const useStyles = makeStyles({
  root: {
    width: "40px",
    background: "#fff",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%",
    pointerEvents: "none",
    cursor: "pointer",
    borderLeft: `1px solid ${COLORS.COLOR.PLACEHOLDER_GRAY}`,
  },
  expandSelect: {
    filter:
      "invert(100%) sepia(0%) saturate(0%) hue-rotate(194deg) brightness(108%) contrast(102%)",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "rotate(90deg) translate(-50%,-50%)",
    transformOrigin: "0% 0%",
  },
});
