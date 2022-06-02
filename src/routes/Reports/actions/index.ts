import { createAsyncThunk } from "@reduxjs/toolkit"
import reportsReducer, { reportType } from "../reducer/reportsReducer"

const getReport = createAsyncThunk("report/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<reportType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((reportsReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateReport = createAsyncThunk("report/update", async (formdata: reportType) => {
  //fake put data
  const promise:Promise<reportType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addReport = createAsyncThunk("report/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<reportType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getReport, updateReport,addReport}