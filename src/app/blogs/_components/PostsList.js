import PostCard from "@/app/blogs/_components/PostCard";
import {getAllPosts} from "@/services/postSevices";

async function PostsList() {

    const posts = await getAllPosts()

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {posts.map((post) => (<PostCard post={post} key={post._id} />))}
        </div>
    )
}

export default PostsList;