import { createSlice } from "@reduxjs/toolkit"
import {getRole, updateRole,addRole} from "../actions"

const tableData:Array<RoleType> = [
  {
    key: 1,
    RoleName: 'Kế toán',
    UserNumber: 6,
    Describe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    Update: "Cập nhập",
  },
  {
    key: 2,
    RoleName: 'Bác sĩ',
    UserNumber: 6,
    Describe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    Update: "Cập nhập",
  },
  {
    key: 3,
    RoleName: 'Lễ tân',
    UserNumber: 6,
    Describe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    Update: "Cập nhập",
  },
  {
    key: 4,
    RoleName: 'Quản lý',
    UserNumber: 6,
    Describe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    Update: "Cập nhập",
  },
  {
    key: 5,
    RoleName: 'Admin',
    UserNumber: 6,
    Describe: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    Update: "Cập nhập",
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const RolesReducer = createSlice({
  name: "accouts",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(getRole.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    })
    .addCase(getRole.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
    .addCase(getRole.rejected, (state) => {
      state.isLoading = true;
      state.error = "Error"
    })
    .addCase(updateRole.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data.forEach((item,index) => {
        if (item.RoleName === action.payload.RoleName) {
          state.data[index] = {...action.payload}
        } 
      })
    })
    .addCase(addRole.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
    })
  }
})
export default RolesReducer
export type {RoleType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<RoleType>
}
type RoleType = {
  key: number,
  RoleName:string,
  UserNumber: number,
  Describe: string,
  Update:string,
}