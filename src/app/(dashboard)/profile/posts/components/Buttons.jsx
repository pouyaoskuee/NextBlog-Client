"use client"
import ButtonIcon from "@/ui/ButtonIcon";
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";

export function DeletePost({id}) {
    return (
       <ButtonIcon variant={'outline'} onClick={()=>{
           console.log(id)
       }} >
           <TrashIcon />
       </ButtonIcon>
    );
}


export function UpdatePost ({id, post}) {
    return (
        <ButtonIcon variant={'outline'} >
            <PencilIcon />
        </ButtonIcon>
    )
}