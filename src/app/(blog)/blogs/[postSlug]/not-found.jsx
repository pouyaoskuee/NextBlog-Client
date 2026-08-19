import {useMoveBack} from "@/hooks/useMoveBack";
import Link from "next/link";

function NotFound() {
    return (
        <div className={'flex flex-col p-4 items-center gap-4 '}>
            <h3 className={'mx-auto'}>صفحه مورد نظر یافت نشد</h3>
            <Link href={'/src/app/(blog)/blogs'}><p className={'text-secondary-500'}>بازگشت به وبلاگ؟</p></Link>
        </div>
    );
}

export default NotFound;