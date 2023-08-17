import baseApi from '../../services/index';

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

type loginType = { username: string; password: string };

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: loginType) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation } = loginApi;
