import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        text="How did you like the service? "
        percentage={percentage1}
        onSelect={setPercentage1}
      />
      <SelectPercentage
        text="How did your friend like the service? "
        percentage={percentage2}
        onSelect={setPercentage2}
      />
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ text, percentage, onSelect }) {
  return (
    <div>
      <label>{text}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h1>
        You will pay ${bill + tip} (${bill} + {tip} tip)
      </h1>
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
