import baseApi from '../../services/index';
import Employee from '../../types';

// interface Employee {
//   name: string;
//   joiningDate: string;
//   role: string;
//   status: string;
//   experience: number;
//   address: string;
//   idProof: string;
//   id: number;
//   isActive: boolean;
// }

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query<{ data: Employee[] }, string>({
      query: (id) => ({
        url: `/employees/${id}`
      })
    })
  })
});

export const { useGetEmployeeByIdQuery } = employeeApi;
