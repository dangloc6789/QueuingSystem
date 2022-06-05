import styles from "./styles.module.css";
import { Controller } from "react-hook-form";
import InputC from "../../../../components/InputC/InputC";
import ButtonC from "../../../../components/ButtinC/ButtonC";
import CheckBox from "../../../../components/CheckBox/CheckBox";

export default function AddRoles() {
  return (
    <>
      <div className={styles.device} style={{ paddingRight: "2rem" }}>
        <div>Quản lý thiết bị</div>
        <div className={styles.detailContain} >
          <div>Thông tin vai trò</div>
          <div className={styles.main__role}>
            <div className={styles.left__role}>
              <Controller
                name="DeviceCode"

                render={({ field: { onChange, value } }) =>
                  <InputC type="text" placeholder='Nhập tên vai trò' id='DeviceCode' onChange={onChange} value={value} >Nhập tên vai trò: </InputC>}
              />
              <Controller
                name="DeviceName"

                render={({ field: { onChange, value } }) =>
                  <InputC type="text" placeholder='Mô tả' id='DeviceName' className={styles.height__119} onChange={onChange} value={value} >Mô tả: </InputC>}
              />
              <br />
              <p style={{ color: "#535261", fontSize: "0.875rem" }} ><span style={{ color: "red" }}>*</span>Là trường thông tin bắt buộc</p>
            </div>
            <div className={styles.right__role}>
              <p style={{ color: "#535261", fontSize: "0.875rem", fontWeight: 600 }} ><span style={{ color: "red" }}>*</span>Là trường thông tin bắt buộc</p>
              <div className={styles.main__right}>
                <div className={styles.title__main}>
                  Nhóm chức năng A
                </div>
                <div className={styles.form__check}>
                  <CheckBox label="Tăng tự động từ" id="tangtudong" />
                  <label htmlFor="">Chuc Nang X</label>
                </div>
              </div>
            </div>

          </div>
          <div className="buttonHolder">
            <ButtonC invert >Hủy bỏ</ButtonC>
            <ButtonC form='DeviceForm' type='submit'>Cập nhật dịch vụ</ButtonC>
          </div>

        </div>
      </div>

    </>
  )
}