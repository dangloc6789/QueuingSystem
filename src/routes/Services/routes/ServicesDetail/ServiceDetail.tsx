import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hook";
import styles from "./../../styles.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import TableC from "../../../../components/TableC/TableC";
import tableColumn from "../../table/ServiceTable";
import tableColumnDetail from "../../table/TableDetail";
import InputC from "../../../../components/InputC/InputC";
import SelectC from "../../../../components/SelectC/SelectC";
import { Option } from "../../../../components/SelectC/SelectC";
import DatePickerC from "../../../../components/DatePickerC/DatePickerC";
import { Icon } from "@iconify/react";

export default function ServiceDetail() {
  let param = useParams();
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.device);
  const data = state.data.filter((item) => {
    return item.ProductID.toString() == param.ProductID;
  });
  //Xu ly vi tri them thiet bi
  const ref = useRef<HTMLDivElement>(null);
  const addRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && addRef.current) {
      const domRect = ref.current.getBoundingClientRect();
      addRef.current.style.top = `${domRect.y + ref.current.scrollTop}px`;
      addRef.current.style.display = "flex";
    }
  }, []);
  const [WorkingStateFilter, setWorkingStateFilter] =
    useState<WorkingStateType>("Tất cả");
  const [ConnectStatusType, setConnectStatusType] =
    useState<ConnectStatusType>("Tất cả");
  const dataAfterFirstFilter = state.data.filter((item) => {
    if (WorkingStateFilter === "Tất cả") {
      return true;
    } else return item.WorkingState === WorkingStateFilter;
  });
  const dataAfterSecondFilter = dataAfterFirstFilter.filter((item) => {
    if (ConnectStatusType === "Tất cả") {
      return true;
    } else return item.ConnectStatus === ConnectStatusType;
  });
  return (
    <>
      <div className={styles.device} style={{ paddingRight: "2rem" }}>
        <div>Quản lý dịch vụ</div>
        <div className={styles.main__detail}>
          <div
            className={styles.detailContain}
            style={{ width: "40%" }}
            ref={ref}
          >
            <div>Thông tin thiết bị</div>
            <div>
              <div className={styles.detail__box}>
                <span className={styles.detail__title}>Mã thiết bị: </span>201
              </div>
              <div className={styles.detail__box}>
                <span className={styles.detail__title}>Tên dịch vụ: </span>Khám
                tim mạch
              </div>
              <div className={styles.detail__box}>
                <span className={styles.detail__title}>Mô tả: </span>Chuyên các
                bệnh lý về tim
              </div>
            </div>
            <div className={styles.title__main}>Quy tắc cấp số</div>
            <div className={styles.quy__tac}>
              <div
                className={styles.quy__tac_left}
                style={{
                  width: "30%",
                }}
              >
                <div className={styles.detail__box}>
                  <span
                    className={styles.detail__title}
                    style={{ width: "120px" }}
                  >
                    Tăng tự động:{" "}
                  </span>
                </div>
                <div className={styles.detail__box}>
                  <span
                    className={styles.detail__title}
                    style={{ marginTop: "20px" }}
                  >
                    Prefix:
                  </span>
                </div>
                <div className={styles.detail__box}>
                  <span
                    className={styles.detail__title}
                    style={{ marginTop: "20px", width: "120px" }}
                  >
                    Reset mỗi ngày:
                  </span>
                  <span
                    style={{
                      marginTop: "5px",
                      width: "120px",
                      display: "inline-block",
                    }}
                  >
                    Ví dụ: 201-2001
                  </span>
                </div>
              </div>
              <div className={styles.quy__tac_right}>
                <div className={styles.from__to}>
                  <InputC
                    type="text"
                    id="DeviceName"
                    className={styles.width__100}
                    value="001"
                  ></InputC>
                  <label htmlFor="" className={styles.input__main__label}>
                    đến
                  </label>
                  <InputC
                    type="text"
                    id="DeviceName"
                    className={styles.width__100}
                    value="001"
                  ></InputC>
                </div>
                <InputC
                  type="text"
                  id="DeviceName"
                  className={styles.width__100}
                  value="001"
                ></InputC>
              </div>
            </div>
          </div>
          <div className={styles.left__table}>
            <div className={`${styles.dinhcao}`}>
              <div className={styles.custom__select}>
                <div className={styles.select_c}>
                  <SelectC
                    onChange={(value) => {
                      setWorkingStateFilter(
                        (Wstate) => (Wstate = value as WorkingStateType)
                      );
                    }}
                    label="Trạng thái"
                    defaultValue="Tất cả"
                    style={{ width: "9rem" }}
                  >
                    <Option value="Tất cả">Tất cả</Option>
                    <Option value="Hoạt động">Hoạt động</Option>
                    <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
                  </SelectC>
                </div>

                <div className={styles.select_c}>
                  <DatePickerC label="Chọn thời gian" />
                </div>
                <div className={styles.select_c}>
                  <Icon
                    icon="ant-design:arrow-right-outlined"
                    style={{ marginTop: "40px" }}
                  />
                </div>
                <div className={styles.select_c}>
                  <DatePickerC label=" ." />
                </div>
                <div className={styles.select_c}>
                  <InputC
                    type="text"
                    id="DeviceName"
                    className={styles.margin_t_10}
                  ></InputC>
                </div>
              </div>
              <br />
              <TableC
                columns={tableColumnDetail}
                dataSource={dataAfterSecondFilter}
                pagination={{ total: 100, showSizeChanger: false }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={addRef}
        className={styles.Add}
        onClick={() => {
          navigate(`/Device/DeviceUpdate/${param.ProductID}`);
        }}
      >
        <AiFillPlusSquare />
        <span>Cập nhập thiết bị</span>
      </div>
    </>
  );
}
type WorkingStateType = "Hoạt động" | "Ngưng hoạt động" | "Tất cả";
type ConnectStatusType = "Mất kết nối" | "Kết nối" | "Tất cả";
