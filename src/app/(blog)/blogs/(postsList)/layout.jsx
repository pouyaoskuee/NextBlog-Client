import CategoryList from "@/app/(blog)/blogs/_components/CategoryList";
import {Suspense} from "react";
import Loading from "@/app/(blog)/blogs/(postsList)/loading";
import Search from "@/ui/Search";

export const metadata = {
    title: "Blog",
}

function Layout({children}) {
    return (
        <div className={'px-20'}>
            <div className={'flex mb-4 '}>
                <h2>دسته بندی بلاگ ها</h2>
                <div className={' w-full max-w-1/2 mx-auto'}>
                    <Search />
                </div>
            </div>
            <div className={'grid grid-cols-12 gap-4 '} >
                <div className={'col-span-12 sm:col-span-4 lg:col-span-3 w-full'}><Suspense fallback={<Loading/>} ><CategoryList/></Suspense></div>
                <div className={'col-span-12 sm:col-span-8 xl:col-span-9'}>
                    <h2 className={'my-5'}>لیست همه پست ها</h2>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;