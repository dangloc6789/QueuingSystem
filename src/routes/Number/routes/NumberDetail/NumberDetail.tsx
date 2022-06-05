import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hook'
import styles from "./../../number.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
export default function DeviceDetail() {
  let param = useParams()
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.device)
  const data = state.data.filter((item) => {
    return item.ProductID.toString() == param.ProductID
  })
    //Xu ly vi tri them thiet bi
    const ref = useRef<HTMLDivElement>(null)
    const addRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if(ref.current && addRef.current) {
        const domRect  = ref.current.getBoundingClientRect()
        addRef.current.style.top = `${domRect.y + ref.current.scrollTop }px`
        addRef.current.style.display = "flex"
      }
    },[])
  return (
    <>
      <div className={styles.device} style={{paddingRight: "2rem"}}>
        <div>Quản lý thiết bị</div>
        <div className={styles.detailContain} ref={ref}>
          <div>Thông tin thiết bị</div>
          <div className={styles.detail} >
            <div><span>Họ tên:</span>Nguyễn Thị Dung</div>
            <div><span>Nguồn cấp:</span>Kiosk</div>
            <div><span>Tên dịch vụ:</span>Khám tim mạch</div>
            <div><span>Trạng thái:</span>Đang chờ</div>
            <div><span>Số thứ tự:</span>2001201</div>
            <div><span>Số điện thoại:</span>0948523623</div>
            <div><span>Thời gian cấp:</span>14:35 - 07/11/2021</div>
            <div><span>Địa chỉ Email:</span>nguyendung@gmail.com</div>
            <div><span>Hạn sử dụng:</span>18:00 - 07/11/2021</div>
          </div>
        </div>
      </div>
      <div ref={addRef} className={styles.Add} onClick={()=> {navigate(`/Device/DeviceUpdate/${param.ProductID}`)}}><AiFillPlusSquare/><span>Quay lại</span></div>
    </>
  )
}
