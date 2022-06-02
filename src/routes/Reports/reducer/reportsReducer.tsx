import { createSlice } from "@reduxjs/toolkit"
import { getReport, updateReport, addReport } from "../actions"

const tableData:Array<reportType> = [
  {
    key: 1,
    STT: 2010001,
    ServiceUsed: "Khám tim mạch",
    GTime:"7:20 - 07/10/2021",
    ConnectStatus: "Đang chờ",
    DeviceType: "Kiosk",
  },
  {
    key: 2,
    STT: 2010002,
    ServiceUsed: "Răng hàm mặt",
    GTime:"7:20 - 07/10/2021",
    ConnectStatus: "Đã sử dụng",
    DeviceType: "Kiosk",
  },
  {
    key: 3,
    STT: 2010003,
    ServiceUsed: "Khám sản - phụ khoa",
    GTime:"7:20 - 07/10/2021",
    ConnectStatus: "Bỏ qua",
    DeviceType: "Hệ thống",
  },
  {
    key: 4,
    STT: 2010004,
    ServiceUsed: "Khám răng hàm mặt",
    GTime:"7:20 - 07/10/2021",
    ConnectStatus: "Đang chờ",
    DeviceType: "Hệ thống",
  },
  {
    key: 5,
    STT: 2010005,
    ServiceUsed: "Khám tai mũi họng",
    GTime:"7:20 - 07/10/2021",
    ConnectStatus: "Đã sử dụng",
    DeviceType: "Kiosk",
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const reportsReducer = createSlice({
  name: "device",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(getReport.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    })
    .addCase(getReport.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
    .addCase(getReport.rejected, (state) => {
      state.isLoading = true;
      state.error = "Error"
    })
    .addCase(addReport.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
    })
  }
})
export default reportsReducer
export type {reportType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<reportType>
}
type reportType = {
  key: number,
  STT: number,
  ServiceUsed: string,
  GTime:string,
  ConnectStatus:"Đang chờ" | "Đã sử dụng" | "Bỏ qua",
  DeviceType: "Kiosk" | "Hệ thống",
}