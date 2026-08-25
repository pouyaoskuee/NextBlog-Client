import Link from "next/link";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";
import {ArrowLeftIcon, ClockIcon} from "@heroicons/react/24/outline";
import Interaction from "@/app/(blog)/blogs/_components/Interaction";
import CoverImage from "@/app/(blog)/blogs/_components/CoverImage";


function PostCard({post}) {
    return (
        <article className={'group flex h-full flex-col overflow-hidden rounded-2xl border border-secondary-200 bg-secondary-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100'}>
            <CoverImage post={post} />
            <div className={'flex flex-1 flex-col p-4'}>
                <div className={'mb-4 flex-1'}>
                    <Link href={`/blogs/${post.slug}`} className={'block'}>
                        <h3 className={'line-clamp-2 leading-7 transition-colors group-hover:text-primary-900'}>{post.title}</h3>
                    </Link>
                    <Link href={`/blogs/${post.slug}`} className={'mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary-900 opacity-0 transition-opacity group-hover:opacity-100'}>
                        ادامهٔ مطلب <ArrowLeftIcon className={'size-3.5'} />
                    </Link>
                </div>
                <div className={'mb-4 flex items-center justify-between gap-3 border-y border-secondary-100 py-3 text-xs text-secondary-500'}>
                    <Avatar {...post.author} />
                    <div className={'flex shrink-0 items-center gap-1'} >
                        <ClockIcon className={'size-4'}/>
                        <span>{post.readingTime || 1} دقیقه</span>
                    </div>
                </div>
                <Interaction post={post} />
            </div>
        </article>
    );
}

export default PostCard;
