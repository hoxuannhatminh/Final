import React from "react";
import { useState } from "react";

import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import "../Style/Register.css"
import userService from "../services/PublicService.js";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [identification, setIdentification] = useState("");
  const [healthInsuranceNumber, setHealthInsuranceNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [ethnic, setEthnic] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false)

  const history = useHistory();

  const [validationMsg, setValidationMsg] = useState({});

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const onChangeFullname = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const onChangeBirthday = (e) => {
    const value = e.target.value;
    setBirthday(value);
  };
  const onChangeGender = (e) => {
    const value = e.target.value;
    setGender(value);
  };
  const onChangePhoneNumber = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };
  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const onChangeIdentification = (e) => {
    const value = e.target.value;
    setIdentification(value);
  };
  const onChangeHealthInsuranceNumber = (e) => {
    const value = e.target.value;
    setHealthInsuranceNumber(value);
  };
  const onChangeOccupation = (e) => {
    const value = e.target.value;
    setOccupation(value);
  };
  const onChangeEthnic = (e) => {
    const value = e.target.value;
    setEthnic(value);
  };
  const onChangeAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
  };

  const validAll = () => {
    const msg = {};
    if (isEmpty(username)) {
      msg.username = "Tên đăng nhập không được để trống";
    }
    if (isEmpty(password)) {
      msg.password = "Mật khẩu không được để trống";
    }
    if (isEmpty(name)) {
      msg.name = "Họ tên không được để trống";
    }
    if (isEmpty(birthday)) {
      msg.birthday = "Ngày sinh không được để trống";
    }
    if (!isEmail(email)) {
      msg.email = "Email không hợp lệ";
    }
    if (isEmpty(identification)) {
      msg.identification = "CCCD không được để trống";
    }
    // else if (identification.length < 12 || identification.length > 12) {
    //   msg.identification = "CCCD không hợp lệ";
    // }

    if (isEmpty(healthInsuranceNumber)) {
      msg.healthInsuranceNumber = "Số thẻ BHYT không được để trống";
    }
    //else if (
    //   healthInsuranceNumber.length < 10 ||
    //   healthInsuranceNumber.length > 10
    // ) {
    //   msg.healthInsuranceNumber = "Số thẻ BHYT không hợp lệ";
    // }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmitRegister = () => {
    setMessage("");
    const isValid = validAll();
    if (!isValid) {
      return;
    } else {
      const user = {
        username,
        password,
        name,
        birthday,
        gender,
        phoneNumber,
        email,
        identification,
        healthInsuranceNumber,
        occupation,
        ethnic,
        address,
      };

      userService
        .registerUser(user)
        .then((response) => {
          setMessage(response.data.message);
          setSuccessful(true)
          console.log(message);
        //   localStorage.setItem("username",username)
        //   localStorage.setItem("password",password)
          history.push("/login");
          window.location.reload();
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            setMessage(error.response.data);
            setSuccessful(false)
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  };

  return (
    <>
   
    <h5 className="well font-weight-bold text-primary">
          ĐĂNG KÍ TÀI KHOẢN
        </h5>
      <div
        className="container-fluid"
        style={{ paddingLeft: "80px", paddingRight: "80px" ,paddingTop:"10px"}}
      >
    
        <div className="col-lg-12 well">
          <div className="row">
            {message && (
              <div className="form-group">
                <p  className={ successful ? "alert alert-success" : "alert alert-danger" }>{message}</p>
              </div>
            )}
            <form style={{ width: "100%" }}>
              <div className="col-sm-12 well">
                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-sm-4 form-group">
                    <label>
                      Tên đăng nhập <span className="text-danger">(*)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Tên đăng nhập.."
                      className="form-control inputcss"
                      onChange={onChangeUsername}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.username}
                    </p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>
                      Mật khẩu <span className="text-danger">(*)</span>{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Mật khẩu"
                      className="form-control inputcss"
                      onChange={onChangePassword}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.password}
                    </p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>
                      Họ tên <span className="text-danger">(*)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Họ tên"
                      className="form-control inputcss"
                      onChange={onChangeFullname}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.name}
                    </p>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-sm-4 form-group ">
                    <label>
                      Ngày sinh <span className="text-danger">(*)</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Ngày sinh"
                      className="form-control inputcss"
                      onChange={onChangeBirthday}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.birthday}
                    </p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>
                      Giới tính <span className="text-danger">(*)</span>
                    </label>
                    <select
                      class="form-control inputcss"
                      onChange={onChangeGender}
                      value={gender}
                    >
                      <option value="1">Nam</option>
                      <option value="0">Nữ</option>
                    </select>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Số điện thoại </label>
                    <input
                      type="number"
                      placeholder="Số điện thoại"
                      className="form-control inputcss"
                      onChange={onChangePhoneNumber}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-sm-4 form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control inputcss"
                      onChange={onChangeEmail}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.email}
                    </p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>
                      CCCD <span className="text-danger">(*)</span>
                    </label>
                    <input
                      type="number"
                      placeholder="CCCD"
                      className="form-control inputcss"
                      onChange={onChangeIdentification}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.identification}
                    </p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>
                      Số thẻ BHYT <span className="text-danger">(*)</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Số thẻ BHYT"
                      className="form-control inputcss"
                      onChange={onChangeHealthInsuranceNumber}
                    />
                    <p
                      className="text-danger font-italic"
                      style={{ fontSize: "0.8rem", paddingTop: "5px" }}
                    >
                      {validationMsg.healthInsuranceNumber}
                    </p>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "20px" }}>
                  <div className="col-sm-4 form-group">
                    <label>Nghề nghiệp </label>
                    <input
                      type="text"
                      placeholder="Nghề nghiệp"
                      className="form-control inputcss"
                      onChange={onChangeOccupation}
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Dân tộc</label>
                    <input
                      type="Text"
                      placeholder="Dân tộc"
                      className="form-control inputcss"
                      onChange={onChangeEthnic}
                    />
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Địa chỉ hiện tại</label>
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      className="form-control inputcss"
                      onChange={onChangeAddress}
                    />
                  </div>
                </div>
                <div
                  className="row justify-content-center"
                  style={{ paddingTop: "20px" }}
                >
                  <button
                    type="button"
                    className="btn  btn-danger btncss"
                    style={{ marginRight: "20px" }}
                  >
                    Nhập lại
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btncss"
                    onClick={onSubmitRegister}
                  >
                    Đăng kí
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;