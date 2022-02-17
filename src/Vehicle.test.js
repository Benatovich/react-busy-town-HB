import Vehicle from './Vehicle';
import { render, screen, fireEvent } from '@testing-library/react';

test('if bus button has been pressed, div has className "bus"', () => {
  const bus = 'bus';

  render(<Vehicle vehicle={bus} />);
    
  const busDiv = screen.getByTitle('bus');
  expect(busDiv.className).toBe('bus');
});


