import axios from "axios";

export function GetUserData(){
    return axios.get(`https://6060691404b05d0017ba277e.mockapi.io/generalquiz`)
}

export function PostUserData(data){
    return axios.post(`https://6060691404b05d0017ba277e.mockapi.io/generalquiz`,data)
}