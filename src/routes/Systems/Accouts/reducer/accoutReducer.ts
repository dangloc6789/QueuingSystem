import { createSlice } from "@reduxjs/toolkit"
import {getAccout, updateAccout,addAccout} from "../actions"

const tableData:Array<accoutType> = [
  {
    key: 1,
    Account: 'tuyetnguyen@12',
    UserName: "Nguyễn Văn A",
    PhoneNumber: 0919256712,
    Email: "tuyetnguyen123@gmail.com",
    Role: "",
    WorkingState: "Hoạt động",
    Update: "Cập nhập",
    Password: "CMS",
    RePass:""
  },
  {
    key: 2,
    Account: 'tuyetnguyen@10',
    UserName: "Nguyễn Văn B",
    PhoneNumber: 0919256712,
    Email: "tuyetnguyen123@gmail.com",
    Role: "Kế toán",
    WorkingState: "Hoạt động",
    Update: "Cập nhập",
    Password: "CMS",
    RePass:""
  },
  {
    key: 3,
    Account: 'tuyetnguyen@22',
    UserName: "Nguyễn Văn C",
    PhoneNumber: 0919256712,
    Email: "tuyetnguyen222@gmail.com",
    Role: "Kế toán",
    WorkingState: "Ngưng hoạt động",
    Update: "Cập nhập",
    Password: "CMS",
    RePass:""
  },
  {
    key: 4,
    Account: 'tuyetnguyen@18',
    UserName: "Nguyễn Văn D",
    PhoneNumber: 0919256712,
    Email: "tuyetnguyen232@gmail.com",
    Role: "Kế toán",
    WorkingState: "Hoạt động",
    Update: "Cập nhập",
    Password: "CMS",
    RePass:""
  },
  {
    key: 5,
    Account: 'tuyetnguyen@19',
    UserName: "Nguyễn Văn E",
    PhoneNumber: 0919256712,
    Email: "tuyetnguyen244@gmail.com",
    Role: "Kế toán",
    WorkingState: "Hoạt động",
    Update: "Cập nhập",
    Password: "CMS",
    RePass:""
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const accoutReducer = createSlice({
  name: "device",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(getAccout.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    })
    .addCase(getAccout.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
    .addCase(getAccout.rejected, (state) => {
      state.isLoading = true;
      state.error = "Error"
    })
    .addCase(updateAccout.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data.forEach((item,index) => {
        if (item.Account === action.payload.Account) {
          state.data[index] = {...action.payload}
        } 
      })
    })
    .addCase(addAccout.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
    })
  }
})
export default accoutReducer
export type {accoutType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<accoutType>
}
type accoutType = {
  key: number,
  Account:string,
  UserName: string,
  PhoneNumber: number,
  Email: string,
  Role:string,
  WorkingState: "Hoạt động" | "Ngưng hoạt động",
  Update: string,
  Password: string,
  RePass:string
}