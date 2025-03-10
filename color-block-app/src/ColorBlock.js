import React, { useState, useEffect } from 'react';
import './ColorBlock.css';

function ColorBlock() {
  const [color, setColor] = useState('red');

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  };

  useEffect(() => {
    console.log(`Поточний колір: ${color}`);
  }, [color]);

  return (
    <div className="color-container">
      <div className="color-block" style={{ backgroundColor: color }}></div>
      <button className="color-button" onClick={toggleColor}>Змінити колір</button>
    </div>
  );
}

export default ColorBlock;
