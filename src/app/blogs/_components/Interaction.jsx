"use client"
import ButtonIcon from "@/ui/ButtonIcon";
import {BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon} from "@heroicons/react/24/outline";
import {BookmarkIcon as BookmarkIconSolid , ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconSolid , HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import {toPersianNumbers} from "@/utils/toPersianNumber";
import {bookmarkPostApi, likePostApi} from "@/services/postSevices";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

function Interaction({post}) {

    const router = useRouter();

    async function likeHandler(postId) {
        try {
            const {message} = await likePostApi(postId);
            toast.success(message);
            router.refresh()
        }catch(err) {
            toast.error(err?.response?.data?.message);
        }
    }

    async function bookmarkHandler(postId) {
        try {
            const {message} = await bookmarkPostApi(postId);
            toast.success(message);
            router.refresh()
        }catch(err) {
            toast.error(err?.response?.data?.message);
        }
    }

    return (
        <div className={'flex items-center gap-4'}>
            <ButtonIcon variant={'secondary'}>
                <ChatBubbleOvalLeftEllipsisIcon/>
                <span>{toPersianNumbers(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant={'red'} onClick={()=>likeHandler(post._id)}>
                {post.isLiked ? <HeartIconSolid/> : <HeartIcon/>}
            </ButtonIcon>
            <ButtonIcon variant={'primary'} onClick={()=>bookmarkHandler(post._id)}>
                {post.isBookmarked ? <BookmarkIconSolid/> : <BookmarkIcon/>}
            </ButtonIcon>
        </div>
    );
}

export default Interaction;