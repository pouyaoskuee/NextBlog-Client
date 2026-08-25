import PostCard from "@/app/(blog)/blogs/_components/PostCard";

function RelatedPost({ posts }) {
    return (
        <section className="container mx-auto mb-14 mt-14 max-w-6xl px-5">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <p className="mb-1 text-sm font-bold text-primary-900">مطالعه بیشتر</p>
                    <h2>نوشته‌های مرتبط</h2>
                </div>
                <span className="text-xs text-secondary-500">پیشنهادهایی از همین موضوع</span>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                    return (
                        <PostCard key={post._id} post={post}  />
                    );
                })}
            </div>
        </section>
    );
}
export default RelatedPost;
