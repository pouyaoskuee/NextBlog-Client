import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "@/app/(dashboard)/profile/posts/create/_/components/CreatePostForm";
import {getPostByIdApi} from "@/services/postSevices";

async function EditPostForm({params}) {
    const { postId } = await params;
    const {post} = await getPostByIdApi(postId)
    return (
        <>
            <Breadcrumbs breadcrumbs={[
                {
                    label:'پست ها',
                    href: '/profile/posts'

                },
                {
                    label:'ایجاد پست جدید',
                    href:'/profile/posts/edit',
                    active:true,

                }
            ]} />
            <CreatePostForm post={post}/>
        </>
    );
}

export default EditPostForm;