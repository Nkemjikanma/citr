import { useState, useRef } from "react";
export const UseRef = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");

  const amountRef = useRef();
  const currencyRef = useRef();

  const currencies = ["USD", "GBP", "NGN"];

  const amountClick = () => {
    console.log(amountRef.current);
    amountRef.current.style.borderRadius = "5px";
  };
  const currencyClick = () => {
    console.log(currencyRef.current);
  };
  return (
    <>
      <input
        ref={amountRef}
        value={amount}
        type="number"
        style={{ borderRadius: "20px" }}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        ref={currencyRef}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option />
        {currencies.map((curr) => (
          <option key={curr}>{curr}</option>
        ))}
      </select>

      <h2>The value is: {amount}</h2>

      <button onClick={() => amountClick()}>Rupees</button>
      <button onClick={() => currencyClick()}>Dollar</button>
    </>
  );
};
