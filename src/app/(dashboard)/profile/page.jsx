import CardWrapper from "@/app/(dashboard)/profile/components/CardWrapper";
import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";
import {Suspense} from "react";
import {Spinner} from "@/ui/Spinner";

export const metadata = {
    title: "پروفایل کاربری",
}

async function Profile() {
    let posts = [];
    try {
        const result = await getAllPosts({queries: 'sort=latest&limit=4'});
        posts = result.posts || [];
    } catch {
        posts = [];
    }

    return (
        <div className={'space-y-8'}>
            <section className={'rounded-2xl bg-secondary-900 px-6 py-7 text-secondary-0 sm:px-8'}>
                <p className={'text-sm text-primary-300'}>نمای کلی</p>
                <h1 className={'mt-2'}>داشبورد مدیریت محتوا</h1>
                <p className={'mt-3 max-w-xl text-sm leading-7 text-secondary-300'}>عملکرد محتوا، کاربران و گفت‌وگوهای وبلاگ را از همین‌جا دنبال کنید.</p>
            </section>
            <section>
                <div className={'mb-4'}><h2 className={'font-medium'}>آمار وبلاگ</h2><p className={'mt-1 text-xs text-secondary-500'}>مرور سریع وضعیت فعلی</p></div>
                <Suspense fallback={<Spinner text={'درحال بارگذاری اطلاعات'}/>}>
                    <CardWrapper/>
                </Suspense>
            </section>
            <section>
                <div className={'mb-4'}><h2 className={'font-medium'}>آخرین پست‌ها</h2><p className={'mt-1 text-xs text-secondary-500'}>چهار نوشتهٔ تازهٔ شما</p></div>
                <Suspense fallback={<Spinner text={'درحال بارگذاری پست ها'} />}>
                    <PostTable posts={posts} />
                </Suspense>
            </section>
        </div>
    );
}

export default Profile;
