import { createAsyncThunk } from "@reduxjs/toolkit"
import RolesReducer, { RoleType } from "../reducer/RolesReducer"

const getRole = createAsyncThunk("roles/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<RoleType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((RolesReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateRole = createAsyncThunk("role/update", async (formdata: RoleType) => {
  //fake put data
  const promise:Promise<RoleType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addRole = createAsyncThunk("role/add", async (formdata: any) => {
  //fake ...
  const promise:Promise<RoleType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getRole, updateRole,addRole}