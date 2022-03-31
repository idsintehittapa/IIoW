import { render, screen } from '@testing-library/react';
import { LandingPage } from './pages/LandingPage';

test('renders learn react link', () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/Intellectual Influence/i);
  expect(linkElement).toBeInTheDocument();
});
