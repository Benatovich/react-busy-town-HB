import TrafficLight from './TrafficLight';
import { render, screen } from '@testing-library/react';

test('if light is green, div has className "on"', () => {
  const green = 'green';
    
  render(<TrafficLight color={green} />);

  const greenDiv = screen.getByTitle('green');
  expect(greenDiv.className).toBe('green circle on');
});