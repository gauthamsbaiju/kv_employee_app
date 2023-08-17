import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducer/employeeReducer';
import employeeService from './services';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [employeeService.reducerPath]: employeeService.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), employeeService.middleware]
});

export default store;
