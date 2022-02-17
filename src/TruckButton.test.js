import { render, screen, fireEvent } from '@testing-library/react';
import TruckButton from './TruckButton';

// TruckButton: <button onClick={handleAddTruck}>Truck</button>


test('add 🚚 to traffic array', () => {
  render(<TruckButton />);

  const buttonElement = screen.getByRole('button');
  
  fireEvent.click(buttonElement); 
  
  const trafficArray = screen.getAllByRole('heading')

  expect(buttonElement).toBeInTheDocument();
});




