import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "./styles.module.css";
import TableC from '../../../components/TableC/TableC';
import { useEffect, useState, useRef } from 'react';
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import tableColumn from './table/RolesTablel';

export default function Roles() {
  const navigate = useNavigate()
  const location = useLocation()
    //Xu ly vi tri them thiet bi
    const ref = useRef<HTMLDivElement>(null)
    const addRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if(ref.current && addRef.current) {
        const domRect  = ref.current.getBoundingClientRect()
        addRef.current.style.top = `${domRect.y + ref.current.scrollTop }px`
        addRef.current.style.display = "flex"
      }
    }, [])
  
  return (
    <>
    <div className={styles.device} style={{paddingRight: "2rem"}}>
      <div>Danh sách thiết bị</div>
     
      <br />
      <div ref={ref}>
        <TableC
          columns={tableColumn}
          
          pagination={{ total: 100, showSizeChanger: false }}
        />
      </div>
    </div>
    <div ref={addRef} className={styles.Add} onClick={()=> {navigate("AddRole")}}><AiFillPlusSquare/><span>Thêm thiết bị</span></div>
    </>
  )
}
