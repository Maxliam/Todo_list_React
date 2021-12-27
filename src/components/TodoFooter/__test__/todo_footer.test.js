import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

test('To Add title to each page', () => {
render(<TodoFooter numberOfIncompleteTasks={5}/>);
const paragrahElement = screen.getByText(/5 task left/i);
expect(paragrahElement).toBeInTheDocument();
});