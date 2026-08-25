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
            className="flex shrink-0 items-center gap-x-2 rounded-xl bg-primary-900 px-4 py-3 text-sm font-medium text-secondary-0 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-md"
        >
            <span className="hidden md:block">ایجاد پست</span>{" "}
            <PlusIcon className="w-5" />
        </Link>
    );
}

export function DeletePost({post}) {
    const router =  useRouter()
    const [isOpenModal, setIsOpenModal] = useState(false);
    const {removePost} = useRemovePost()

    function handleRemove(e){
        e.preventDefault();
        removePost(post._id , {
            onSuccess: () => {
                setIsOpenModal(false);
                router.refresh()
            }
        });

    }

    return (
        <>
            <ButtonIcon type={'button'} variant={'outline'} onClick={()=>setIsOpenModal(true)} aria-label={`حذف ${post.title}`} title={'حذف پست'} className={'size-8 hover:!border-red-300 hover:!text-red-500'}>
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


export function UpdatePost ({id}) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <ButtonIcon type={'button'} variant={'outline'} aria-label={'ویرایش پست'} title={'ویرایش پست'} className={'size-8 hover:!border-primary-300 hover:!text-primary-900'}>
                <PencilIcon />
            </ButtonIcon>
        </Link>
    )
}
