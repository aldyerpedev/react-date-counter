import { useState } from 'react';

export default function App() {
  return (
    <div>
      <h1 className='main-title'>ReactJS Date Counter by Aldy Rizky Putra</h1>
      <div className='container'>
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

  function resetDate() {
    setStep(0);
    setCount(0);
  }
  return (
    <div className='date-counter'>
      <div className='step-counter'>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div className='input-counter'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type='number'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div className='show-date'>
        <span>
          {count === 0
            ? 'Today is '
            : count < 0
            ? `${Math.abs(count)} days ago is `
            : `${count} days from today is `}
        </span>
        <span>{dateNow.toDateString()}</span>
      </div>

      <div className='reset-date'>
        <button onClick={resetDate}>Reset Date</button>
      </div>
    </div>
  );
}
