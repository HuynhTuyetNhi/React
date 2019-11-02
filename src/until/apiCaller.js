import axios from 'axios';
import * as Config from '../Config';

export default function apiCaller(endPoint, method = "POST", body, headers = null){
  return axios({
    method : method,
    url :  Config.API_URL  + "/" + endPoint,
    data: body,
    headers : {Authorization: getCookie(headers)}
  }).catch(err =>{
    throw(err);
  });
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      
      if(name == cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}