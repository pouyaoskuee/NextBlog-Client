import Link from "next/link";

function NotFound() {
    return (
        <div className={'container mx-auto flex min-h-80 max-w-xl flex-col items-center justify-center gap-4 px-5 text-center'}>
            <div className={'flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-xl font-black text-primary-900'}>۴۰۴</div>
            <h1>این نوشته پیدا نشد</h1>
            <p className={'text-sm leading-7 text-secondary-500'}>ممکن است آدرس تغییر کرده باشد یا نوشته دیگر در دسترس نباشد.</p>
            <Link href={'/blogs'} className={'mt-2 rounded-xl bg-primary-900 px-4 py-2.5 text-sm font-bold text-secondary-0 transition-colors hover:bg-primary-700'}>بازگشت به بلاگ</Link>
        </div>
    );
}

export default NotFound;
