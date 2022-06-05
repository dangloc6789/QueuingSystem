import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./../styles.module.css";
const style = {
  IconRed: {
    backgroundColor: "red",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  IconGreen: {
    backgroundColor: "green",
    borderRadius: "50%",
    minWidth: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem"
  },
  Ellipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  Click: {
    color: "#1890ff",
    textDecoration: "underline",
    cursor: "pointer"
  }
}
const tableColumnDetail = [
  {
    title: 'Số thứ tự',
    dataIndex: 'ServiceCode',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'WorkingState',
    render: (state: "Ngưng hoạt động" | "Hoạt động") => {
      if (state === "Ngưng hoạt động") {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconRed}></span><span>{state}</span></div>
      } else {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={style.IconGreen}></span><span>{state}</span></div>
      }
    }
  },
]
export default tableColumnDetail