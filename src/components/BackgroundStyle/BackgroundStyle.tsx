import React, { useEffect, useState } from 'react';
import './BackgroundStyle.scss';

const BackgroundStyle: React.FC = ({ children }) => {
  const [color, setColor] = useState('rgb(255, 255, 255)');
  const [luminosity, setLuminosity] = useState(255);

  useEffect(() => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const luminosity = Math.round(((red * 299) + (green * 587) + (blue * 114)) / 1000);
    const color = `rgb(${red},${green},${blue})`;

    setColor(color);
    setLuminosity(luminosity);
  }, []);

  return (
    <div className={`background-style ${ luminosity <= 125 ? 'too-dark' : 'too-light' }`}
      style={{
        backgroundColor: color
      }}>
      { children }
    </div>
  );
}

export default BackgroundStyle;
