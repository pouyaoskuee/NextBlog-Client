import React from 'react';
import CoverImage from "@/app/(blog)/blogs/_components/CoverImage";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";

function PostCard({post}) {
    return (
        <div key={post._id} className="border border-secondary-300 shadow-md rounded-lg overflow-hidden">
            <CoverImage post={post} />
            <div className="flex posts-center justify-between p-2 py-8">
                <p>{post.title}</p>
                <Avatar {...post.author} />
            </div>
        </div>
    );
}

export default PostCard;