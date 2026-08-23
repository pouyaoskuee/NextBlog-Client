import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPostApi} from "@/services/postSevices";
import toast from "react-hot-toast";

export function useCreatePost() {
    const queryClient = useQueryClient();
    const {mutate , isPending} = useMutation({
        mutationKey: ['createPost'],
        mutationFn: createPostApi,
        onSuccess: (data ) => {
            console.log('success', data);
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ['posts'],
            })
        },
        onError: ( error ) => {
            console.log('error', error);
            toast.error(error?.response?.data?.message);
        },


    })

    return {mutate , isPending}
}