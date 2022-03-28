// import servicesp from "../services/public_service.js"

// const Test = () =>{
//     const handleTestLogin = (e) =>{
//         servicesp.login("user", "1234567")
//            .then((response)=>{
//                     console.log(response.data);
//                     console.log(response.status);
//            })
//            .catch((error) =>{
//                if(error.response)
//                {
//                    // request đã thực hiện , có phản hồi từ máy chủ
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                      console.log(error.response.headers);
//                }
//                else if(error.request){
//                         //yêu cầu thực hiện , nhưng ko nhận phản hồi 
//                }
//                else{
//                             // Xảy ra lỗi khi thiết lập code
//                }
//            }) 
//     }
//     return (
//         <div>
//                 <h1> Test Services</h1>
//                 <p>

//                 </p>
//                 <button onClick={handleTestLogin}>
//                         Check
//                 </button>
//         </div>
//     )
// }
// export default Test;