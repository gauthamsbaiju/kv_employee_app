import baseApi from '../../services/index';
import { TagTypes } from '../../types';

export const editApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployee: builder.mutation({
      query: ({ id, body }) => ({
        url: `/employees/${id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: [TagTypes.EMP_LIST]
    })
  })
});

export const { useEditEmployeeMutation } = editApi;
