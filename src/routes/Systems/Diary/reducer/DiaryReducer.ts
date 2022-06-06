import { createSlice } from "@reduxjs/toolkit"
import {getAccout, updateAccout,addAccout} from "../actions"

const tableData:Array<diaryType> = [
  {
    key: 1,
    UserName: "tuyetnguyen@12",
    Time: "01/12/2021 15:12:17",
    IP: "192.168.3.1",
    Action: "Cập nhật thông tin dịch vụ DV_01",
  },
  {
    key: 2,
    UserName: "tuyetnguyen@12",
    Time: "01/12/2021 15:12:17",
    IP: "192.168.3.1",
    Action: "Cập nhật thông tin dịch vụ DV_01",
  },
  {
    key: 3,
    UserName: "tuyetnguyen@12",
    Time: "01/12/2021 15:12:17",
    IP: "192.168.3.1",
    Action: "Cập nhật thông tin dịch vụ DV_01",
  },
  {
    key: 4,
    UserName: "tuyetnguyen@12",
    Time: "01/12/2021 15:12:17",
    IP: "192.168.3.1",
    Action: "Cập nhật thông tin dịch vụ DV_01",
  },
  {
    key: 5,
    UserName: "tuyetnguyen@12",
    Time: "01/12/2021 15:12:17",
    IP: "192.168.3.1",
    Action: "Cập nhật thông tin dịch vụ DV_01",
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const DiaryReducer = createSlice({
  name: "diary",
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
        if (item.UserName === action.payload.UserName) {
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
export default DiaryReducer
export type {diaryType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<diaryType>
}
type diaryType = {
  key: number,
  UserName: string,
  Time: string,
  IP: string,
  Action:string,
}