import React, { useState,useEffect } from "react";
import { FaUndo, FaPlusCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import "../../Style/Admin/Vaccine.css"
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import { useHistory} from "react-router-dom";
import NewsService from "../../services/admin/NewsService";
const Trangchu = (props) => {  

  const [listNews,setListNews] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("")
  const [message, setMessage] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const [successful, setSuccessful] = useState(false)
  const history = useHistory();

  const arrayPhanTrang = ()=>{
    let Array = [];
    if(listNews)
    {
          for(let i=1;i<=listNews.totalPages;i++){
                  Array.push(i);
          } 
    }
    return Array;
  }
  const handlePrevious = () =>{
    const currentPage = listNews.currentPage 
     if(currentPage===0 || listNews.totalPages===0){
         return;
     }
     getDataNews(currentPage-1);
   
  }
  const handleNext = () =>{
    const currentPage = listNews.currentPage 
    const totalPages = listNews.totalPages;
    if(currentPage >=totalPages-1 )
      return;
      getDataNews(currentPage+1);
  }
  const handleChoosePage = (page) =>{  
    getDataNews(page);
  }
  const getDataNews = (page) =>{
    NewsService.getNews(page)
    .then((response) =>{
      setListNews(response.data);
      console.log(response.data);
    })
  }
  useEffect(()=>{
    // lấy dữ liệu        
           getDataNews(null)
           
  },[])

  const onChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const onChangeContent = (e) => {
    const value = e.target.value;
    setContent(value);
  };
  
  const onChangeDescription= (e) => {
    const value = e.target.value;
    setDescription(value);
  };
  const validAll = () => {
    const msg = {};
    if (isEmpty(title)) {
      msg.code = "Tiêu đề không được để trống";
    }
    if (isEmpty(content)) {
      msg.name = "Nội dung không được để trống";
    }
    if (isEmpty(description)) {
      msg.name = "Mô tả  không được để trống";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleDelete = (id) =>{
    console.log(id);
    
      NewsService.deleteNews(id)
      .then(()=>{
        alert('Xoá thành công!');
        if(listNews.totalItems!==0)
        {
          if(listNews.currentPage ===0) { getDataNews(0); return};

          let totalPages = (listNews.totalItems-1)/5;
          if((listNews.totalItems-1)%5!==0)
            totalPages = totalPages +1;

          if(listNews.currentPage > totalPages-1)
            getDataNews(listNews.currentPage-1)
            else 
            getDataNews(listNews.currentPage);
        }

      })
  }
  const onSubmitCreate = () => {

    setMessage("");
    const isValid = validAll();
    if (!isValid) {
      return;
    } else {
      const news = {
        title,
        content,
        description
      };

      NewsService.createNews(news).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true)
          console.log(message);
          alert('Thêm thành công!');
          history.push("/home");
          const totalItem = listNews.totalPages * 5
          let page = listNews.totalPages;
          if(totalItem >= listNews.totalItems+1)
          page= page-1;
          getDataNews(page);
      
    
          // window.location.reload();
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
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    }
  };
  return (
    <>
    <div className="container1">
      <h2 className="header-name1"> Quản lý vacxin </h2>
      {message && (
              <div className="form-group1">
                <p  className={ successful ? "alert alert-success" : "alert alert-danger" }>{message}</p>
              </div>
            )}
      <form method="post">
        <div className="form-input1">
         <div className="infomation-input1">
            <p>Tiêu đề :</p>
            <textarea 
              type="text" 
              onChange={onChangeTitle}
              placeholder="Tiêu đề"
              className="ma-input1 note-vacxin1" />
              <p
                style={{ fontSize: "0.8rem", paddingTop: "5px",color:"red" }}
              >
                      {validationMsg.title}
              </p>
          </div>
          <div className="infomation-input1">
            <p>Nội dung :</p>
            <textarea 
              type="text" 
              onChange={onChangeContent}
              placeholder="Nội dung"
              className="ma-input1 note-vacxin1" />
              <p
                style={{ fontSize: "0.8rem", paddingTop: "5px",color:"red" }}
              >
                      {validationMsg.content}
              </p>
          </div>
          <div className="infomation-input1">
            <p>Mô tả :</p>
            <textarea 
              type="text" 
              onChange={onChangeDescription}
              placeholder="Mô tả"
              className="ma-input1 note-vacxin1" />
              <p
                style={{ fontSize: "0.8rem", paddingTop: "5px",color:"red" }}
              >
                      {validationMsg.description}
              </p>
          </div>

        </div>
      

         {/* Button */}
         <div className="btn-vacxin1">
            <button className="reset-btn1 btn-format1" type="reset">
              <FaUndo />
              <i className="text-btn1" >Nhập lại</i>
            </button>
            <button className="update-btn1 btn-format1" type="button">
              <FaPlusCircle />
              <i className="text-btn1" onClick={onSubmitCreate}>Thêm mới</i>
            </button>
          </div>
      </form>
    
      <div className="table-vacxin1">
        <Table id="customer1">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Conten</th>
              <th>Mô tả</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            listNews && listNews.listnews.map((ele,index)=>(
            <tr key = {index}>
              <td>{index +1}</td>             
              <td>{ele.title}</td>             
              <td>{ele.content}</td>
              <td className="description">{ele.description}</td>
              <td>
                <div className="action">
                  <button className="delete-btn"onClick={() =>{
                    handleDelete(ele.id)
                    }}>
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
            ))
          } 
          </tbody>
        </Table>
      </div>
      <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
          
            <li className={ listNews&& (listNews.currentPage===0 ||listNews.totalPages===0)? "disabled page-item" :"page-item" } onClick={handlePrevious}>
              <a className="page-link" >Previous</a>
            </li>
              {
                arrayPhanTrang().map((ele)=>
                  <li className={listNews&& listNews.currentPage === ele-1 ?"page-item active" : "page-item"}
                  onClick={() =>{handleChoosePage(ele-1)}}><a className="page-link ">{ele}</a></li>
                )

              }
            <li className={ listNews && (listNews.currentPage>=listNews.totalPages-1 )? "disabled page-item" :"page-item" } onClick={handleNext}>
                <a className="page-link" >Next</a>
            </li>
            
          </ul>
        </nav>
    </div>
    </>
  );
};
export default Trangchu;

