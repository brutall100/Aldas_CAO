import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(50);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 5)}>+5</button>
        </div>
    );
}

export default Counter;
