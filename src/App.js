// import { useState } from "react";
import "./styles.css";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      How much was the bill?
      <input id="bill" type="text" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select id="rating">
        <option value="0">It was bad (0%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return (
    <h3 class="tip-message">
      You pay ${82 + 10} (${75 + 5} + ${10 + 2} tip)
    </h3>
  );
}

function Reset() {
  return <button>Reset</button>;
}
