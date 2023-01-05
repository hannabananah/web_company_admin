import React from 'react';
import useStyles from "~/styles/NotFound";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <h1>Oops..</h1>
        <p>We can't find that page</p>
        <button onClick={()=>{navigate('/')}}>Go back</button>
      </div>
    </div>
  );
}

export default NotFound;