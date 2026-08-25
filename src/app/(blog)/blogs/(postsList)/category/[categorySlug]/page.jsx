import PostsList from "@/app/(blog)/blogs/_components/PostsList";
import {getFilteredPosts} from "@/services/postSevices";
import queryString from "query-string";

async function Page({params , searchParams}) {

    const search = await searchParams
    const {categorySlug} = await params;
    const queries = queryString.stringify(search);

    let posts = [];
    try {
        posts = await getFilteredPosts({categorySlug , queries}) || [];
    } catch {
        posts = [];
    }

    return (
        <>
            <div className={'mb-6 rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3 text-sm text-secondary-600'}>
                {posts.length === 0 ? <p>{`نتیجه‌ای برای ${search.search || categorySlug} پیدا نشد.`}</p> : <p>{`${posts.length} نتیجه برای ${search.search || `دسته‌بندی ${categorySlug}`}`}</p>}
            </div>
            <PostsList posts={posts} />
        </>
    )
}

export default Page;
