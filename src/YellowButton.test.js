import { render, screen, fireEvent } from '@testing-library/react';
import YellowButton from './YellowButton';

// test two pieces of user interaction: monster size buttons, light color buttons, or traffic buttons
// 1: <button onClick={() => setLightColor('yellow')}>Yellow</button>

test('LightColor turns yellow', () => {
  render(<YellowButton />);

  const buttonElement = screen.getByRole('button');
  
  fireEvent.click(buttonElement); 

  expect(buttonElement).toBeInTheDocument();
});




// 2: <button onClick={handleAddTruck}>Truck</button>
