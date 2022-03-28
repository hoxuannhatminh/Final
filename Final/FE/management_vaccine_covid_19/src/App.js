
import Login from "./components/Login.js"
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js"
import Register from "./components/Register.js";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Admincalendar from "./components/Admin/CalendarAdmin.js";
import QuanlyloaivacxinIndex from "./components/Admin/QuanlyloaivacxinIndex.js";
import Profile from "./components/User/Profile.js";
import React from "react";
import Quanlyloaivacxin from "./components/Admin/Quanlyloaivacxin.js";
import Quanlyvacxin from "./components/Admin/Quanlyvacxin.js";
import QuanlyvacxinIndex from "./components/Admin/QuanlyvacxinIndex.js";
import Danhsachdangkytiem from "./components/Admin/Danhsachdangkytiem";
import Danhsachhuytiem from "./components/Admin/Danhsachhuytiem.js";
import Danhsachdatiem from "./components/Admin/Danhsachdatiem";
import Quanlylichtiem from "./components/Admin/Quanlylichtiem.js";
import CalendarAdmin from "./components/Admin/CalendarAdmin";
import Trangchu from "./components/Admin/Trangchu.js";
import NewsAdmin from "./components/Admin/NewsAdmin.js";
import DetailNewsAdmin from "./components/Admin/DetailNewsAdmin.js";
function App() {
  return (
    <BrowserRouter>
        <div>
            <Navbar />  
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/admin-news" component={NewsAdmin}></Route>
              <Route path="/admin/detailnew/:id" component={DetailNewsAdmin}></Route>
              <Route path="/profile" component={Profile}> </Route>
              <Route path="/quan-ly-loai-vacxin-index" component={QuanlyloaivacxinIndex}></Route>
              <Route path="/admin/categoryvaccine/:id" component={Quanlyloaivacxin}></Route>
              <Route path="/quan-ly-vacxin-index" component={QuanlyvacxinIndex}></Route>
              <Route path="/admin/vaccine/:id" component={Quanlyvacxin}></Route>
              <Route path="/quan-ly-danh-sach-dang-ky-tiem" component={Danhsachdangkytiem}></Route>
              <Route path="/quan-ly-danh-sach-da-tiem" component={Danhsachdatiem}></Route>
              <Route path="/quan-ly-danh-sach-huy-tiem" component={Danhsachhuytiem}></Route>
              <Route path="/quan-ly-lich-tiem-index" component={CalendarAdmin}></Route>
              <Route path="/quan-ly-lich-tiem-edit" component={Quanlylichtiem}></Route>
              {/* <Route path="/calendar" render={ () => <AdminCalendar />}> </Route> */}
            </Switch>
        </div>
      </BrowserRouter>

            
          
    
   
  );
}

export default App;
