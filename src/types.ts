type Employee = {
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

export default Employee;
