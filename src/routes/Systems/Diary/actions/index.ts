import { createAsyncThunk } from "@reduxjs/toolkit"
import DiaryReducer, { diaryType } from "../reducer/DiaryReducer"

const getAccout = createAsyncThunk("diary/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<diaryType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((DiaryReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateAccout = createAsyncThunk("diary/update", async (formdata: diaryType) => {
  //fake put data
  const promise:Promise<diaryType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addAccout = createAsyncThunk("diary/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<diaryType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getAccout, updateAccout,addAccout}