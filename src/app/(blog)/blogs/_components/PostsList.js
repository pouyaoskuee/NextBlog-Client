import PostCard from "@/app/(blog)/blogs/_components/PostCard";
import {setCookies} from "@/utils/setCookies";

async function PostsList({posts}) {

    if (posts.length === 0) return <h3 className={'mt-2'}>پستی با اطلاعات مورد نظر شما یافت نشد.</h3>

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {posts?.map((post) => (<PostCard post={post} key={post._id} />))}
        </div>
    )
}

export default PostsList;