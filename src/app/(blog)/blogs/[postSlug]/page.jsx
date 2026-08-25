import Image from "next/image";
import Link from "next/link";
import {ArrowLeftIcon, BookOpenIcon, ClockIcon, FolderIcon} from "@heroicons/react/24/outline";
import notFound from "@/app/(blog)/blogs/[postSlug]/not-found";
import {getAllPosts, getPost} from "@/services/postSevices";
import RelatedPost from "@/app/(blog)/blogs/_components/RelatedPost";
import PostComments from "@/app/(blog)/blogs/_components/comments/PostComments";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";
import Interaction from "@/app/(blog)/blogs/_components/Interaction";

export async function generateStaticParams(){
    try {
        const {posts = []} = await getAllPosts();
        return posts.slice(0, 4).map((item) => ({postSlug: item.slug || ''}));
    } catch {
        return [];
    }
}

export async function generateMetadata({params}) {
    const post = await getPost(await params);

    return {
        title: post?.title || 'پست یافت نشد',
    }
}

async function Page({ params }) {
    const post = await getPost(await params);

    if (!post) return notFound();

    const categoryTitle = post.category?.title || 'بلاگ';

    return(
        <div className={'pb-16'}>
            <article className={'container mx-auto max-w-8xl px-5'}>
                <nav aria-label={'مسیر صفحه'} className={'mb-7 flex items-center gap-2 text-sm text-secondary-500'}>
                    <Link href={'/blogs'} className={'transition-colors hover:text-primary-900'}>همهٔ نوشته‌ها</Link>
                    <ArrowLeftIcon className={'size-3.5'} />
                    <span className={'truncate text-secondary-700'}>{categoryTitle}</span>
                </nav>

                <header className={'mb-7 rounded-3xl border border-primary-100 bg-primary-50 px-5 py-7 sm:px-9 sm:py-10'}>
                    <span className={'inline-flex items-center gap-1.5 rounded-full bg-secondary-0 px-3 py-1.5 text-xs font-bold text-primary-900 shadow-sm'}>
                        <FolderIcon className={'size-3.5'} />
                        {categoryTitle}
                    </span>
                    <h1 className={'mt-5 max-w-8xl leading-tight text-secondary-900'}>{post.title}</h1>
                    {post.briefText && <p className={'mt-5 max-w-3xl text-sm leading-8 text-secondary-600 sm:text-base'}>{post.briefText}</p>}
                    <div className={'mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-secondary-500'}>
                        <Avatar {...post.author} width="34" height="34" />
                        <span className={'flex items-center gap-1.5'}><ClockIcon className={'size-4'} /> {post.readingTime || 1} دقیقه زمان مطالعه</span>
                    </div>
                </header>

                <div className={'relative mb-10 aspect-video overflow-hidden rounded-3xl bg-secondary-100 shadow-lg shadow-secondary-200/70'}>
                    <Image src={post.coverImageUrl || '/images/user.jpg'} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className={'object-cover'} />
                </div>

                <div className={'mx-auto max-w-8xl'}>
                    <div className={'mb-8 rounded-2xl border-r-4 border-primary-900 bg-secondary-50 px-5 py-4 text-sm leading-8 text-secondary-600'}>
                        <span className={'mb-2 flex items-center gap-2 font-bold text-secondary-800'}><BookOpenIcon className={'size-4 text-primary-900'} /> خلاصهٔ نوشته</span>
                        {post.briefText || 'در این نوشته، نکات و ایده‌های کاربردی را با هم مرور می‌کنیم.'}
                    </div>
                    <div className={'whitespace-pre-line text-sm leading-9 text-secondary-700 sm:text-base sm:leading-9'}>{post.text}</div>
                    <div className={'mt-10 border-y border-secondary-200 py-4'}>
                        <Interaction post={post} />
                    </div>
                </div>
            </article>

            {post.related?.length > 0 && <RelatedPost posts={post.related}/>} 

            <section className={'container mx-auto max-w-8xl px-5 mt-10'}>
                <PostComments post={{...post, comments: post.comments || []}} />
            </section>
        </div>
    );
}

export default Page;
