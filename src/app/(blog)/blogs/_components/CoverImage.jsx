import React from 'react';
import Link from "next/link";
import Image from "next/image";

function CoverImage({post}) {
    return (
        <div className={'relative aspect-video'}>
            <Link className={'relative block aspect-video w-full h-full'} href={`/blogs/${post.slug}`}>
                <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes='cover'
                    className={'object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out'}
                />
            </Link>
        </div>
    );
}

export default CoverImage;