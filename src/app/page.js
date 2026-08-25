import Button from "@/ui/Button";
import Link from "next/link";
import Header from "@/components/Header";
import {getAllPosts, getPostsCategoriesApi} from "@/services/postSevices";
import BlogPostCard from "@/app/(blog)/blogs/_components/PostCard";
import {
    ArrowLeftIcon,
    BookOpenIcon,
    FolderIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Home | next Blog",
    description:'its home page of blog application with next.js',
}

export default async function Home() {
    const [postsResult, categoriesResult] = await Promise.allSettled([
        getAllPosts(),
        getPostsCategoriesApi(),
    ]);

    const posts = postsResult.status === "fulfilled" ? postsResult.value.posts || [] : [];
    const categories = categoriesResult.status === "fulfilled" ? categoriesResult.value.categories || [] : [];

    return (
        <div className={'min-h-screen bg-background'}>
            <Header/>
            <main className={'container mx-auto max-w-8xl px-5 pb-16'}>
                <section className={'relative overflow-hidden rounded-3xl border border-primary-100 bg-primary-50 px-6 py-12 sm:px-12 sm:py-16'}>
                    <div className={'absolute -left-16 -top-16 size-48 rounded-full bg-primary-200/60 blur-2xl'} />
                    <div className={'absolute -bottom-24 right-8 size-52 rounded-full bg-primary-300/50 blur-3xl'} />
                    <div className={'relative max-w-2xl'}>
                        <span className={'mb-5 inline-flex items-center gap-2 rounded-full bg-secondary-0 px-3 py-1.5 text-xs font-bold text-primary-900 shadow-sm'}>
                            <BookOpenIcon className={'size-4'} />
                            یک خانه برای خواندن و نوشتن
                        </span>
                        <h1 className={'leading-tight text-secondary-900'}>بلاگ‌های خوب، دور از شلوغی.</h1>
                        <p className={'mt-5 max-w-xl leading-8 text-secondary-600'}>
                            نوشته‌های تازه را دنبال کنید، ایده‌هایتان را منتشر کنید و همه‌چیز را از یک پنل ساده مدیریت کنید.
                        </p>
                        <div className={'mt-8 flex flex-wrap gap-3'}>
                            <Link href={'/blogs'}><Button variant={'primary'} className={'items-center gap-2'}>مشاهده بلاگ‌ها <ArrowLeftIcon className={'size-4'} /></Button></Link>
                            <Link href={'/profile'}><Button variant={'outline'} className={'items-center gap-2'}><PencilSquareIcon className={'size-4'} /> مدیریت نوشته‌ها</Button></Link>
                        </div>
                    </div>
                </section>

                {categories.length > 0 && (
                    <section className={'py-12'}>
                        <div className={'mb-5 flex items-center justify-between'}>
                            <div>
                                <p className={'text-sm font-bold text-secondary-800'}>دسته‌بندی‌ها</p>
                                <p className={'mt-1 text-xs text-secondary-500'}>موضوعی را انتخاب کنید و مستقیم به سراغ نوشته‌ها بروید.</p>
                            </div>
                            <FolderIcon className={'size-6 text-primary-700'} />
                        </div>
                        <div className={'flex flex-wrap gap-2'}>
                            {categories.slice(0, 8).map((category) => (
                                <Link key={category._id} href={`/blogs/category/${category.slug}`} className={'rounded-xl border border-secondary-200 bg-secondary-0 px-4 py-2 text-sm text-secondary-600 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-900'}>
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {posts.length > 0 && (
                    <section className={'border-t border-secondary-200 pt-10'}>
                        <div className={'mb-6 flex items-end justify-between gap-4'}>
                            <div>
                                <h2>تازه‌ترین نوشته‌ها</h2>
                                <p className={'mt-2 text-sm text-secondary-500'}>چند مطلب تازه برای شروع یک مطالعهٔ خوب.</p>
                            </div>
                            <Link href={'/blogs'} className={'shrink-0 text-sm font-bold text-primary-900 hover:text-primary-700'}>همهٔ نوشته‌ها</Link>
                        </div>
                        <div className={'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'}>
                            {posts.slice(0, 3).map((post) => <BlogPostCard key={post._id} post={post} />)}
                        </div>
                    </section>
                )}
            </main>
            <footer className={'border-t border-secondary-200 py-6 text-center text-xs text-secondary-500'}>
                ساخته‌شده برای خواندن، نوشتن و به‌اشتراک‌گذاری ایده‌ها.
            </footer>
        </div>
    )
}
