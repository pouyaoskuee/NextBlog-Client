"use client"
import ButtonIcon from "@/ui/ButtonIcon";
import {BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon} from "@heroicons/react/24/outline";
import {BookmarkIcon as BookmarkIconSolid, HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";
import {toPersianNumbers} from "@/utils/toPersianNumber";
import {bookmarkPostApi, likePostApi} from "@/services/postSevices";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useState} from "react";

function Interaction({post}) {

    const router = useRouter();
    const [pendingAction, setPendingAction] = useState(null);

    async function likeHandler(postId) {
        setPendingAction("like");
        try {
            const {message} = await likePostApi(postId);
            toast.success(message);
            router.refresh()
        }catch(err) {
            toast.error(err?.response?.data?.message || "انجام لایک ممکن نشد.");
        } finally {
            setPendingAction(null);
        }
    }

    async function bookmarkHandler(postId) {
        setPendingAction("bookmark");
        try {
            const {message} = await bookmarkPostApi(postId);
            toast.success(message);
            router.refresh()
        }catch(err) {
            toast.error(err?.response?.data?.message || "ذخیرهٔ نوشته ممکن نشد.");
        } finally {
            setPendingAction(null);
        }
    }

    return (
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-1 rounded-xl bg-secondary-100 px-2.5 py-1.5 text-xs text-secondary-500'} title={'تعداد دیدگاه‌ها'}>
                <span className={'size-5'}><ChatBubbleOvalLeftEllipsisIcon/></span>
                <span>{toPersianNumbers(post.commentsCount || 0)}</span>
            </div>
            <div className={'flex items-center gap-2'}>
            <ButtonIcon
                type={'button'}
                variant={'red'}
                onClick={()=>likeHandler(post._id)}
                disabled={pendingAction !== null}
                aria-label={post.isLiked ? 'حذف لایک' : 'لایک کردن'}
                title={post.isLiked ? 'حذف لایک' : 'لایک کردن'}
                className={`size-9 transition-transform hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60 ${post.isLiked ? '!bg-red-500 !text-white' : ''}`}
            >
                {post.isLiked ? <HeartIconSolid/> : <HeartIcon/>}
            </ButtonIcon>
            <ButtonIcon
                type={'button'}
                variant={'primary'}
                onClick={()=>bookmarkHandler(post._id)}
                disabled={pendingAction !== null}
                aria-label={post.isBookmarked ? 'حذف از ذخیره‌ها' : 'ذخیرهٔ نوشته'}
                title={post.isBookmarked ? 'حذف از ذخیره‌ها' : 'ذخیرهٔ نوشته'}
                className={`size-9 transition-transform hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60 ${post.isBookmarked ? '!bg-primary-900 !text-white' : ''}`}
            >
                {post.isBookmarked ? <BookmarkIconSolid/> : <BookmarkIcon/>}
            </ButtonIcon>
            </div>
        </div>
    );
}

export default Interaction;
