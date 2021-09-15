import React, { useState } from "react";

function DonationForm({ goal, total, onTotalChange }) {
  const COLOR_MINT = "#19cca3";
  const COLOR_LIGHT_MINT = "#b6f2e4";

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
    <div
      style={{
        width: "400px",
        border: "1px solid",
        borderColor: "#111",
        boxShadow: "1px 1px 5px 1px #cacaca",
        borderColor: "#fff",
        borderRadius: "5px",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
          backgroundColor: COLOR_LIGHT_MINT,
          height: "10px",
          width: "462px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
          backgroundColor: COLOR_MINT,
          height: "10px",
          width: total / goal < 1 ? (total / goal) * 462 + "px" : "462px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: total >= goal ? "5px" : "0px",
        }}
      />
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          Only four days left to fund this project
        </h1>
        <p
          style={{
            fontWeight: "normal",
            fontFamily: "sans-serif",
            color: "#555555",
          }}
        >
          Join the <strong style={{ color: "black" }}>{donors}</strong> other
          donors who have already supported this project
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <p
          style={{
            position: "absolute",
            left: "5px",
            bottom: "-4px",
            color: "#555555",
          }}
        >
          $
        </p>
        <input
          style={{
            height: "40px",
            flex: 1,
            padding: "0",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            border: "1px solid",
            borderRight: "none",
            borderColor: "#cacaca",
            paddingLeft: "15px",
            fontSize: "20px",
          }}
          value={amount > 0 ? amount : ""}
          type="number"
          min="1.00"
          onChange={handleChange}
        />
        <button
          style={{
            height: "42px",
            width: "100px",
            fontFamily: "sans-serif",
            color: "white",
            backgroundColor: COLOR_MINT,
            border: "none",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
          onClick={handleSubmit}
          type="submit"
        >
          Give Now
        </button>
      </div>
    </div>
  );
}

export default DonationForm;
