import Image from "next/image";


function PostCard({post}) {
    return (
        <div className={'border border-secondary-600 rounded-lg overflow-hidden relative aspect-video '}>
            <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                className={'object-cover object-center'}
            />
        </div>
    );
}

export default PostCard;