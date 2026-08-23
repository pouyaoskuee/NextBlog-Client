import toast from "react-hot-toast";
import {editPostApi} from "@/services/postSevices";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export function useEditPost() {
    const queryClient = useQueryClient();
    const {mutate:submitEdit , isPending:isLoadingEdit} = useMutation({
        mutationKey: ['editePosts'],
        mutationFn: editPostApi,
        onSuccess: (data ) => {
            console.log('success', data);
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ['posts'],
            })
        },
        onError: ( error ) => {
            toast.error(error?.response?.data?.message);
        },


    })

    return {submitEdit , isLoadingEdit}
}