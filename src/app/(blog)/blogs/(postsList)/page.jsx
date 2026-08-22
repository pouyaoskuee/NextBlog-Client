import PostsList from "@/app/(blog)/blogs/_components/PostsList";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/setCookies";
import {getAllPosts} from "@/services/postSevices";
import queryString from "query-string";

async function page({searchParams}) {

    const queries = queryString.stringify(await searchParams);
    const cookiesStore = await cookies()
    const options = await setCookies(cookiesStore)
    const {posts} = await getAllPosts({options, queries})


    return (
        <div>
            <h2 className={'mb-4'}>لیست پست ها</h2>
                <PostsList posts={posts} />
        </div>
    );
}

export default page;
