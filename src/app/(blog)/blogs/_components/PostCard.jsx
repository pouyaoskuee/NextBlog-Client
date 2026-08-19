import Link from "next/link";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";
import {ClockIcon} from "@heroicons/react/24/outline";
import Interaction from "@/app/(blog)/blogs/_components/Interaction";
import CoverImage from "@/app/(blog)/blogs/_components/CoverImage";


function PostCard({post}) {
    return (
        <div className={'border border-secondary-300 shadow-md rounded-lg overflow-hidden  '}>
                <CoverImage post={post} />
            <div className={'p-2 space-y-3 mt-2'}>
                <div>
                    <Link href={`/blogs/${post.slug}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </div>
                <div className={'flex justify-between text-xs text-secondary-500'}>
                    <Avatar {...post.author} />
                    <div className={'flex gap-0.5 items-center justify-center'} >
                        <ClockIcon className={'size-4'}/>
                        <p>خواندن:</p>
                        <p>{post.readingTime}</p>
                        <p>دقیقه</p>
                    </div>
                </div>
                <Interaction post={post} />
            </div>
        </div>
    );
}

export default PostCard;