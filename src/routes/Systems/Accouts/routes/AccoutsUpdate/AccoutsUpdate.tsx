import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hook'
import styles from "./../../styles.module.css";
import InputC from '../../../../../components/InputC/InputC';
import SelectC, { Option, tagRender } from '../../../../../components/SelectC/SelectC';
import ButtonC from '../../../../../components/ButtinC/ButtonC';
import { addAccout } from '../../actions';
const schema = yup.object({
  DeviceCode: yup.string(),
  DeviceName: yup.string(),
  UserName: yup.string(),
});
export default function AccoutUpdate() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { handleSubmit, control, formState: { errors } ,getValues  } = useForm({
    // mode: "onTouched",
    defaultValues: {
        UserName: "",
        Account: "",
        PhoneNumber: "",
        Password: "",
        Email: "",
        RePass: "",
        Role: "",
        WorkingState:"",
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (formdata: ReturnType<typeof getValues>) => {
    dispatch(addAccout(formdata)).then(()=>{navigate("/Accouts")})
  };
  return (
    <>
      <div className={styles.accout}>
        <div>Quản lý tài khoản</div>
        <div className={styles.updateContain}>
          <div>Thông tin thiết bị</div>
          <form id="DeviceForm" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="UserName"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Họ tên' id='UserName' onChange={onChange} value={value} errors={errors.UserName?.message}>Mã thiết bị: </InputC>}
            />
            <Controller
              name="Account"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Tên đăng nhập' id='Account' onChange={onChange} value={value} errors={errors.Account?.message}>Tên thiết bị: </InputC>}
            />
            <Controller
              name="PhoneNumber"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Số điện thoại' id='PhoneNumber' onChange={onChange} value={value} errors={errors.PhoneNumber?.message}>Tên thiết bị: </InputC>}
            />
            <Controller
              name="Password"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Mật khẩu' id='Password' onChange={onChange} value={value} errors={errors.Password?.message}>Tên đăng nhập: </InputC>}
            />
            <Controller
              name="Email"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Email' id='Email' onChange={onChange} value={value} errors={errors.Email?.message}>Địa chỉ IP: </InputC>}
            />
            <Controller
              name="RePass"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Nhập lại mật khẩu' id='RePass' onChange={onChange} value={value} errors={errors.RePass?.message}>Mật khẩu: </InputC>}
            />
            <Controller
              name="Role"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Vai trò' id='Role' onChange={onChange} value={value} errors={errors.Role?.message}>Mật khẩu: </InputC>}
            />
            <Controller
              name="WorkingState"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" placeholder='Tình trạng' id='WorkingState' onChange={onChange} value={value} errors={errors.WorkingState?.message}>Mật khẩu: </InputC>}
            />
          </form>
          <br />
          <p style={{color: "#535261", fontSize: "0.875rem"}} ><span style={{color: "red"}}>*</span>Là trường thông tin bắt buộc</p>
        </div>
        <div className="buttonHolder">
        <ButtonC invert onClick={()=> navigate("..")}>Hủy bỏ</ButtonC>
        <ButtonC form='DeviceForm' type='submit'>Cập nhật</ButtonC>
        </div>
      </div>
    </>
  )
}
