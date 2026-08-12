import CategoryList from "@/app/blogs/_components/CategoryList";
import {Suspense} from "react";
import Loading from "@/app/blogs/Loading";

export const metadata = {
    title: "Blog",
}

function Layout({children}) {
    return (
        <div className={'px-20'}>
            <h2 className={'mb-4'}>لیست بلاگ ها</h2>
            <div className={'grid grid-cols-12 gap-4 '} >
                <div className={'col-span-12 sm:col-span-4 lg:col-span-3 w-full'}><Suspense fallback={<Loading/>} ><CategoryList/></Suspense></div>
                <div className={'col-span-12 sm:col-span-8 xl:col-span-9'}  >{children}</div>
            </div>
        </div>
    );
}

export default Layout;