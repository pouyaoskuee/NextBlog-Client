import PostsList from "@/app/blogs/_components/PostsList";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/setCookies";
import {getAllPosts} from "@/services/postSevices";

async function page() {

    const cookiesStore = await cookies()
    const options = await setCookies(cookiesStore)
    const posts = await getAllPosts(options)

    return (
        <div>
            <h2 className={'mb-4'}>لیست پست ها</h2>
                <PostsList posts={posts} />
        </div>
    );
}

export default page;
