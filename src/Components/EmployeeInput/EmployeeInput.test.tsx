import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import EmployeeInput, { EmpInputPropsType } from './EmployeeInput';

describe('Test for employee input component', () => {
  test('Test for employee input label rendered', () => {
    const onChange = jest.fn();
    const EmpInputProps: EmpInputPropsType = {
      lable: ' Emp Input',
      placeholder: 'Emp Input',
      type: 'text',
      options: ['active', 'inactive'],
      onChange
    };

    render(<EmployeeInput {...EmpInputProps} />);
    const element = screen.getByTestId('EmpDetailslabel-test');

    if (element) expect(element).toHaveTextContent('Emp Input');
  });

  test('Test for snapshot rendered', () => {
    const onChange = jest.fn();
    const EmpInputProps: EmpInputPropsType = {
      lable: ' Emp Input',
      placeholder: 'Emp Input',
      type: 'text',
      options: ['active', 'inactive'],
      onChange
    };

    render(<EmployeeInput {...EmpInputProps} />);
    const element = screen.getByTestId('EmpDetails-test');

    expect(element).toMatchSnapshot();
  });

  test('Test for employee input type', () => {
    const onChange = jest.fn();
    const EmpInputProps: EmpInputPropsType = {
      lable: ' Emp Input',
      placeholder: 'Emp Input',
      type: 'text',
      options: ['active', 'inactive'],
      onChange
    };

    render(<EmployeeInput {...EmpInputProps} />);
    const element = screen.getByTestId('EmpDetailsProps-test');

    expect(element).toHaveAttribute('type', 'text');
  });

  test('Test for employee input placeholder', () => {
    const onChange = jest.fn();
    const EmpInputProps: EmpInputPropsType = {
      lable: ' Emp Input',
      placeholder: 'Emp Input',
      type: 'text',
      options: ['active', 'inactive'],
      onChange
    };

    render(<EmployeeInput {...EmpInputProps} />);
    const element = screen.getByTestId('EmpDetailsProps-test');

    expect(element).toHaveAttribute('placeholder', 'Emp Input');
  });

  //   test('Test for employee input options', () => {
  //     const onChange = jest.fn();
  //     const EmpInputProps: EmpInputPropsType = {
  //       lable: ' Emp Input',
  //       placeholder: 'Emp Input',
  //       type: 'text',
  //       options: ['active', 'inactive'],
  //       onChange
  //     };

  //     render(<EmployeeInput {...EmpInputProps} />);
  //     const element = screen.getByTestId('EmpDetailsProps-test');

  //     expect(element).toHaveAttribute('options', ['active', 'inactive']);
  //   });

  test('Test for on change', () => {
    const onChange = jest.fn();
    const EmpInputProps: EmpInputPropsType = {
      lable: ' Emp Input',
      placeholder: 'Emp Input',
      type: 'text',
      options: ['active', 'inactive'],
      onChange
    };

    render(<EmployeeInput {...EmpInputProps} />);
    const element = screen.getByTestId('EmpDetailsProps-test');

    fireEvent.change(element);
    expect(onChange).toBeCalled;
  });
});
