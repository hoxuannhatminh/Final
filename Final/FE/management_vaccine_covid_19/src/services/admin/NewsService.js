import axios from "axios";
import authHeader from "../auth-header";

const API_URL = "http://localhost:8080/congthongtin";

function  getNews(page) {
    if(!page) page=0;
    const headers = {
            'Content-Type': 'application/json',
            ...authHeader()
          }
    return axios.get(API_URL +`/admin/news?page=${page}`,{ headers:headers } )  
          
    }

function createNews(data) {

    const headers = {
        'Content-Type': 'application/json',
        ...authHeader()
    }
    console.log(headers);
    return axios.post(API_URL+`/admin/news`, data, {headers  :headers},);
}



const deleteNews = (id) =>{
    if(!id) return ;
    const headers = {
            'Content-Type': 'application/json',
            ...authHeader()
          }
    return axios.delete(API_URL +`/admin/news/${id}` , {  headers : headers})
} 
export default {
    getNews,
    createNews,
    deleteNews
    
};