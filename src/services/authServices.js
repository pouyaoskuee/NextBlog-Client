import {http} from "@/services/httpServices";

export function signUpApi(data){
    return http.post('user/signup', data).then(({data})=>data.data)
}
export function signInApi(data){
    return http.post('user/signIn', data).then(({data})=>data.data)
}
export function getUserApi(){
    return http.get('user/profile').then(({data})=>data.data)
}

export function getAllUserApi(options){
    return http.get('user/list', options).then(({data})=>data.data)
}