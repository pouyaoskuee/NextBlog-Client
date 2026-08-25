import PostCard from "@/app/(blog)/blogs/_components/PostCard";
import {DocumentMagnifyingGlassIcon} from "@heroicons/react/24/outline";

function PostsList({posts = []}) {

    if (posts.length === 0) return (
        <div className={'flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-secondary-300 bg-secondary-50 px-5 text-center'}>
            <DocumentMagnifyingGlassIcon className={'mb-3 size-9 text-primary-700'} />
            <h3 className={'text-base'}>نوشته‌ای پیدا نشد</h3>
            <p className={'mt-2 text-sm text-secondary-500'}>عبارت جست‌وجو یا دسته‌بندی دیگری را امتحان کنید.</p>
        </div>
    )

    return (
        <div className={'grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'}>
            {posts?.map((post) => (<PostCard post={post} key={post._id} />))}
        </div>
    )
}

export default PostsList;
