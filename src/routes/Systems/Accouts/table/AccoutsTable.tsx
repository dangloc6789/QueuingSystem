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
const handleClick = (e: React.MouseEvent) => {
  const target: Element = e.target as Element
  const currenTarget: Element = e.currentTarget
  const globalClick = () => {
    currenTarget.children[0].classList.toggle(`${styles.More}`)
    if (!currenTarget.children[0].classList.contains(`${styles.More}`)) {
      window.removeEventListener("click", globalClick)
    }
  }
  if (target === currenTarget.children[1] && !currenTarget.children[0].classList.contains(`${styles.More}`)) {
    window.addEventListener("click", globalClick)
  }
}
const tableColumn = [
  {
    title: 'Tên đăng nhập',
    dataIndex: 'Account',
  },
  {
    title: 'Họ tên',
    dataIndex: 'UserName',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'PhoneNumber',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
  },
  {
    title: 'Vai trò',
    dataIndex: 'Role',
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
  {
    title: '',
    dataIndex: 'Update',
    render: (text: string, {Account}: any) => {
      return <Link to={`AccoutUpdate/${Account}`}  style={{ textDecoration: "underline" }}>{text}</Link>
    }
  },
]
export default tableColumn
