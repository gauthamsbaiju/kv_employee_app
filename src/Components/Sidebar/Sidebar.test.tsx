import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('Test for sidebar component', () => {
  test('Test for snapshot rendered', () => {
    render(<Sidebar />);
    const element = screen.getByTestId('sidebar-test');

    expect(element).toMatchSnapshot();
  });

  test('Test for rendered elements', () => {
    render(<Sidebar />);
    const element = screen.getByTestId('sidebar-test');

    expect(element).toMatchSnapshot();
  });
});
