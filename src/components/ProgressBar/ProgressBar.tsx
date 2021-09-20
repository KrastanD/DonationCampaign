import React from "react";
import styles from "./ProgressBar.module";

interface ProgressBarProps {
  total: number;
  goal: number;
}

const ProgressBar = ({ total, goal }: ProgressBarProps) => {
  return (
    <>
      <div className={styles.backgroundBar} />
      <div
        className={[
          styles.filledBar,
          total >= goal ? styles.filled : styles.unfilled,
        ].join(" ")}
        style={{
          width:
            total / goal < 1
              ? Math.round((total / goal) * 462) + "px"
              : "462px",
        }}
      />
    </>
  );
};

export default ProgressBar;
