import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1 className="main-title">ReactJS Date Counter by Aldy Rizky Putra</h1>
      <div className="container">
        <DateCounter />
      </div>
    </div>
  );
}

function DateCounter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const dateNow = new Date();
  dateNow.setDate(dateNow.getDate() + count);
  return (
    <div className="date-counter">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        <span>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} days ago is `
            : `${count} days from today is `}
        </span>
        <span className="show-date">{dateNow.toDateString()}</span>
      </div>
    </div>
  );
}
