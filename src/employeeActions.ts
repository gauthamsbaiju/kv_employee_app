import { createAction } from '@reduxjs/toolkit';

type addEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  experience: number;
  isActive: boolean;
  role: string;
  department: string;
  address: {
    house: string;
    address_line_1: string;
    address_line_2: string;
  };
};

type editEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  experience: number;
  isActive: boolean;
  role: string;
  department: string;
  address: {
    house: string;
    address_line_1: string;
    address_line_2: string;
  };
};

type deleteEmployeeType = {
  id: number;
};

export const addEmployee = createAction<addEmployeeType>('EMPLOYEE:CREATE');
export const editEmployee = createAction<editEmployeeType>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<deleteEmployeeType>('EMPLOYEE:EDIT');
