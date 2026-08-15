export async function getPost(param) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${param.postSlug}`);
    const { data } = await res.json();
    const {post} = data || {}
    return post;
}


export async function getAllPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`,   {

        cache: "force-cache",
        next: {

            revalidate: 30,

        },

    });
    const { data } = await res.json();
    const {posts} = data || {}
    return posts;
}