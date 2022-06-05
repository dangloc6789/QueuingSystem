import styles from "./../../styles.module.css";
import ButtonC from "../../../../components/ButtinC/ButtonC";
import InputC from "../../../../components/InputC/InputC";
import { Controller ,useForm} from "react-hook-form";
import SelectC, { Option, tagRender } from '../../../../components/SelectC/SelectC';
import { useNavigate } from "react-router-dom";
import CheckBox from "../../../../components/CheckBox/CheckBox";


export default function ServicesAdd() {
  const navigate = useNavigate()
  const { handleSubmit, control, formState: { errors } ,getValues  } = useForm({
    // mode: "onTouched",
    defaultValues: {
      DeviceCode: "",
      DeviceName: "",
      DeviceType: "",
      UserName: "",
      IPAddress: "",
      Password: "",
      ServiceUsed: undefined,
    },
   
  });
  const onSubmit = (formdata: ReturnType<typeof getValues>) => {
    
  };

    return (
        <>
        <div className={styles.device}>
          <div>Quản lý thiết bị</div>
          <div className={styles.updateContain}>
            <div>Thông tin dịch vụ</div>
            <form id="DeviceForm" onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.body__input}>
                <div className={styles.left__input}>
                <Controller
                name="DeviceCode"
                control={control}
                render={({ field: { onChange, value } }) =>
                  <InputC type="text" placeholder='Nhập mã dịch vụ' id='DeviceCode' onChange={onChange} value={value} errors={errors.DeviceCode?.message}>Mã dịch vụ: </InputC>}
                  />
                   <Controller
                name="DeviceName"
                control={control}
                render={({ field: { onChange, value } }) =>
                  <InputC type="text" placeholder='Nhập tên thiết bị' id='DeviceName' onChange={onChange} value={value} errors={errors.DeviceName?.message}>Tên thiết bị: </InputC>}
              />
                </div>
                <div className={styles.right__input}>
                <Controller
                name="DeviceName"
                control={control}
                render={({ field: { onChange, value } }) =>
                  <InputC type="text" placeholder='Mô tả dịch vụ' id='DeviceName' className={styles.height__119} onChange={onChange} value={value} errors={errors.DeviceName?.message}>Mô tả: </InputC>}
              />
                </div>
                
             </div>
            </form>
            <div className={styles.title__main}>Quy tắc cấp số</div>
            <div className={styles.quy__tac}>
              <div className={styles.quy__tac_left}>
              <CheckBox label="Tăng tự động từ" id="tangtudong"/>
              <CheckBox label="Prefix:" id="tangtudong"/>
              <CheckBox label="Surfix" id="tangtudong"/>
              <CheckBox label="Reset mỗi ngày" id="tangtudong"/>
              </div>
              <div className={styles.quy__tac_right}>
                <div className={styles.from__to}>
                  <InputC type="text" id='DeviceName' className={styles.width__100} value="001"></InputC>
                  <label htmlFor="" className={styles.input__main__label}>đến</label>
                  <InputC type="text" id='DeviceName' className={styles.width__100} value="001"></InputC>
                </div>
                <InputC type="text" id='DeviceName' className={styles.width__100} value="001"></InputC>
                <InputC type="text" id='DeviceName' className={styles.width__100} value="001"></InputC>
              </div>
            </div>
            <br />
            <p style={{color: "#535261", fontSize: "0.875rem"}} ><span style={{color: "red"}}>*</span>Là trường thông tin bắt buộc</p>
          </div>
          <div className="buttonHolder">
          <ButtonC invert onClick={()=> navigate("..")}>Hủy bỏ</ButtonC>
          <ButtonC form='DeviceForm' type='submit'>Thêm dịch vụ</ButtonC>
          </div>
        </div>
      </>
    )
}