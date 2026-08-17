import axios from "axios";

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL ,
    withCredentials: true
})


app.interceptors.response.use(response => response , async (err) => {
    const originalConfig = err.response.config;
    try {
        if (err.response.status===401 && !originalConfig._retry) {
            originalConfig._retry = true;
            const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token` , {withCredentials: true});
            if (result) return app(originalConfig);
        }
    }catch(err) {
        return Promise.reject(err)
    }
    return Promise.reject(err)
});


export const http= {
    get: app.get,
    post: app.post,
    put: app.put,
    patch: app.patch,
    delete: app.delete,

}