import Header from "@/components/Header";
import Categories from "@/app/blogs/_components/Categories";

export const metadata = {
    title: "Blog",
}

function Layout({children}) {
    return (
        <div className={'px-20'}>
            <h1>لیست بلاگ ها</h1>
            <div className={'grid grid-cols-12 gap-4 '} >
                <div className={'col-span-12 sm:col-span-4 lg:col-span-3'}><Categories/></div>
                <div className={'col-span-12 sm:col-span-8 xl:col-span-9'}  >{children}</div>
            </div>
        </div>
    );
}

export default Layout;