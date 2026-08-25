import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "@/app/(dashboard)/profile/posts/create/_/components/CreatePostForm";

function createPost() {

    return (
        <div className={'mx-auto max-w-3xl'}>
            <Breadcrumbs breadcrumbs={[
                {
                    label:'پست ها',
                    href: '/profile/posts'

                },
                {
                    label:'ایجاد پست جدید',
                    href:'/profile/posts/create',
                    active:true,

                }
            ]} />

            <CreatePostForm/>

        </div>
    );
}

export default createPost;
