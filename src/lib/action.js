"use server"
import {createCommentApi} from "@/services/commentsSevices";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/setCookies";
import toast from "react-hot-toast";
import {revalidatePath} from "next/cache";


export async function createComments( prevState ,{parentId, postId, formData}) {

    const cookiesStore = await cookies()
    const options = await setCookies(cookiesStore)

    try {
        const rawData = {
            postId,
            parentId,
            text: formData.get("text"),
        }
        const {message} = await createCommentApi(rawData , options)
        revalidatePath('/blogs/[postSlug]')
        return {
            message,
        }


    }catch (err) {
        const error =  err?.response?.data?.message
        return {
            error
        }
    }


}