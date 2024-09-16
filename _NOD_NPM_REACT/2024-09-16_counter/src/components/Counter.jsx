import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(5);

  const changeCount = (value) => {
    setCount((prevCount) => {
      const newCount = prevCount + value;
      if (newCount > 10) return 10;
      if (newCount < 0) return 0;
      return newCount;
    });
  };

  return (
    <div>
      <p style={{color: count < 5 ? 'red' : 'blue'}}>Count: {count}</p>
      <button onClick={() => changeCount(1)} disabled={count >= 10}>+1</button>
      <button onClick={() => changeCount(2)} disabled={count >= 10}>+2</button>
      <button onClick={() => changeCount(5)} disabled={count >= 10}>+5</button>
      <button onClick={() => changeCount(-1)} disabled={count <= 0}>-1</button>
      <button onClick={() => changeCount(-2)} disabled={count <= 0}>-2</button>
      <button onClick={() => changeCount(-5)} disabled={count <= 0}>-5</button>
      <button onClick={() => setCount(5)}>Reset</button>
    </div>
  );
};

export default Counter;

  

  