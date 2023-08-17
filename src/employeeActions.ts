import { createAction } from '@reduxjs/toolkit';
import Employee from './types';

// type addEmployeeType = {
//   id: number;
//   name: string;
//   joiningDate: string;
//   experience: number;
//   isActive: boolean;
//   role: string;
//   department: string;
//   address: {
//     house: string;
//     address_line_1: string;
//     address_line_2: string;
//   };
// };

// type editEmployeeType = {
//   id: number;
//   name: string;
//   joiningDate: string;
//   experience: number;
//   isActive: boolean;
//   role: string;
//   department: string;
//   address: {
//     house: string;
//     address_line_1: string;
//     address_line_2: string;
//   };
// };

// type deleteEmployeeType = {
//   id: number;
// };

export const addEmployee = createAction<Employee>('EMPLOYEE:CREATE');
export const editEmployee = createAction<Employee>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<Employee>('EMPLOYEE:EDIT');
