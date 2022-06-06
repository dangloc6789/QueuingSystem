import React, { useEffect, useRef, useState } from 'react'
import SelectC, { Option } from '../../../components/SelectC/SelectC';
import TableC from '../../../components/TableC/TableC';
import styles from "./styles.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hook';
import tableColumn from './table/DiaryTable';

export default function Diary() {
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.diary)
  //Xu ly vi tri them thiet bi
  const ref = useRef<HTMLDivElement>(null)
  const addRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current && addRef.current) {
      const domRect = ref.current.getBoundingClientRect()
      addRef.current.style.top = `${domRect.y + ref.current.scrollTop}px`
      addRef.current.style.display = "flex"
    }
  }, [])
  //Filter data
  const [WorkingStateFilter, setWorkingStateFilter] = useState<NameType>("Tất cả")
  const dataAfterFirstFilter = state.data.filter((item) => {
    if (WorkingStateFilter === "Tất cả") {
      return true
    } else return item.UserName === WorkingStateFilter
  })
  return (
    <>
      <div className={styles.accouts} style={{ paddingRight: "2rem" }}>
        <div>
          <div className='select'>
            <SelectC
              onChange={(value) => { setWorkingStateFilter((Wstate) => Wstate = value as NameType) }}
              label='Tên vai trò'
              defaultValue="Tất cả"
              style={{ width: "14rem" }}>
              <Option value="Tất cả">Tất cả</Option>
              <Option value="tuyetnguyen@12">tuyetnguyen@12</Option>
            </SelectC>
          </div>
          <div className='select'>
          </div>
        </div>
        <br />
        <div ref={ref}>
          <TableC
            columns={tableColumn}
            dataSource={dataAfterFirstFilter}
            pagination={{ total: 100, showSizeChanger: false }}
          />
        </div>
      </div>
    </>
  )
}
type NameType = "tuyetnguyen@12" | "Quản lý" | "Admin" | "Tất cả"