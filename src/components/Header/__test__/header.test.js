import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('To Add title to each page', () => {
  render(<Header title={"Hello World"} />);
  const headingElement = screen.getByText(/Hello World/i);
  expect(headingElement).toBeInTheDocument();
});

test('To Add title to each page', () => {
    render(<Header title={"Hello World"} />);
    const headingElement = screen.getByRole(/heading/i);
    expect(headingElement).toBeInTheDocument();
  });

test('To Add title to each page', () => {
    render(<Header title={"Hello World"} />);
    const headingElement = screen.queryByText(/Hello hello World/i);
    expect(headingElement).not.toBeInTheDocument();
  });