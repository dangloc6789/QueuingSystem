import React from 'react';
import { DatePicker } from 'antd';
import styles from "./styles.module.css"

export default function DatePickerC({label}:propsType) {
  return <div>
    <label htmlFor="" className={styles.label__picker}>{label}</label>
    <DatePicker className={styles.custom__picker} />
  </div>;
}
type propsType = {
  label:String
}
