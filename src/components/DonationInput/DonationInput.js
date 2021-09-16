import React from "react";
import styles from "./DonationInput.module";

function DonationInput({ amount, onChange, onSubmit }) {
  return (
    <div className={styles.container}>
      <p>$</p>
      <input
        className={styles.input}
        value={amount > 0 ? amount : ""}
        type="number"
        min="1.00"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onSubmit} type="submit">
        Give Now
      </button>
    </div>
  );
}

export default DonationInput;
