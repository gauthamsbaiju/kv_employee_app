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

export const deleteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteEmployee: builder.mutation<{ data: Employee[] }, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [TagTypes.EMP_LIST]
    })
  })
});

export const { useDeleteEmployeeMutation } = deleteApi;
