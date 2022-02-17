import React, { useState } from 'react';
import App from '/App';

<App/>;

export default function TruckButton() {
  const [traffic, setTraffic] = useState(['car', 'bus']);

  function handleAddTruck() {
    setTraffic([...traffic, 'truck']);
  }

  return (
    <button onClick={handleAddTruck}>Truck</button>
  );
}
