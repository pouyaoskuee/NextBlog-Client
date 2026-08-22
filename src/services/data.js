import {getAllPosts} from "@/services/postSevices";
import {getAllCommentApi} from "@/services/commentsSevices";
import {getAllUserApi} from "@/services/authServices";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/setCookies";

export async function fetchCardData() {

    const cookiesStore = await cookies()
    const options = await setCookies(cookiesStore)

    try {
       const data = await Promise.all([
           getAllUserApi(options),
           getAllPosts({options}),
           getAllCommentApi(options)
       ])

        const numOfUsers = (data[0].users).length
        const numOfPosts = data[1].posts.length
        const numOfComments = data[2].commentsCount

        return {
           numOfUsers,
            numOfPosts,
            numOfComments
        }

    }catch (error) {
        console.error(error);
        throw new Error('خطا رد فچ کردن اطلاعات کارت ها');
    }

}