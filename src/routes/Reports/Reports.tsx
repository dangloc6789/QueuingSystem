import React, { useEffect, useRef, useState } from 'react'
import SelectC, { Option } from '../../components/SelectC/SelectC';
import TableC from '../../components/TableC/TableC';
import styles from "./styles.module.css";
import tableColumn from './table/ReportTable';
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import DatePickerC from '../../components/DatePickerC/DatePickerC';
export default function Reports() {
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.report)
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

  //Filter data
  const [DeviceType, setWorkingStateFilter] = useState<DeviceType>("Tất cả")
  const [ConnectStatusType, setConnectStatusType] = useState<ConnectStatusType>("Tất cả")

  const dataAfterFirstFilter = state.data.filter((item) => {
    if (DeviceType === "Tất cả") {
      return true
    } else return item.DeviceType === DeviceType
  })

  const dataAfterSecondFilter = dataAfterFirstFilter.filter((item) => {
    if (ConnectStatusType === "Tất cả") {
      return true
    } else return item.ConnectStatus === ConnectStatusType
  })

  return (
    <>
    <div className={styles.number} style={{paddingRight: "2rem"}}>
      <div>Danh sách thiết bị</div>
      <div style={{ display: "flex" }}>
        <div className={styles.select_c}>
        <DatePickerC label="Chọn ngày" />
        </div>
        <div className={styles.select_c}>
        <DatePickerC label="Chọn ngày" />
        </div>
      </div>
      <br />
      <div ref={ref}>
        <TableC
          columns={tableColumn}
          dataSource={dataAfterSecondFilter}
          pagination={{ total: 100, showSizeChanger: false }}
        />
      </div>
    </div>
    <div ref={addRef} className={styles.Add} onClick={()=> {navigate("NumberAdd")}}><AiFillPlusSquare/><span>Tải về</span></div>
    </>
  )
}
type DeviceType = "Kiosk" | "Hệ thống" | "Tất cả"
type ConnectStatusType = "Đang chờ" | "Đã sử dụng" | "Tất cả" | "Bỏ qua"
