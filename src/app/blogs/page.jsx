import {Suspense} from "react";
import PostsList from "@/app/blogs/_components/PostsList";
import Loading from "@/app/blogs/Loading";

async function page() {
    return (
        <div>
            <h2>لیست پست ها</h2>
            <Suspense fallback={<Loading />}>
                <PostsList/>
            </Suspense>
        </div>
    );
}

export default page;
