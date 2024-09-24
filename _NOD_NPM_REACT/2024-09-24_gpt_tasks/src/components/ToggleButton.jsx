import { useState } from 'react';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
        </div>
    );
}

export default ToggleButton;