import React, { useState } from "react";
import { FaUndo, FaRegCheckCircle } from "react-icons/fa";
import "../../Style/Admin/Vaccine.css"

export default function Quanlylichtiem() {
    const [myHuyen, setMyHuyen] = useState("Quảng Điền");
    const [myXa, setMyXa] = useState("Quảng Phú");
    const [myVaccine, setMyVacXin] = useState("Vaccine1");

  const handleChange = (event) => {
    setMyHuyen(event.target.value);
    setMyXa(event.target.value);
    setMyVacXin(event.target.value);
  };
  return (
    <div className="container1">
      <h2 className="header-name1"> Sửa thông tin lịch tiêm</h2>
      <form>
        <div className="form-input1">
          <div className="infomation-input1">
            <p>
              Ngày tiêm <b className="important">(*):</b>
            </p>
            <form action="">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime1"
                className="info-vacxin"
              />
            </form>
          </div>
          <div className="infomation-input1">
            <p>
              Huyện <b className="important">(*):</b>
            </p>
            <form className="category-vacxin1">
              <select
                value={myHuyen}
                onChange={handleChange}
                className="info-vacxin1"
              >
                <option value="Quảng Điền">Quảng Điền</option>
                <option value="Phong Điền">Phong Điền</option>
                <option value="Thành phố Huế">Thành phố Huế</option>
                <option value="Thị xã Hương Trà">Thị xã Hương Trà</option>
              </select>
            </form>
          </div>
          <div className="infomation-input1">
            <p>
              Xã <b className="important">(*):</b>
            </p>
            <form className="category-vacxin1">
              <select
                value={myXa}
                onChange={handleChange}
                className="info-vacxin1"
              >
                <option value="Quảng Phú">Quảng Phú</option>
                <option value="Quảng Vinh">Quảng Vinh</option>
                <option value="Quảng Lợi">Quảng Lợi</option>
                <option value="Quảng Công">Quảng Công</option>
              </select>
            </form>
          </div>
        </div>

        <div className="form-input1">
          <div className="infomation-input1">
            <p>
              Điạ điểm tiêm <b className="important">(*):</b>
            </p>
            <input type="text" className="ma-input1 info-vacxin1"/>
          </div>
          <div className="infomation-input1">
            <p>
              Tên vắc xin<b className="important">(*):</b>
            </p>
            <form className="category-vacxin1">
              <select
                value={myVaccine}
                onChange={handleChange}
                className="info-vacxin1"
              >
                <option value="Vaccine1">Vaccine1</option>
                <option value="Vaccine2">Vaccine2</option>
                <option value="Vaccine3">Vaccine3</option>
                <option value="Vaccine4">Vaccine14</option>
              </select>
            </form>
          </div>
          
        </div>

        {/* Button */}
        <div className="btn-vacxin1">
          <button className="reset-btn1 btn-format1">
            <FaUndo />
            <i className="text-btn1">Nhập lại</i>
          </button>
          <button className="update-btn1 btn-format1">
            <FaRegCheckCircle />
            <i className="text-btn1">Cập nhật</i>
          </button>
        </div>
      </form>
    </div>
  );
}