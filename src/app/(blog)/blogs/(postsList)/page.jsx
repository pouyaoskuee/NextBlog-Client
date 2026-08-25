import PostsList from "@/app/(blog)/blogs/_components/PostsList";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/setCookies";
import {getAllPosts} from "@/services/postSevices";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";

async function page({searchParams}) {

    const queries = queryString.stringify(await searchParams);
    const cookiesStore = await cookies()
    const options = await setCookies(cookiesStore)
    let posts = [];
    let totalPages = 0;

    try {
        const result = await getAllPosts({options, queries});
        posts = result.posts || [];
        totalPages = result.totalPages || 0;
    } catch {
        posts = [];
    }


    return (
        <>
            <PostsList posts={posts} />
            {totalPages > 1 && (
                <div className={'mt-10 flex justify-center'}>
                    <Pagination totalPages={totalPages} />
                </div>
            )}
        </>
    );
}

export default page;
