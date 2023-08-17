import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: '/employees/list',
        method: 'GET'
      })
    }),
    updateEmployees: builder.mutation({
      query: () => ({
        url: '',
        method: 'POST'
      })
    })
  })
});

export default employeeService;
export const { useGetEmployeesQuery, useLazyGetEmployeesQuery, useUpdateEmployeesMutation } =
  employeeService;
