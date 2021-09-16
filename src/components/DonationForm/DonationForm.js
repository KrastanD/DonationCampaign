import React, { useState } from "react";
import DonationInput from "../DonationInput/DonationInput";
import styles from "./DonationForm.module";
import ProgressBar from "../ProgressBar/ProgressBar";

function DonationForm({ goal, total, onTotalChange }) {
  const [donors, setDonors] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    onTotalChange(total + amount);
    setAmount(0);
    setDonors(donors + 1);
  };

  const handleChange = (event) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <div className={styles.container}>
      <ProgressBar total={total} goal={goal} />
      <div>
        <h1>Only four days left to fund this project</h1>
        <p>
          Join the <strong>{donors}</strong> other donors who have already
          supported this project
        </p>
      </div>
      <DonationInput
        amount={amount}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default DonationForm;
