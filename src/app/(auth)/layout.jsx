
import Link from "next/link";
import {BookOpenIcon} from "@heroicons/react/24/outline";

export const metadata= {
    title:'ثبت نام/ورود'
}

function Layout({children}) {
    return (
        <main className={'relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary-50 px-5 py-10'}>
            <div className={'absolute -right-24 -top-20 size-72 rounded-full bg-primary-200/60 blur-3xl'} />
            <div className={'absolute -bottom-28 -left-20 size-80 rounded-full bg-primary-100/80 blur-3xl'} />
            <div className={'relative w-full max-w-md'}>
                <Link href={'/'} className={'mb-7 flex w-fit items-center gap-2 text-lg font-black text-secondary-800'}>
                    <span className={'flex size-10 items-center justify-center rounded-xl bg-primary-900 text-secondary-0 shadow-sm'}><BookOpenIcon className={'size-5'} /></span>
                    نکست بلاگ
                </Link>
                {children}
                <p className={'mt-6 text-center text-xs leading-6 text-secondary-500'}>با ورود به نکست بلاگ، می‌توانید نوشته‌های خود را مدیریت کنید.</p>
            </div>
        </main>
    );
}

export default Layout;
