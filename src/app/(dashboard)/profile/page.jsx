import CardWrapper from "@/app/(dashboard)/profile/components/CardWrapper";
import PostTable from "@/app/(dashboard)/profile/posts/components/PostTable";
import {getAllPosts} from "@/services/postSevices";

export const metadata = {
    title: "پروفایل کاربری",
}

async function Profile() {


    const posts = await getAllPosts({queries:'sort=latest&limit=4'});

  return (
    <div className={'space-y-10'}>
        <CardWrapper/>
        <PostTable posts={posts} />
    </div>
  );
}
export default Profile;
