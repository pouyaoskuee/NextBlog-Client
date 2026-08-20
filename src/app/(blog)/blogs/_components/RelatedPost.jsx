import CoverImage from "./CoverImage";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";
import PostCard from "@/ui/PostCard";

function RelatedPost({ posts }) {
    return (
        <div className=" mb-10 px-4">
            <h2 className="text-xl mb-4">پست های مرتبط</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {posts.map((post) => {
                    return (
                        <PostCard key={post._id} post={post}  />
                    );
                })}
            </div>
        </div>
    );
}
export default RelatedPost;
