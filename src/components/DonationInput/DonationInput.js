import React, { useState } from "react";
import styles from "./DonationInput.module";

function DonationInput({ amount, onChange, onSubmit }) {
  const [error, setError] = useState("");

  const handleError = () => {
    setError("Amount is too low");
  };

  return (
    <div className={styles.errorContainer}>
      {error && <p className={styles.errorText}>{error}</p>}
      <div className={styles.container}>
        <p className={styles.dollarSign}>$</p>
        <input
          className={styles.donationInput}
          value={amount > 0 ? amount : ""}
          type="number"
          onChange={(target) => {
            setError("");
            onChange(target);
          }}
        />
        <button
          className={styles.donationButton}
          onClick={() => onSubmit(handleError)}
          type="submit"
        >
          Give Now
        </button>
      </div>
    </div>
  );
}

export default DonationInput;
