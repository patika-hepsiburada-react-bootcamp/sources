import { useState } from 'react';

import { sendMessage } from '../socketApi';

function ColorPalette({ activeColor }) {
  const [color, setColor] = useState(activeColor);

  const handleSave = () => {
    sendMessage('new-color', color);
  };

  console.log(color);

  return (
    <div className="controls">
      <input type="color" value={activeColor} onChange={(e) => setColor(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ColorPalette;
