import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";
import {Suspense} from "react";
import {Spinner} from "@/ui/Spinner";
import Search from "@/ui/Search";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import {CreatePostBtn} from "@/app/(dashboard)/profile/posts/components/Buttons";

async function posts({searchParams})  {
    const queries = queryString.stringify(await searchParams);
    let posts = [];
    let totalPages = 0;
    try {
        const result = await getAllPosts({queries});
        posts = result.posts || [];
        totalPages = result.totalPages || 0;
    } catch {
        posts = [];
    }


    return (
        <div className={'space-y-6'}>
            <div className={'flex flex-col gap-4 rounded-2xl border border-secondary-200 bg-secondary-0 p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between'}>
                <div><h1>پست‌ها</h1><p className={'mt-2 text-sm text-secondary-500'}>نوشته‌ها را جست‌وجو، ویرایش یا مدیریت کنید.</p></div>
                <div className={'flex w-full items-center gap-3 sm:w-auto'}>
                    <div className={'flex-1 sm:w-64'}><Search/></div>
                <CreatePostBtn/>
                </div>
            </div>
            <Suspense fallback={<Spinner text={'درحال بارگذاری پست ها'} />} key={queries}>
                <PostTable posts={posts} />
            </Suspense>
            {totalPages > 1 && <div className={'flex justify-center'}><Pagination totalPages={totalPages} /></div>}
        </div>
    );
}

export default posts;
