import React from 'react';
import PostsList from "@/app/blogs/_components/PostsList";
import {getFilteredPosts} from "@/services/postSevices";

async function Page({params}) {

    const {categorySlug} = await params;

    const posts = await getFilteredPosts(categorySlug)

    if (posts.length === 0) return <p></p>;

    return (
        <>
            <PostsList posts={posts} />
        </>
    )
}

export default Page;