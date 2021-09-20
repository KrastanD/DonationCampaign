import React, { useState } from "react";
import DonationInput from "../DonationInput/DonationInput";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./DonationForm.module";

interface DonationFormProps {
  goal: number;
  total: number;
  onTotalChange: (props: number) => void;
}

function DonationForm({ goal, total, onTotalChange }: DonationFormProps) {
  const [donors, setDonors] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleSubmit = (errorCallback: () => void) => {
    if (amount >= 5) {
      onTotalChange(total + amount);
      setAmount(0);
      setDonors(donors + 1);
      return;
    }
    errorCallback();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <div className={styles.container}>
      <ProgressBar total={total} goal={goal} />
      <div>
        <h2 className={styles.title}>
          Only four days left to fund this project
        </h2>
        <p className={styles.text}>
          Join the <strong className={styles.bold}>{donors}</strong> other
          donors who have already supported this project
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
