import baseApi from '../../services/index';

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
      })
    })
  })
});

export const { useGetEmployeeListQuery } = employeeApi;
