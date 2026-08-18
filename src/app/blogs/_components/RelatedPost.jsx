import CoverImage from "./CoverImage";
import Avatar from "@/app/blogs/_components/Avatar";

function RelatedPost({ posts }) {
    return (
        <div className=" mb-10 px-4">
            <h2 className="text-xl mb-4">پست های مرتبط</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {posts.map((post) => {
                    return (
                        <div key={post._id} className="border border-secondary-300 shadow-md rounded-lg overflow-hidden">
                            <CoverImage post={post} />
                            <div className="flex posts-center justify-between p-2 py-8">
                                <p>{post.title}</p>
                                <Avatar {...post.author} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default RelatedPost;
