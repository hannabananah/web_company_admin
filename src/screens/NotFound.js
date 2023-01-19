import React from "react";
import { useNavigate } from "react-router-dom";
import images from "~/assets/js/Images";
import useStyles from "~/styles/NotFound";

const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <img src={images.SVG_NOTOUND} className={classes.img} alt="not found" />
        <div className={classes.text}>
          <h2>Oops..</h2>
          <p>We can't find that page</p>
          <button
            className={classes.goBackBtn}
            onClick={() => {
              navigate("/");
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
