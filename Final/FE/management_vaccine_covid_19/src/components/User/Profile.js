import React from "react";

import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <h5 className="well font-weight-bold text-primary">
        THÔNG TIN CÁ NHÂN{" "}
        <Link to={"/update-profile"}>
          <i class="fa-solid fa-pen-to-square"></i>
          
        </Link>
      </h5>
   
      <div className="col-lg-12 well " style={{marginLeft:"100px"}}>
        <div className="row">
          <form style={{ width: "100%" }}>
            <div className="col-sm-12 well">
              <div className="row" style={{ paddingTop: "20px" }}>
                <div className="col-sm-4 form-group">
                  <label  className="font-weight-bold">
                    Họ tên
                  </label>
                  <br/>
                  <label>
                    Lê Quang Duy 
                  </label>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="font-weight-bold">Ngày sinh</label><br/>
                  <label>28/10/2000</label>
                </div>
                <div className="col-sm-4 form-group">
                  <label  className="font-weight-bold">Giới tính</label><br/>
                  <label>Nam</label>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "20px" }}>
                <div className="col-sm-4 form-group ">
                  <label  className="font-weight-bold">Email</label><br/>
                  <label>Email@gmail.com</label>
                </div>
                <div className="col-sm-4 form-group">
                  <label  className="font-weight-bold">Số điện thoại</label><br/>
                  <label>943204</label>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="font-weight-bold">CCCD</label><br/>
                  <label>2462734 </label>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "20px" }}>
                <div className="col-sm-4 form-group ">
                  <label  className="font-weight-bold">Số BHYT</label><br/>
                  <label>045.323.2343233</label>
                </div>
                <div className="col-sm-4 form-group">
                  <label  className="font-weight-bold">Nghề nghiệp</label><br/>
                  <label>Sinh Viên</label>
                </div>
                <div className="col-sm-4 form-group">
                  <label className="font-weight-bold">Dân tộc</label><br/>
                  <label>Kinh</label>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "20px" }}>
                <div className="col-sm-4 form-group ">
                  <label  className="font-weight-bold">Địa Chỉ</label><br/>
                  <label>Hải Chánh - Hải Lăng - Quảng Trị</label>
                </div>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Profile;