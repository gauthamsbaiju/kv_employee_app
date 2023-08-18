import React from 'react';
import Button, { ButtonPropsType } from './Button';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('If Button works properly', () => {
  test('If label rendered correctly', () => {
    const ButtonProps: ButtonPropsType = {
      label: 'Button',
      type: 'submit'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    if (element) expect(element).toHaveTextContent('Button');
  });
  test('If snapshot rendered', () => {
    const ButtonProps: ButtonPropsType = {
      label: 'Button',
      type: 'submit'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element).toMatchSnapshot();
  });
  test('If type is correct', () => {
    const ButtonProps: ButtonPropsType = {
      label: 'Button',
      type: 'submit'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    if (element) expect(element).toHaveAttribute('type', 'submit');
  });

  test('If onClick is triggered', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropsType = {
      label: 'Button',
      type: 'submit',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });
});
