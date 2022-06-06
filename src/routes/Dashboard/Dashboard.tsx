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
export default function Dashboard() {
  const location = useLocation()
  return (
    <div>
      <div className={styles.contentMain}></div>
      <section className="overview" id="overview" >
        <div className="overview-container">
          <h2 className="title">Tổng quan</h2>
          <div className="overview-container-main">
            <div className="overview-container-main-box">
              <div className="image">
                <img src={percen90} alt="" className="imgpercent" />
              </div>
              <div className="parameter">
                <h3>4.221</h3>
                <div>
                  <img src={iconsmalldevice} alt="" className="icondevice" />
                  <span className="sub-param">Thiết bị</span>
                </div>
              </div>
            </div>
            <div className="overview-container-main-box column">
              <li className="yello">
                <p>Đang hoạt động</p> <span>3.799</span>
              </li>
              <li className="gray">
                <p>Ngưng hoạt động</p> <span>422</span>
              </li>
            </div>
          </div>
          <div className="overview-container-main">
            <div className="overview-container-main-box">
              <div className="image">
                <img src={percen76} alt="" className="imgpercent" />
              </div>
              <div className="parameter">
                <h3>276</h3>
                <div>
                  <img src={iconsmallservice} alt="" className="icondevice" />
                  <span className="sub-param blue">Dịch vụ</span>
                </div>
              </div>
            </div>
            <div className="overview-container-main-box column">
              <li className="blue">
                <p>Đang hoạt động</p> <span className="blue">210</span>
              </li>
              <li className="gray">
                <p>Ngưng hoạt động</p> <span className="blue">66</span>
              </li>
            </div>
          </div>
          <div className="overview-container-main">
            <div className="overview-container-main-box">
              <div className="image">
                <img src={percen86} alt="" className="imgpercent" />
              </div>
              <div className="parameter">
                <h3>276</h3>
                <div>
                  <img src={iconsmallnumber} alt="" className="icondevice" />
                  <span className="sub-param green">Cấp số</span>
                </div>
              </div>
            </div>
            <div className="overview-container-main-box column">
              <li className="yello">
                <p>Đã sử dụng</p> <span className="green">3.721</span>
              </li>
              <li className="gray">
                <p>Đang chờ</p> <span className="green">486</span>
              </li>
              <li className="pink">
                <p>Ngưng hoạt động</p> <span className="green">32</span>
              </li>
            </div>
          </div>

          <div className="overview-container-datepicker">
            <DatePicker />
          </div>
        </div>
      </section><section className="dashboardmain" id="dashboardmain">
        <div className="dashboardmain-container">
          <h2 className="title">Biểu đồ cấp số</h2>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={iconblue} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đã cấp
              </p>
            </div>
            <div className="info">
              <h4>4.221</h4>
              <p>
                <img src={iconup} alt="" className="iconup" />
                <span>32.41%</span>
              </p>
            </div>
          </div>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={icongreen} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đã sử dụng
              </p>
            </div>
            <div className="info">
              <h4>3.721</h4>
              <p>
                <img src={icondown} alt="" className="icondown" />
                <span>32.41%</span>
              </p>
            </div>
          </div>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={iconorange} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đang chờ
              </p>
            </div>
            <div className="info">
              <h4>468</h4>
              <p>
                <img src={iconup} alt="" className="iconup" />
                <span>56.41%</span>
              </p>
            </div>
          </div>
          <div className="dashboardmain-container-box">
            <div className="content">
              <img src={iconred} alt="" className="imgicon" />
              <p className="heading">
                Số thứ tự <br></br> đã bỏ qua
              </p>
            </div>
            <div className="info">
              <h4>32</h4>
              <p>
                <img src={icondown} alt="" className="icondown" />
                <span>22.41%</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
