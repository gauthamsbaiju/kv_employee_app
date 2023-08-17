import Status, { StatusPropsType } from './Status';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test for status', () => {
  test('Test for status value', () => {
    const StatusProps: StatusPropsType = {
      value: true
    };

    render(<Status {...StatusProps} />);
    const element = screen.getByTestId('status-test');

    if (element) expect(element).toHaveTextContent('active');
  });

  test('Test for snapshot rendered', () => {
    const StatusProps: StatusPropsType = {
      value: true
    };

    render(<Status {...StatusProps} />);
    const element = screen.getByTestId('status-test');

    expect(element).toMatchSnapshot();
  });
});
