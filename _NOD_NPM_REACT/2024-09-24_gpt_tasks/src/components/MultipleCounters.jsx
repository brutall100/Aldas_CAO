import { useState } from 'react';

const MultipleCounters = () => {
    const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(10);

    return (
        <div>
        <h2>Counter A: {counterA}</h2>
        <button onClick={() => setCounterA(counterA + 1)}>Increment Counter 1</button>
        <button onClick={() => setCounterA(counterA - 1)}>Decrement Counter 1</button>
    
        <h2>Counter B: {counterB}</h2>
        <button onClick={() => setCounterB(counterB + 1)}>Increment Counter 2</button>
        <button onClick={() => setCounterB(counterB - 1)}>Decrement Counter 2</button>
        </div>
    );

}

export default MultipleCounters;