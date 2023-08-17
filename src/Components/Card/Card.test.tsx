import { render, screen } from '@testing-library/react';
import Card, { CardPropsType } from './Card';
import '@testing-library/jest-dom';

describe('Test for employee details card', () => {
  //   test('Test for card rendered', () => {
  //     const CardProps: CardPropsType = {
  //       emp: {
  //         id: 1,
  //         name: 'Abc',
  //         joiningDate: '12/12/12',
  //         experience: 4,
  //         isActive: true,
  //         role: 'user'
  //       }
  //     };

  //     render(<Card {...CardProps}></Card>);
  //     const element = screen.getByTestId('card-test');

  //     if (element)
  //       expect(element).toHaveAttribute('emp', {
  //         id: 1,
  //         name: 'Abc',
  //         joiningDate: '12/12/12',
  //         experience: 4,
  //         isActive: true,
  //         role: 'user'
  //       });
  //   });

  test('If snapshot rendered', () => {
    const CardProps: CardPropsType = {
      emp: {
        id: 1,
        name: 'Abc',
        joiningDate: '12/12/12',
        experience: 4,
        isActive: true,
        role: 'user'
      }
    };

    render(<Card {...CardProps} />);
    const element = screen.getByTestId('card-test');

    expect(element).toMatchSnapshot();
  });
});
