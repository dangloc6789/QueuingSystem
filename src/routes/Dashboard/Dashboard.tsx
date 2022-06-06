import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "./styles.module.css";
import percen90 from "./../../images/percen90.png";
import percen76 from "./../../images/percen76.png";
import percen86 from "./../../images/percen86.png";
import iconsmalldevice from "./../../images/iconsmalldevice.png";
import iconsmallservice from "./../../images/iconsmallservice.png";
import iconsmallnumber from "./../../images/iconsmallnumber.png";
import DatePicker from "sassy-datepicker";
import iconblue from "./../../images/iconblue.png";
import icongreen from "./../../images/icongreen.png";
import iconorange from "./../../images/iconorange.png";
import iconred from "./../../images/iconred.png";
import iconup from "./../../images/iconup.png";
import icondown from "./../../images/icondown.png";
import iconselect  from "./../../images/iconselect.png";
import imgchart   from "./../../images/imgchart.png";
import icondropdown    from "./../../images/icondropdown.png";
export default function Dashboard() {
  const location = useLocation()
  return (
    <div>
      <div className={styles.contentMain}></div>

      <section className={styles.dashboardmain} id="dashboardmain">
        <div className={styles.dashboardmain_container}>
          <h2 className={styles.title}>Biểu đồ cấp số</h2>
          <div className={styles.dashboardmain_container_box}>
            <div className={styles.content}>
              <img src={iconblue} alt="" className={styles.imgicon} />
              <p className={styles.heading}>
                Số thứ tự <br></br> đã cấp
              </p>
            </div>
            <div className={styles.info}>
              <h4>4.221</h4>
              <p>
                <img src={iconup} alt="" className={styles.iconup} />
                <span>32.41%</span>
              </p>
            </div>
          </div>
          <div className={styles.dashboardmain_container_box}>
            <div className={styles.content}>
              <img src={icongreen} alt="" className={styles.imgicon} />
              <p className={styles.heading}>
                Số thứ tự <br></br> đã sử dụng
              </p>
            </div>
            <div className={styles.info}>
              <h4>3.721</h4>
              <p>
                <img src={icondown} alt="" className={styles.icondown} />
                <span>32.41%</span>
              </p>
            </div>
          </div>
          <div className={styles.dashboardmain_container_box}>
            <div className={styles.content}>
              <img src={iconorange} alt="" className={styles.imgicon} />
              <p className={styles.heading}>
                Số thứ tự <br></br> đang chờ
              </p>
            </div>
            <div className={styles.info}>
              <h4>468</h4>
              <p>
                <img src={iconup} alt="" className={styles.iconup} />
                <span>56.41%</span>
              </p>
            </div>
          </div>
          <div className={styles.dashboardmain_container_box}>
            <div className={styles.content}>
              <img src={iconred} alt="" className={styles.imgicon} />
              <p className={styles.heading}>
                Số thứ tự <br></br> đã bỏ qua
              </p>
            </div>
            <div className={styles.info}>
              <h4>32</h4>
              <p>
                <img src={icondown} alt="" className={styles.icondown} />
                <span>22.41%</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.dashboardDay}>
        <div className={styles.dashboardDay_container}>
          <div className={styles.dashboardDay_container_header}>
            <div className={styles.header_title}>
              <h2>Bảng thống kê theo ngày</h2>
              <p>Tháng 11/2021</p>
            </div>
            <div className={styles.header_followday}>
              <span>Xem theo</span>
              <div className={styles.dropdown}>
                <div className={styles.dropdown_select}>
                  <span className={styles.select}>Ngày</span>
                  <img src={icondropdown} alt="" />
                </div>
                <div className={styles.dropdown_list}>
                  <div className={styles.dropdown_list__item}>Ngày</div>
                  <div className={styles.dropdown_list__item}>Tuần</div>
                  <div className={styles.dropdown_list__item}>Tháng</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dashboardDay_container_content}>
            <div className={styles.dashboardDay_container_content_box}>
              <p>6000</p>
            </div>
            <div className={styles.dashboardDay_container_content_box}>
              <p>5000</p>
            </div>
            <div className={styles.dashboardDay_container_content_box}>
              <p>4000</p>
            </div>
            <div className={styles.dashboardDay_container_content_box}>
              <p>3000</p>
            </div>
            <div className={styles.dashboardDay_container_content_box}>
              <p>2000</p>
            </div>
            <div className={styles.dashboardDay_container_content_box}>
              <p>1000</p>
            </div>
            <div className={styles.dashboardDay_container_content_box}>
              <p>0</p>
            </div>
            <img src={imgchart} alt="" className={styles.imgchart} />
            <div className={styles.info}>
              <button>4.221</button>
              <img src={iconselect} alt="" className={styles.iconselect} />
            </div>
            <div className={styles.dashboardDay_container_content_subbox}>
              <p className={styles.col1}>01</p>
              <p className={styles.col2}>13</p>
              <p className={styles.col3}>19</p>
              <p className={styles.col4}>31</p>
            </div>
            <div className={styles.param}>
              <span>sl</span>
              <h5>/</h5>
              <h6>ngày</h6>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overview} id="overview" >
        <div className={styles.overview_container}>
          <h2 className={styles.title}>Tổng quan</h2>
          <div className={styles.overview_container_main}>
            <div className={styles.overview_container_box}>
              <div className={styles.image}>
                <img src={percen90} alt="" className={styles.imgpercent} />
              </div>
              <div className={styles.parameter}>
                <h3>4.221</h3>
                <div>
                  <img src={iconsmalldevice} alt="" className={styles.icondevice} />
                  <span className={styles.sub_param}>Thiết bị</span>
                </div>
              </div>
            </div>
            <div className={styles.overview_container_main_box_column}>
              <li className={styles.yello}>
                <p>Đang hoạt động</p> <span>3.799</span>
              </li>
              <li className={styles.gray}>
                <p>Ngưng hoạt động</p> <span>422</span>
              </li>
            </div>
          </div>
          <div className={styles.overview_container_main}>
            <div className={styles.overview_container_main_box}>
              <div className={styles.image}>
                <img src={percen76} alt="" className={styles.imgpercent}/>
              </div>
              <div className={styles.parameter}>
                <h3>276</h3>
                <div>
                  <img src={iconsmallservice} alt="" className={styles.icondevice} />
                  <span className={styles.sub_param_blue}>Dịch vụ</span>
                </div>
              </div>
            </div>
            <div className={styles.overview_container_main_box_column}>
              <li className={styles.blue}>
                <p>Đang hoạt động</p> <span className={styles.blue}>210</span>
              </li>
              <li className={styles.gray}>
                <p>Ngưng hoạt động</p> <span className={styles.blue}>66</span>
              </li>
            </div>
          </div>
          <div className={styles.overview_container_main}>
            <div className={styles.overview_container_main_box}>
              <div className={styles.image}>
                <img src={percen86} alt="" className={styles.imgpercent}/>
              </div>
              <div className={styles.parameter}>
                <h3>276</h3>
                <div>
                  <img src={iconsmallnumber} alt="" className={styles.icondevice} />
                  <span className={styles.sub_param_green}>Cấp số</span>
                </div>
              </div>
            </div>
            <div className={styles.overview_container_main_box_column}>
              <li className={styles.yello}>
                <p>Đã sử dụng</p> <span className={styles.green}>3.721</span>
              </li>
              <li className={styles.gray}>
                <p>Đang chờ</p> <span className={styles.green}>486</span>
              </li>
              <li className={styles.pink}>
                <p>Ngưng hoạt động</p> <span className={styles.green}>32</span>
              </li>
            </div>
          </div>

          <div className={styles.overview_container_datepicker}>
            <DatePicker />
          </div>
        </div>
      </section>
      
    </div>
  )
}
