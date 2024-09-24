import { useState } from 'react';

const InputField = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <p>{input}</p>
        </div>
    );
}

export default InputField;