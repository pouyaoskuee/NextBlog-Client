import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";

async function posts() {
    const posts = await getAllPosts();

    return (
        <>
            <PostTable posts={posts} />
        </>
    );
}

export default posts;