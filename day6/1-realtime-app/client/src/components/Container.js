import { useEffect, useState } from 'react';
import { connectSocket, subscribeToNewColors } from '../socketApi';
import ColorPalette from './ColorPalette';

function Container() {
  const [activeColor, setActiveColor] = useState('#FFFFFF');

  useEffect(() => {
    connectSocket();

    subscribeToNewColors((color) => {
      console.log(color);
      setActiveColor(color);
    });
  }, []);

  return (
    <div className="container" style={{ backgroundColor: activeColor }}>
      <ColorPalette activeColor={activeColor} />
    </div>
  );
}

export default Container;
