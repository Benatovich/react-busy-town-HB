import { useState } from 'react';

export default function Vehicle(props) {
  // const [traffic, setTraffic] = useState(['car', 'truck']);

  // function handleAddBus() {
  //   setTraffic([...traffic, 'bus']);
  // }

  return <div title={props.vehicle} className={props.vehicle}>
    {/* the Vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {props.vehicle === 'car' && '🚗'}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {props.vehicle === 'truck' && '🚚'}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {props.vehicle === 'bus' && '🚌'}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    {props.vehicle === 'motorcycle' && '🏍️'}
    {/* <button onClick={handleAddBus}>Bus</button> */}
  </div>;
}