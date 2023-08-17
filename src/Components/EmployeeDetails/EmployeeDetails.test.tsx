import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeDetails, { EmpPropsType } from './EmployeeDetails';

describe('Test for employee details component', () => {
  test('Test for label rendered', () => {
    const EmpProps: EmpPropsType = {
      lable: 'Name',
      value: 'Abc',
      type: 'text'
    };

    render(<EmployeeDetails {...EmpProps} />);
    const element = screen.getByTestId('employeeDetailsLabel-test');

    if (element) expect(element).toHaveTextContent('Name');
  });

  test('Test for snapshot of label rendered', () => {
    const EmpProps: EmpPropsType = {
      lable: 'Name',
      value: 'Abc',
      type: 'text'
    };

    render(<EmployeeDetails {...EmpProps} />);
    const element = screen.getByTestId('employeeDetailsLabel-test');

    expect(element).toMatchSnapshot();
  });

  test('Test for snapshot of data rendered', () => {
    const EmpProps: EmpPropsType = {
      lable: 'Name',
      value: 'Abc',
      type: 'text'
    };

    render(<EmployeeDetails {...EmpProps} />);
    const element = screen.getByTestId('employeeDetailsValue-test');

    expect(element).toMatchSnapshot();
  });

  test('Test for value of employee detail rendered', () => {
    const EmpProps: EmpPropsType = {
      lable: 'Name',
      value: 'Abc',
      type: 'text'
    };

    render(<EmployeeDetails {...EmpProps} />);
    const element = screen.getByTestId('employeeDetailsValue-test');

    expect(element).toHaveTextContent('Abc');
  });
});
