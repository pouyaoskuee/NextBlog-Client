import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";
import {Suspense} from "react";
import {Spinner} from "@/ui/Spinner";
import Search from "@/ui/Search";
import {CreatePost} from "@/app/(dashboard)/profile/posts/components/Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";

async function posts({searchParams})  {




    const queries = queryString.stringify(await searchParams);
    const {posts , totalPages} = await getAllPosts({queries});
    // const totalPages = Math.ceil(((posts.length)/5));


    return (
        <div className={'space-y-4 text-center'}>
            <div className={'flex justify-between gap-10'}>
                <h2 className={'font-medium'}>پست ها</h2>
                <Search/>
                <CreatePost/>
            </div>
            <Suspense fallback={<Spinner text={'درحال بارگذاری پست ها'} />} key={queries}>
                <PostTable posts={posts} />
            </Suspense>
                <Pagination totalPages={totalPages} />
        </div>
    );
}

export default posts;