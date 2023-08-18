import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Test for header component', () => {
  test('Test for rendered snapshot', () => {
    render(<Header />);
    const element = screen.getByTestId('header-test');

    expect(element).toMatchSnapshot();
  });

  test('Test for rendered elements', () => {
    render(<Header />);
    const element = screen.getByTestId('header-test');

    expect(element).toBeInTheDocument();
  });
});
