import baseApi from '../../services/index';
import Employee, { TagTypes } from '../../types';

// interface Employee {
//   name: string;
//   joiningDate: string;
//   role: string;
//   status: string;
//   experience: string;
//   address: string;
//   idProof: string;
//   id: number;
// }

// type createType = {
//   name: string;
//   username: string;
//   password: string;
//   joiningDate: string;
//   experience: number;
//   isActive: boolean;
//   role: string;
//   departmentId: number;
//   address: {
//     address_line_1: string;
//     address_line_2: string;
//     city: string;
//     state: string;
//     country: string;
//     pincode: string;
//   };
// };

export const createApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: [TagTypes.EMP_LIST]
    })
  })
});

export const { useCreateEmployeeMutation } = createApi;
