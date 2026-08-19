import {http} from "@/services/httpServices";

export function createCommentApi(rawData ,options) {
    return http.post("/comment/add", rawData , options).then(({data}) => data.data)
}

export function getAllCommentApi(options) {
    return http.get("/comment/list"  , options).then(({data}) => data.data)
}