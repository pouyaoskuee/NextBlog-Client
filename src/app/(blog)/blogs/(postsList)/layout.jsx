import CategoryList from "@/app/(blog)/blogs/_components/CategoryList";
import {Suspense} from "react";
import Loading from "@/app/(blog)/blogs/loading";
import Search from "@/ui/Search";

export const metadata = {
    title: "Blog",
}

function Layout({children}) {
    return (
        <div className={'px-20'}>
            <div className={'flex mb-4 '}>
                <h2>لیست بلاگ ها</h2>
                <div className={' w-full max-w-1/2 mx-auto'}>
                    <Search />
                </div>
            </div>
            <div className={'grid grid-cols-12 gap-4 '} >
                <div className={'col-span-12 sm:col-span-4 lg:col-span-3 w-full'}><Suspense fallback={<Loading/>} ><CategoryList/></Suspense></div>
                <div className={'col-span-12 sm:col-span-8 xl:col-span-9'}  >{children}</div>
            </div>
        </div>
    );
}

export default Layout;