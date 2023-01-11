import { useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import images from "~/assets/js/Images";

const AddAppNotification = ({ backState }) => {
  const classes = useStyles();

  return (
    <figure className={classes.userAccContainer}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>앱 인트로 공지 등록</h2>
      </section>
      <div className={classes.submitBtns}>
        <button onClick={backState} className={classes.backBtn}>
          이전
        </button>
        <input type="submit" value="저장" className={classes.saveBtn} />
      </div>
    </figure>
  );
};
export default AddAppNotification;
