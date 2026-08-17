import PostCard from "@/app/blogs/_components/PostCard";
import {setCookies} from "@/utils/setCookies";

async function PostsList({posts}) {

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {posts.map((post) => (<PostCard post={post} key={post._id} />))}
        </div>
    )
}

export default PostsList;