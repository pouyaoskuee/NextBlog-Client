import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "@/app/(dashboard)/profile/posts/create/_/components/CreatePostForm";
import {getPostByIdApi} from "@/services/postSevices";

async function EditPostForm({params}) {
    const { postId } = await params;
    const {post} = await getPostByIdApi(postId)
    return (
        <div className={'mx-auto max-w-3xl'}>
            <Breadcrumbs breadcrumbs={[
                {
                    label:'پست ها',
                    href: '/profile/posts'

                },
                {
                    label:'ویرایش پست',
                    href:`/profile/posts/${postId}/edit`,
                    active:true,

                }
            ]} />
            <CreatePostForm post={post}/>
        </div>
    );
}

export default EditPostForm;
