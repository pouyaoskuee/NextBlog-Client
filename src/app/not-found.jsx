'use client'
import {ArrowRightIcon} from "@heroicons/react/16/solid";
import {useMoveBack} from "@/hooks/useMoveBack";

function NotFound() {
    const moveBack =  useMoveBack()
    return (
        <div className={'flex flex-col p-4 '}>
            <button className={'flex items-center gap-2'} onClick={moveBack}> <ArrowRightIcon className={'size-7'}/>برگشت</button>
            <h3 className={'mx-auto'}>صفحه مورد نظر یافت نشد</h3>
        </div>
    );
}

export default NotFound;