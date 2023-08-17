type Address = {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};

type Employee = {
  name: string;
  username: string;
  password: string;
  joiningDate: string;
  experience: number;
  isActive: boolean;
  role: string;
  departmentId: string;
  address: Address;
};

export type Department = {
  id: string;
  name: string;
};

export enum TagTypes {
  EMP_LIST = 'EMP_LIST'
}

export enum Role {
  admin = 'admin',
  user = 'user'
}

export default Employee;
