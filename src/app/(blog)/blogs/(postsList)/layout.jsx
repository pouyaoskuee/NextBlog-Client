import CategoryList from "@/app/(blog)/blogs/_components/CategoryList";
import {Suspense} from "react";
import SpinnerLoading from "@/app/(blog)/blogs/(postsList)/SpinnerLoading";
import Search from "@/ui/Search";

export const metadata = {
    title: "Blog",
}

function Layout({children}) {
    return (
        <div className={'container mx-auto max-w-7xl px-5 pb-16'}>
            <section className={'mb-8 rounded-3xl border border-primary-100 bg-primary-50 px-5 py-7 sm:px-8'}>
                <div className={'flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'}>
                    <div>
                        <p className={'mb-2 text-sm font-bold text-primary-900'}>مجلهٔ Next Blog</p>
                        <h1 className={'text-secondary-900'}>نوشته‌ای برای هر ایده</h1>
                        <p className={'mt-3 text-sm leading-7 text-secondary-600'}>میان نوشته‌ها جست‌وجو کنید یا از دسته‌بندی‌ها شروع کنید.</p>
                    </div>
                    <div className={'w-full lg:max-w-md'}>
                        <Suspense fallback={<SpinnerLoading/>}>
                            <Search />
                        </Suspense>
                    </div>
                </div>
            </section>
            <div className={'grid items-start gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]'} >
                <aside className={'rounded-2xl border border-secondary-200 bg-secondary-0 p-4 shadow-sm lg:sticky lg:top-5'}>
                    <div className={'mb-3 border-b border-secondary-100 px-2 pb-3'}>
                        <h2 className={'text-lg'}>دسته‌بندی‌ها</h2>
                        <p className={'mt-1 text-xs text-secondary-500'}>موضوع مورد علاقه‌تان را انتخاب کنید.</p>
                    </div>
                    <Suspense fallback={<SpinnerLoading/>} ><CategoryList/></Suspense>
                </aside>
                <section className={'min-w-0'}>
                    <div className={'mb-6 flex items-center justify-between'}>
                        <div>
                            <h2>آخرین نوشته‌ها</h2>
                            <p className={'mt-1 text-xs text-secondary-500'}>مطالب تازه و منتخب از نویسندگان ما</p>
                        </div>
                    </div>
                    {children}
                </section>
            </div>
        </div>
    );
}

export default Layout;
