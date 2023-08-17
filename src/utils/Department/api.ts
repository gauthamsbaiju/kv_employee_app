import baseApi from '../../services/index';
import { Department } from '../../types';

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query<{ data: Department[] }, void>({
      query: () => ({
        url: '/departments'
      })
    })
  })
});

export const { useGetDepartmentListQuery } = departmentApi;
