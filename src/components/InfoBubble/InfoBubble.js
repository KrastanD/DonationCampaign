import React from "react";
import styles from "./InfoBubble.module";

const InfoBubble = ({ goal, total }) => {
  const goalNotReached = goal > total;
  return (
    <div className={styles.container}>
      {goalNotReached ? (
        <p className={styles.bubbleText}>
          <sup className={styles.super}>$</sup>
          <strong>{goal - total}</strong> still needed to fund this project
        </p>
      ) : (
        <p>
          Hooray, this project is funded! <sup>$</sup>
          <strong>{total} </strong>
          so far!
        </p>
      )}
      <p className={styles.caret} />
    </div>
  );
};

export default InfoBubble;
