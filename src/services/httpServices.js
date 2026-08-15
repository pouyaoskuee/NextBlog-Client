import axios from "axios";

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL ,
    withCredentials: true
})


export const http= {
    get: app.get,
    post: app.post,
    put: app.put,
    patch: app.patch,
    delete: app.delete,

}