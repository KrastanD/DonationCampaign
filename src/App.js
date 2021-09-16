import React, { useState } from "react";
import InfoBubble from "./components/InfoBubble/InfoBubble";
import DonationForm from "./components/DonationForm/DonationForm";
import styles from "./App.module";

const App = () => {
  const goal = 5000;
  const [total, setTotal] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        <InfoBubble goal={goal} total={total} />
        <DonationForm goal={goal} total={total} onTotalChange={setTotal} />
      </div>
    </div>
  );
};

export default App;
