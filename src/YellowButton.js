import React from 'react';
import { useState } from 'react';

export default function YellowButton() {
  const [lightColor, setLightColor] = useState('red');
  return (
    <button onClick={() => setLightColor('yellow')}>Yellow</button>
  );
}
