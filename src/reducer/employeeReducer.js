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
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload.employee];

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      const newState = action.payload.employee;

      return newState;
    }
    case 'EMPLOYEE:EDIT': {
      const newState = action.payload.employee;

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
