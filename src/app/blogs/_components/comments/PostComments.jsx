"use client"
import {useState} from 'react';
import Button from "@/ui/Button";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline";
import Comment from "@/app/blogs/_components/comments/Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";
import {useAuth} from "@/context/authContext";
import {useRouter} from "next/navigation";
import CommentForm from "@/app/blogs/_components/comments/CommentForm";

function PostComments({post:{comments , _id:postId}}) {

    const [open, setOpen] = useState(false)
    const [parent, setParent] = useState(null)
    const {user} = useAuth()
    const router = useRouter()

    function onAddComment(comment){
        if (!user) {
            router.push(`/signin`)
            return
        }
        setOpen(true)
        setParent(comment)


    }



    return (
        <div className="mb-10">
            <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
                <h2>نظرات</h2>
                <Button
                    variant="outline"
                    onClick={()=>onAddComment(null)}
                >
                    <QuestionMarkCircleIcon className="w-4 ml-2" />
                    <span>ثبت نظر جدید</span>
                </Button>
                <Modal
                    title={parent ? "پاسخ به نظر" : "نظر جدید"}
                    description={parent ? parent.user.name : "نظر خود را وارد کنید"}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <CommentForm
                        postId={postId}
                        parentId={parent ? parent._id : null}
                        onClose={() => setOpen(false)}
                    />
                </Modal>
            </div>
            <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
                {comments.length > 0 ? (
                    comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                                    <Comment
                                        comment={comment}
                                        onAddComment={() => onAddComment(comment)}
                                    />
                                </div>
                                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                                    {comment.answers.map((item, index) => {
                                        return (
                                            <div key={item._id} className="relative">
                                                <div
                                                    className={classNames(
                                                        "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                                                        {
                                                            "last-item": index + 1 === comment.answers.length,
                                                        }
                                                    )}
                                                >
                                                    <Comment comment={item} key={item._id} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
                )}
            </div>
        </div>
    );
}

export default PostComments;