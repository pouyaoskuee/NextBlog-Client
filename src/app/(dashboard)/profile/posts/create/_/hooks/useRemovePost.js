import {useMutation, useQueryClient} from "@tanstack/react-query";
import {removePostByIdApi} from "@/services/postSevices";
import toast from "react-hot-toast";

export default function useRemovePost(post){
    const queryClient = useQueryClient();
    const {mutate:removePost , isPending:loadingRemovePost} = useMutation({
        mutationKey: ["deletePost"],
        mutationFn: removePostByIdApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ['posts'],
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
    })

    return {removePost , loadingRemovePost};
}