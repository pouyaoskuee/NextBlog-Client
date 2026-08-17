import {http} from "@/services/httpServices";
import {setCookies} from "@/utils/setCookies";


export async function getPostsCategoriesApi () {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    return  await result.json().then(data => data.data);
}

export async function getAllPosts(options = {}) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list` , options);
    const { data } = await res.json();
    const {posts} = data || {}
    return posts;
}

export async function getFilteredPosts(slug) {
    console.log(slug)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${slug}`);
    const { data } = await res.json();
    const {posts} = data || {}
    return posts;
}

export async function getPost(param) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${param.postSlug}`,{

        // cache: "force-cache",
        // next: {
        //
        //     revalidate: 30,
        //
        // },

    });
    const { data } = await res.json();
    const {post} = data || {}
    return post;
}



export function likePostApi(postId) {
    return http.post(`/post/like/${postId}`).then(({data}) => data.data);
}
export function bookmarkPostApi(postId) {
    return http.post(`/post/bookmark/${postId}`).then(({data}) => data.data);
}