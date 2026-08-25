import Link from "next/link";
import Image from "next/image";

function CoverImage({post}) {
    return (
        <div className={'relative aspect-video overflow-hidden bg-secondary-100'}>
            <Link className={'relative block aspect-video w-full h-full'} href={`/blogs/${post.slug}`}>
                <Image
                    src={post.coverImageUrl || '/images/user.jpg'}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className={'object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105'}
                />
                <span className={'absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-secondary-900/30 to-transparent'} />
            </Link>
        </div>
    );
}

export default CoverImage;
