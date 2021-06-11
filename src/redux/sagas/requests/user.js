import axios from "axios";

export function loginUser() {
  return axios.request({
    method: "get",
    url: "https://secure-refuge-14993.herokuapp.com/login"
  });
}


export function signUpUser() {
  return axios.request({
    method: "post",
    url: "https://secure-refuge-14993.herokuapp.com/add_user"
  });
}