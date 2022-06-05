import styles from "./../../styles.module.css";
import SelectC from "../../../../components/SelectC/SelectC";
import { Option } from "../../../../components/SelectC/SelectC";
import ButtonC from "../../../../components/ButtinC/ButtonC";


export default function NumberAdd() {
  return (
    <>
      <div className={styles.device} style={{ paddingRight: "2rem" }}>
        <div>Quản lý thiết bị</div>
        <div className={styles.detailContain}>
          <div className={styles.boxNumber}>
            <div className={styles.titleNumberAdd}>Thông tin thiết bị</div>
            <p className={styles.dv}>Dịch vụ khách hàng lựa chọn</p>
            <SelectC defaultValue="Tất cả" style={{ width: "14rem" }}>
              <Option value="Tất cả">Khám tim mạch</Option>
              <Option value="Hoạt động">Khám sản - Phụ khoa</Option>
              <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </SelectC>
            <div className="buttonHolder">
              <ButtonC invert>Hủy bỏ</ButtonC>
              <ButtonC form="DeviceForm" type="submit">
                In số
              </ButtonC>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
