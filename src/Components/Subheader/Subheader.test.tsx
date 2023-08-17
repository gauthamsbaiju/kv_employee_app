import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Subheader, { SubheaderPropsType } from './Subheader';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('Test for subheader component', () => {
  test('Test for title rendered', () => {
    const SubheaderProps: SubheaderPropsType = {
      title: 'Subheader',
      filter: true,
      button: true,
      text: 'Subheader',
      type: 'Edit'
    };

    render(<Subheader {...SubheaderProps} />);
    const element = screen.getByTestId('subheaderTitle-test');

    if (element) expect(element).toHaveTextContent('Subheader');
  });

  //   test('Test for text rendered', () => {
  //     const SubheaderProps: SubheaderPropsType = {
  //       title: 'Subheader',
  //       filter: true,
  //       button: true,
  //       text: 'Subheader',
  //       type: 'Edit'
  //     };

  //     render(<Subheader {...SubheaderProps} />);
  //     const element = screen.getByTestId('subheaderText-test');

  //     if (element) expect(element).toHaveTextContent('Subheader');
  //   });

  //   test('Test for input type', () => {
  //     const SubheaderProps: SubheaderPropsType = {
  //       title: 'Subheader',
  //       filter: true,
  //       button: true,
  //       text: 'Subheader',
  //       type: 'Edit'
  //     };

  //     render(<Subheader {...SubheaderProps} />);
  //     const element = screen.getByTestId('subheaderFilter-test');

  //     expect(element.children).toHaveAttribute('filter', true);
  //   });

  //   test('Test for input type', () => {
  //     const SubheaderProps: SubheaderPropsType = {
  //       title: 'Subheader',
  //       filter: true,
  //       button: true,
  //       text: 'Subheader',
  //       type: 'Edit'
  //     };

  //     render(<Subheader {...SubheaderProps} />);
  //     const element = screen.getByTestId('subheaderFilter-test');

  //     expect(element).toHaveAttribute('button', true);
  //   });

  //   test('Test for input placeholder', () => {
  //     const InputProps: InputPropsType = {
  //       lable: 'Input',
  //       placeholder: 'Input',
  //       type: 'text'
  //     };

  //     render(<Input {...InputProps} />);
  //     const element = screen.getByTestId('input-test');

  //     expect(element).toHaveAttribute('placeholder', 'Input');
  //   });

  //   test('Test for on change', () => {
  //     const onChange = jest.fn();
  //     const InputProps: InputPropsType = {
  //       lable: 'Input',
  //       placeholder: 'Input',
  //       type: 'text',
  //       onChange
  //     };

  //     render(<Input {...InputProps} />);
  //     const element = screen.getByTestId('input-test');

  //     fireEvent.change(element);
  //     expect(onChange).toBeCalled;
  //   });

  test('Test for snapshot rendered', () => {
    const SubheaderProps: SubheaderPropsType = {
      title: 'Subheader',
      filter: true,
      button: true,
      text: 'Subheader',
      type: 'Edit'
    };

    render(<Subheader {...SubheaderProps} />);
    const element = screen.getByTestId('subheader-test');

    expect(element).toMatchSnapshot();
  });
});
