import { addEmployee, editEmployee } from '../employeeActions';
import { createReducer } from '@reduxjs/toolkit';
import Employee from '../types';

const initialState = [
  {
    id: 1,
    name: 'Abc',
    joiningDate: '13/05/2015',
    experience: 20,
    isActive: true,
    role: 'user',
    department: 'Frontend',
    address: {
      house: 'bcdfg',
      address_line_1: 'Edac3fdg453dsvhira',
      address_line_2: 'Kakdfgkasdv34535nad'
      // city: 'Ernaku34sdgv53lam',
      // state: 'Goa',
      // country: 'Isvndia',
      // pincode: '00112300000'
    }
  },
  {
    id: 2,
    name: 'Abc',
    joiningDate: '13/05/2015',
    experience: 20,
    isActive: false,
    role: 'user',
    department: 'Frontend',
    address: {
      house: 'bcdfg',
      address_line_1: 'Edac3fdg453dsvhira',
      address_line_2: 'Kakdfgkasdv34535nad'
      // city: 'Ernaku34sdgv53lam',
      // state: 'Goa',
      // country: 'Isvndia',
      // pincode: '00112300000'
    }
  },
  {
    id: 3,
    name: 'Abc',
    joiningDate: '13/05/2015',
    experience: 20,
    isActive: true,
    role: 'user',
    department: 'Frontend',
    address: {
      house: 'bcdfg',
      address_line_1: 'Edac3fdg453dsvhira',
      address_line_2: 'Kakdfgkasdv34535nad'
      // city: 'Ernaku34sdgv53lam',
      // state: 'Goa',
      // country: 'Isvndia',
      // pincode: '00112300000'
    }
  },
  {
    id: 4,
    name: 'Xyz',
    joiningDate: '21/08/2016',
    experience: 9,
    isActive: true,
    role: 'user',
    department: 'Backend',
    address: {
      house: '8D',
      address_line_1: 'sdf',
      address_line_2: 'sdfqwe'
      // city: 'Ernaku34sdgv53lam',
      // state: 'Goa',
      // country: 'Isvndia',
      // pincode: '00112300000'
    }
  }
] as Array<Employee>;

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    console.log('action: ', action);
    state = [...state, action.payload];

    return state;
  });
  builder.addCase(editEmployee, (state, action) => {
    console.log('action: ', action);
    const newState = state.map((item) => {
      if (item.id === +action.payload.id) return action.payload;
      else return item;
    });

    return newState;
  });
  // builder.addCase(deleteEmployee, (state, action) => {
  //   const newState = state.map((item) => {
  //     if (item.id !== +action.payload.id) return item;
  //   });

  //   return newState;
  // });
});

// const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       console.log(action.payload);

//       const newState = [...state, action.payload];

//       return newState;
//     }
//     case 'EMPLOYEE:DELETE': {
//       const newState = action.payload.employee;

//       return newState;
//     }
//     case 'EMPLOYEE:EDIT': {
//       const newState = state.map((item) => {
//         if (item.id === +action.payload.employee.id) return action.payload.employee;
//         else return item;
//       });

//       return newState;
//     }
//     default:
//       return state;
//   }
// };

export default employeeReducer;
