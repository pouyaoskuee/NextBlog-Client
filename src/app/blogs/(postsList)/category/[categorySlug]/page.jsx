import React from 'react';
import PostsList from "@/app/blogs/_components/PostsList";
import {getFilteredPosts} from "@/services/postSevices";
import queryString from "query-string";

async function Page({params , searchParams}) {

    const search = await searchParams
    const {categorySlug} = await params;
    const queries = queryString.stringify(search);

    const posts = await getFilteredPosts({categorySlug , queries} )

    return (
        <>
            <div className={'mb-4'}>
                {posts.length === 0 ? <p>{`نتیجه ای برای ${search.search || categorySlug } پیدا نشد`}</p> : <p>{`${posts.length} نتیجه برای کلمه ${(search.search)|| ` دسته بندی ${categorySlug} ` }`}</p> }
            </div>
            <PostsList posts={posts} />
        </>
    )
}

export default Page;