import baseApi from '../../services/index';
import { Role } from '../../types';

export const roleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoleList: builder.query<{ data: [Role] }, void>({
      query: () => ({
        url: '/roles'
      })
    })
  })
});

export const { useGetRoleListQuery } = roleApi;
