import ButtonIcon from "@/ui/ButtonIcon";
import {BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon} from "@heroicons/react/24/outline";
import {toPersianNumbers} from "@/utils/toPersianNumber";

function Interaction({post}) {
    return (
        <div className={'flex items-center gap-4'}>
            <ButtonIcon variant={'secondary'}>
                <ChatBubbleOvalLeftEllipsisIcon/>
                <span>{toPersianNumbers(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant={'red'}>
                <HeartIcon/>
            </ButtonIcon>
            <ButtonIcon variant={'primary'}>
                <BookmarkIcon/>
            </ButtonIcon>
        </div>
    );
}

export default Interaction;