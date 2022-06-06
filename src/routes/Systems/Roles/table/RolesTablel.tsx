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
    title: 'Tên vai trò',
    dataIndex: 'RoleName',
  },
  {
    title: 'Số người dùng',
    dataIndex: 'UserNumber',
  },
  {
    title: 'Mô tả',
    dataIndex: 'Describe',
  },
  {
    title: 'Cập nhật ',
    dataIndex: 'Update',
    render: (text: string, {ProductID}: any) => {
      return <Link to={`AddRole`}  style={{ textDecoration: "underline" }}>{text}</Link>
    }
  },
]
export default tableColumn
