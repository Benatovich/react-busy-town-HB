import { render, screen } from '@testing-library/react';
import App from './App';

test('red', () => {
  render(<App />);
  const linkElement = screen.getByText(/red/i);
  expect(linkElement).toBeInTheDocument();
});
