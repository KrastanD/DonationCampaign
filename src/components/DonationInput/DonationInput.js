import React from "react";
import styles from "./DonationInput.module";

function DonationInput({ amount, onChange, onSubmit }) {
  return (
    <div className={styles.container}>
      <p className={styles.dollarSign}>$</p>
      <input
        className={styles.donationInput}
        value={amount > 0 ? amount : ""}
        type="number"
        min="1.00"
        onChange={onChange}
      />
      <button
        className={styles.donationButton}
        onClick={onSubmit}
        type="submit"
      >
        Give Now
      </button>
    </div>
  );
}

export default DonationInput;
