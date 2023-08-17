import baseApi from '../../services/index';
import { TagTypes } from '../../types';

interface Employee {
  name: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
  address: string;
  idProof: string;
  id: number;
  isActive: boolean;
}

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: Employee[] }, void>({
      query: () => ({
        url: '/employees'
      }),
      providesTags: [TagTypes.EMP_LIST]
    })
  })
});

export const { useGetEmployeeListQuery } = employeeApi;
