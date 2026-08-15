import {http} from "@/services/httpServices";

export function signUp(data){
    console.log(data)
    return http.post('user/signup', data).then(({data})=>data.data)
}
export function signIn(data){
    console.log(data)
    return http.post('user/signIn', data).then(({data})=>data.data)
}