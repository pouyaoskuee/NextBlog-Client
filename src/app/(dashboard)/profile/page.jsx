import CardWrapper from "@/app/(dashboard)/profile/components/CardWrapper";
import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";
import {Suspense} from "react";
import {Spinner} from "@/ui/Spinner";

export const metadata = {
    title: "پروفایل کاربری",
}

async function Profile() {


    const {posts} = await getAllPosts({queries:'sort=latest&limit=4'});

  return (
    <div className={'space-y-10'}>
        <h2 className={'font-medium'}>داشبورد</h2>
        <Suspense fallback={<Spinner text={'درحال بارگذاری اطلاعات'}/>}>
            <CardWrapper/>
        </Suspense>
        <h2 className={'font-medium'}>پست ها</h2>
        <Suspense fallback={<Spinner text={'درحال بارگذاری پست ها'}/>}>
            <PostTable posts={posts} />
        </Suspense>

    </div>
  );
}
export default Profile;
