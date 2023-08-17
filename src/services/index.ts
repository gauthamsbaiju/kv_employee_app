import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TagTypes } from '../types';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('AuthToken');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      console.log(headers);

      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: [TagTypes.EMP_LIST]
});

export default baseApi;
