import Image from "next/image";
import CustomLink from "@/ui/CustomLink";
import Link from "next/link";
import Avatar from "@/app/blogs/_components/Avatar";
import {ClockIcon} from "@heroicons/react/24/outline";
import Interaction from "@/app/blogs/_components/Interaction";


function PostCard({post}) {
    return (
        <div className={'border border-secondary-300 shadow-md rounded-lg overflow-hidden  '}>
            <div className={'relative aspect-video'}>
                <Link href={`/blogs/${post.slug}`}>
                    <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        fill
                        className={'object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out'}
                    />
                </Link>
            </div>
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