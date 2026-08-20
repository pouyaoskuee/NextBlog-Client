import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";
import {Suspense} from "react";
import {Spinner} from "@/ui/Spinner";
import Search from "@/ui/Search";
import {CreatePost} from "@/app/(dashboard)/profile/posts/components/Buttons";
import queryString from "query-string";

async function posts({searchParams})  {


    const queries = queryString.stringify(await searchParams);
    console.log(queries);
    const posts = await getAllPosts({queries});

    return (
        <div className={'space-y-4'}>
            <div className={'flex justify-between gap-10'}>
                <h2 className={'font-medium'}>پست ها</h2>
                <Search/>
                <CreatePost/>
            </div>
            <Suspense fallback={<Spinner text={'درحال بارگذاری پست ها'} />} key={queries}>
                <PostTable posts={posts} />
            </Suspense>
        </div>
    );
}

export default posts;