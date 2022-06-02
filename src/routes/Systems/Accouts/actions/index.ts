import { createAsyncThunk } from "@reduxjs/toolkit"
import accoutReducer, { accoutType } from "../reducer/accoutReducer"

const getAccout = createAsyncThunk("device/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<accoutType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((accoutReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateAccout = createAsyncThunk("device/update", async (formdata: accoutType) => {
  //fake put data
  const promise:Promise<accoutType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addAccout = createAsyncThunk("device/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<accoutType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getAccout, updateAccout,addAccout}