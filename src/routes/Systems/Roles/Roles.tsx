import React, { useEffect, useRef, useState } from 'react'
import SelectC, { Option } from '../../../components/SelectC/SelectC';
import TableC from '../../../components/TableC/TableC';
import styles from "./styles.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hook';
import tableColumn from './table/RolesTablel';

export default function Roles() {
  const navigate = useNavigate()
  const state = useAppSelector((state) => state.roles)
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
  const [WorkingStateFilter, setWorkingStateFilter] = useState<RoleType>("Tất cả")
  const dataAfterFirstFilter = state.data.filter((item) => {
    if (WorkingStateFilter === "Tất cả") {
      return true
    } else return item.RoleName === WorkingStateFilter
  })
  return (
    <>
      <div className={styles.accouts} style={{ paddingRight: "2rem" }}>
        <div>Danh sách vai trò</div>
        <div>
          <div className='select'>
            <SelectC
              onChange={(value) => { setWorkingStateFilter((Wstate) => Wstate = value as RoleType) }}
              label='Tên vai trò'
              defaultValue="Tất cả"
              style={{ width: "14rem" }}>
              <Option value="Tất cả">Tất cả</Option>
              <Option value="Kế toán">Kế toán</Option>
              <Option value="Quản lý">Quản lý</Option>
              <Option value="Admin">Admin</Option>
              <Option value="Lễ tân">Lễ tân</Option>
              <Option value="Bác sĩ">Bác sĩ</Option>
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
      <div ref={addRef} className={styles.Add} onClick={() => { navigate("AddRoles") }}><AiFillPlusSquare /><span>Thêm vai trò</span></div>
    </>
  )
}
type RoleType = "Kế toán" | "Quản lý" | "Admin" | "Lễ tân" | "Bác sĩ" | "Tất cả"