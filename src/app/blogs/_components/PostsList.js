import PostCard from "@/app/blogs/_components/PostCard";

async function PostsList() {

    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
    const {data: {posts}} = await result.json();

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {posts.map((post) => (<PostCard post={post} key={post._id} />))}
        </div>
    )
}

export default PostsList;