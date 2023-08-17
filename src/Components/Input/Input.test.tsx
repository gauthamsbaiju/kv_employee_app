import { fireEvent, render, screen } from '@testing-library/react';
import Input, { InputPropsType } from './Input';
import '@testing-library/jest-dom';

describe('Test for input component', () => {
  test('Test for label rendered', () => {
    const InputProps: InputPropsType = {
      lable: 'Input',
      placeholder: 'Input',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('label-test');

    if (element) expect(element).toHaveTextContent('Input');
  });

  test('Test for snapshot rendered', () => {
    const InputProps: InputPropsType = {
      lable: 'Input',
      placeholder: 'Input',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element).toMatchSnapshot();
  });

  test('Test for input type', () => {
    const InputProps: InputPropsType = {
      lable: 'Input',
      placeholder: 'Input',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element).toHaveAttribute('type', 'text');
  });

  test('Test for input placeholder', () => {
    const InputProps: InputPropsType = {
      lable: 'Input',
      placeholder: 'Input',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element).toHaveAttribute('placeholder', 'Input');
  });

  test('Test for on change', () => {
    const onChange = jest.fn();
    const InputProps: InputPropsType = {
      lable: 'Input',
      placeholder: 'Input',
      type: 'text',
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    fireEvent.change(element);
    expect(onChange).toBeCalled;
  });
});
