"use client"
import ButtonIcon from "@/ui/ButtonIcon";
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {PlusIcon} from "@heroicons/react/16/solid";
import Modal from "@/ui/Modal";
import {useState} from "react";
import ConfirmDelete from "@/ui/ConfirmDelete";
import useRemovePost from "@/app/(dashboard)/profile/posts/create/_/hooks/useRemovePost";
import {useRouter} from "next/navigation";


export function CreatePostBtn() {
    return (
        <Link
            href="/profile/posts/create"
            className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0
      transition-colors hover:bg-primary-700"
        >
            <span className="hidden md:block">ایجاد پست</span>{" "}
            <PlusIcon className="w-5" />
        </Link>
    );
}

export function DeletePost({post}) {
    const router =  useRouter()
    const [isOpenModal, setIsOpenModal] = useState(false);
    const {removePost , loadingRemovePost} = useRemovePost()

    function handleRemove(e){
        e.preventDefault();
        removePost(post.id , {
            onSuccess: () => {
                setIsOpenModal(false);
                router.refresh()
            }
        });

    }

    return (
        <>
            <ButtonIcon variant={'outline'} onClick={()=>setIsOpenModal(true)} >
                <TrashIcon />
            </ButtonIcon>
            <Modal
                onClose={()=>setIsOpenModal(false)}
                title={`حذف پست ${post.title}`}
                open={isOpenModal}
            >
                <ConfirmDelete
                    resourceName={post.title}
                    onClose={()=>setIsOpenModal(false)}
                    onConfirm={(e)=> handleRemove(e)}

                />

            </Modal>
        </>


    );
}


export function UpdatePost ({id, post}) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <ButtonIcon variant={'outline'} >
                <PencilIcon />
            </ButtonIcon>
        </Link>
    )
}